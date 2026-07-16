import type { Caregiver, OwnerProfile } from "@packages";
import { UsersRepository } from "apps/service/src/infrastructure/repositories/auth/authLogin.repository.js";
import { OwnerProfileRepository } from "../../../infrastructure/repositories/user/userOwner.repository.js";
import { CaregiverRepository } from "../../../infrastructure/repositories/user/userCaregiver.repository.js";
import { CaregiverPetPreferenceRepository } from "apps/service/src/infrastructure/repositories/user/caregiverPetPreference.repository.js";
import { ServiceOfferRepository } from "apps/service/src/infrastructure/repositories/services/serviceOffer.repository.js";
import { ProfileDTO } from "@packages";

export class ProfileUseCase {
  constructor(
    private usersRepo: UsersRepository,
    private ownerProfileRepo: OwnerProfileRepository,
    private caregiverRepo: CaregiverRepository,
    private serviceRepo: ServiceOfferRepository,
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

    if (!caregiver?.id) {
      const services: ProfileDTO["services"] = [];
      const preferences: ProfileDTO["preferences"] = [];
      const reviews: ProfileDTO["reviews"] = [];

      return {
        user: userDTO,
        ownerProfile: ownerProfileDTO,
        caregiverProfile: null,
        services,
        preferences,
        reviews,
      };
    }

    const [services, preferences] = await Promise.all([
      this.serviceRepo.findByCaregiver(caregiver.id),
      this.preferenceRepo.findByCaregiverId(caregiver.id),
    ]);

    const reviews: ProfileDTO["reviews"] = [];

    return {
      user: userDTO,
      ownerProfile: ownerProfileDTO,
      caregiverProfile: this.mapCaregiverProfileToDTO(caregiver),
      services,
      preferences,
      reviews,
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
  ): ProfileDTO["caregiverProfile"] {
    return {
      id: caregiver.id,
      userId: caregiver.getUserId().getValue(),
      offersHosting: caregiver.canHostPets(),
      serviceRadiusKm: caregiver.getServiceRadius(),
      isVerified: caregiver.hasVerification(),
      isPublicProfile: caregiver.isPublic(),
      averageRating: caregiver.getAverageRating(),
      reviewsCount: caregiver.getReviewsCount(),
      address: caregiver.getAddress().toPrimitives(),
    };
  }
}
