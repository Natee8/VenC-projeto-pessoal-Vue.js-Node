import { Address, Caregiver, IAddress } from "@packages";
import { UserId } from "@packages";
import { CaregiverRepository } from "../../../infrastructure/repositories/user/userCaregiver.repository.js";
import { Prisma } from "../../../generated/prisma/wasm.js";
import { GeolocationService } from "apps/service/src/infrastructure/repositories/geolocation/geolocation.repository.js";

export class CaregiverFacadeUseCase {
  constructor(
    private caregiverRepo: CaregiverRepository,
    private geolocationService: GeolocationService,
  ) {}

  async save(
    input: {
      userId: number;
      offersHosting: boolean;
      address: IAddress;
      serviceRadiusKm: number;
      isPublicProfile?: boolean;
    },
    tx?: Prisma.TransactionClient,
  ) {
    if (input.serviceRadiusKm <= 0) {
      throw new Error("Raio de atendimento inválido");
    }

    const coordinates = await this.geolocationService.getCoordinatesByCep(
      input.address.zipCode,
    );

    const address = new Address(
      input.address.street,
      input.address.number,
      input.address.neighborhood,
      input.address.city,
      input.address.state,
      input.address.zipCode,
      input.address.complement,
      coordinates?.latitude,
      coordinates?.longitude,
    );

    const caregiver = new Caregiver(
      0,
      UserId.create(input.userId),
      input.offersHosting,
      address,
      input.serviceRadiusKm,
      false,
      input.isPublicProfile ?? true,
      new Date(),
      new Date(),
    );

    const saved = await this.caregiverRepo.save(caregiver, tx);

    return this.toDTO(saved);
  }

  async getByUserId(userId: number) {
    const caregiver = await this.caregiverRepo.findByUserId(userId);

    return caregiver ? this.toDTO(caregiver) : null;
  }

  private toDTO(caregiver: Caregiver) {
    return {
      id: caregiver.id,
      userId: caregiver.getUserId().getValue(),
      offersHosting: caregiver.canHostPets(),
      address: caregiver.getAddress().toPrimitives(),
      serviceRadiusKm: caregiver.getServiceRadius(),
      isVerified: caregiver.hasVerification(),
      isPublic: caregiver.isPublic(),
    };
  }
}
