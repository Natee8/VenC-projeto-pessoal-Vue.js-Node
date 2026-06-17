import {
  Address,
  Caregiver,
  CaregiverDTO,
  CaregiverPublicDTO,
  IAddress,
} from "@packages";
import { UserId } from "@packages";
import { CaregiverRepository } from "../../../infrastructure/repositories/user/userCaregiver.repository.js";
import { Prisma } from "../../../generated/prisma/wasm.js";
import { GeolocationService } from "apps/service/src/infrastructure/repositories/geolocation/geolocation.repository.js";
import {
  Either,
  left,
  right,
} from "apps/service/src/core/interface/IEighter.js";
import { ListCaregiversFilters } from "apps/service/src/domain/dtos/service.dto.js";

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

      const address = Address.create({
        street: input.address.street,
        number: input.address.number,
        neighborhood: input.address.neighborhood,
        city: input.address.city,
        state: input.address.state,
        zipCode: input.address.zipCode,
        complement: input.address.complement,
        latitude: coordinates?.latitude ?? undefined,
        longitude: coordinates?.longitude ?? undefined,
      });

      const caregiver = new Caregiver(
        null,
        0,
        UserId.create(input.userId),
        input.offersHosting,
        address,
        input.serviceRadiusKm,
        false,
        input.isPublicProfile ?? true,
        0,
        0,
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

  async getPublicCaregivers(
    filters?: ListCaregiversFilters,
  ): Promise<Either<Error, CaregiverPublicDTO[]>> {
    if (
      filters?.minRating &&
      (filters.minRating < 1 || filters.minRating > 5)
    ) {
      return left(new Error("minRating deve estar entre 1 e 5"));
    }

    const caregivers = await this.caregiverRepo.findPublicCaregivers(filters);

    return right(caregivers);
  }

  private toDTO(caregiver: Caregiver): CaregiverDTO {
    return {
      id: caregiver.id,
      userId: caregiver.getUserId().getValue(),
      offersHosting: caregiver.canHostPets(),
      address: caregiver.getAddress().toPrimitives(),
      serviceRadiusKm: caregiver.getServiceRadius(),
      isVerified: caregiver.hasVerification(),
      isPublic: caregiver.isPublic(),

      averageRating: caregiver.getAverageRating(),
      reviewsCount: caregiver.getReviewsCount(),
    };
  }
}
