import type {
  Caregiver,
  OwnerProfile,
  CaregiverPetPreference,
  ServiceOffer,
} from "@packages";
import { UsersRepository } from "apps/service/src/infrastructure/repositories/auth/authLogin.repository.js";
import { OwnerProfileRepository } from "../../../infrastructure/repositories/user/userOwner.repository.js";
import { CaregiverRepository } from "../../../infrastructure/repositories/user/userCaregiver.repository.js";
import { CaregiverPetPreferenceRepository } from "apps/service/src/infrastructure/repositories/user/caregiverPetPreference.repository.js";
import { ServiceOfferRepository } from "apps/service/src/infrastructure/repositories/services/serviceOffer.repository.js";
import { ServiceRepository } from "apps/service/src/infrastructure/repositories/services/serviceModel.repository.js";
import { ProfileDTO } from "@packages";

type CaregiverProfileBaseDTO = Omit<
  Exclude<ProfileDTO["caregiverProfile"], null>,
  "services" | "preferences" | "averagePrice"
>;
type CaregiverPetPreferenceDTO = Exclude<
  ProfileDTO["caregiverProfile"],
  null
>["preferences"][number];
type ServiceOfferDTO = Exclude<
  ProfileDTO["caregiverProfile"],
  null
>["services"][number];

export class ProfileUseCase {
  constructor(
    private usersRepo: UsersRepository,
    private ownerProfileRepo: OwnerProfileRepository,
    private caregiverRepo: CaregiverRepository,
    private serviceOfferRepo: ServiceOfferRepository,
    private serviceRepo: ServiceRepository,
    private preferenceRepo: CaregiverPetPreferenceRepository,
  ) {}

  async getProfile(userId: number): Promise<ProfileDTO> {
    const [user, ownerProfile, caregiver] = await Promise.all([
      this.usersRepo.findWithProfilesById(userId),
      this.ownerProfileRepo.findByUserId(userId),
      this.caregiverRepo.findByUserId(userId),
    ]);

    if (!user) {
      throw new Error("Usuário não encontrado");
    }

    const userDTO = this.mapUserToDTO(user);
    const ownerProfileDTO = this.mapOwnerProfileToDTO(ownerProfile);

    // 👇 Se NÃO for caregiver
    if (!caregiver?.id) {
      return {
        user: userDTO,
        ownerProfile: ownerProfileDTO,
        caregiverProfile: null,
      };
    }

    // 👇 Se for caregiver
    const [offers, preferences, averagePrice] = await Promise.all([
      this.serviceOfferRepo.findByCaregiver(caregiver.id),
      this.preferenceRepo.findByCaregiverId(caregiver.id),
      this.serviceOfferRepo.getAveragePriceByCaregiver(caregiver.id),
    ]);

    const services = await this.serviceRepo.findManyByIds(
      offers.map((offer) => offer.getServiceId()),
    );
    const serviceById = new Map(services.map((service) => [service.id, service]));

    return {
      user: userDTO,
      ownerProfile: ownerProfileDTO,
      caregiverProfile: {
        ...this.mapCaregiverProfileToDTO(caregiver),
        services: offers.map((offer) =>
          this.mapServiceOfferToDTO(offer, serviceById.get(offer.getServiceId())),
        ),
        preferences: preferences.map((preference) =>
          this.mapPreferenceToDTO(preference),
        ),
        averagePrice,
      },
    };
  }

  private mapUserToDTO(user: {
    id: number;
    name: string;
    email: string;
    profilePhotoUrl?: string | null;
  }) {
    return {
      id: user.id,
      name: user.name,
      email: user.email,
      profilePhotoUrl: user.profilePhotoUrl ?? null,
    };
  }

  private mapOwnerProfileToDTO(
    ownerProfile: OwnerProfile | null,
  ): ProfileDTO["ownerProfile"] | null {
    if (!ownerProfile) {
      return null;
    }

    return {
      userId: ownerProfile.getUserId().getValue(),
      address: ownerProfile.getAddress().toPrimitives(),
      phone: ownerProfile.getPhone()?.toPrimitives() ?? null,
      searchRadiusKm: ownerProfile.getSearchRadius(),
    };
  }

  private mapCaregiverProfileToDTO(
    caregiver: Caregiver,
  ): CaregiverProfileBaseDTO {
    return {
      id: caregiver.id,
      userId: caregiver.getUserId().getValue(),
      offersHosting: caregiver.canHostPets(),
      serviceRadiusKm: caregiver.getServiceRadius(),
      isVerified: caregiver.hasVerification(),
      isPublicProfile: caregiver.isPublic(),
      address: caregiver.getAddress().toPrimitives(),
    };
  }

  private mapServiceOfferToDTO(
    offer: ServiceOffer,
    service?: { id: number; name: string; description: string },
  ): ServiceOfferDTO {
    return {
      id: Number(offer.id),
      caregiverId: Number(offer.caregiverId),
      serviceId: offer.getServiceId(),
      description: offer.getDescription(),
      price: offer.getPrice().getAmount(),
      isActive: offer.isEnabled(),
      service,
    };
  }

  private mapPreferenceToDTO(
    preference: CaregiverPetPreference,
  ): CaregiverPetPreferenceDTO {
    return {
      id: preference.id,
      caregiverId: preference.caregiverId,
      animalType: preference.animalType,
      category: preference.category,
      minSize: preference.minSize,
      maxSize: preference.maxSize,
      accepted: preference.accepted,
      notes: preference.notes ?? null,
    };
  }
}
