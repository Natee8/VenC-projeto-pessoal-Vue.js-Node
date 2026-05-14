import { Address, Caregiver, CaregiverDTO, IAddress } from "@packages";
import { UserId } from "@packages";
import { CaregiverRepository } from "../../../infrastructure/repositories/user/userCaregiver.repository.js";
import { Prisma } from "../../../generated/prisma/wasm.js";
import { GeolocationService } from "apps/service/src/infrastructure/repositories/geolocation/geolocation.repository.js";
import {
  Either,
  left,
  right,
} from "apps/service/src/core/interface/IEighter.js";

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
  ): Promise<Either<Error, CaregiverDTO>> {
    {
      if (input.serviceRadiusKm <= 0) {
        return left(new Error("Raio de atendimento inválido"));
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
        coordinates?.latitude ?? undefined,
        coordinates?.longitude ?? undefined,
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

      return right(this.toDTO(saved));
    }
  }

  async getByUserId(userId: number): Promise<Either<Error, CaregiverDTO>> {
    const caregiver = await this.caregiverRepo.findByUserId(userId);

    if (!caregiver) {
      return left(new Error("Cuidador não encontrado"));
    }

    return right(this.toDTO(caregiver));
  }

  async getPublicCaregivers(): Promise<Either<Error, CaregiverDTO[]>> {
    const caregivers = await this.caregiverRepo.findPublicCaregivers();

    return right(caregivers.map(this.toDTO));
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
