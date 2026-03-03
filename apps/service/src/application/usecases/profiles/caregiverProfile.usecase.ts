import { Caregiver } from "../../../../../../packages/src/domain/entities/caregiverEntity.js";
import { UserId } from "../../../../../../packages/src/valuesObjects/userId.js";
import { Address } from "../../../../../../packages/src/valuesObjects/address.js";
import type { AddressPrimitives } from "../../../../../../packages/src/types/address.js";
import { CaregiverRepository } from "../../../infrastructure/repositories/user/userCaregiver.repository.js";
import { Prisma } from "../../../generated/prisma/wasm.js";
import { IAddress } from "../../../../../../packages/src/domain/dtos/IAddress.dto.js";

export class CaregiverFacadeUseCase {
  constructor(private caregiverRepo: CaregiverRepository) {}

  async save(
    input: {
      userId: number;
      offersHosting: boolean;
      address: IAddress;
      serviceRadiusKm: number;
    },
    tx?: Prisma.TransactionClient,
  ) {
    const caregiver = new Caregiver(
      0,
      UserId.create(input.userId),
      input.offersHosting,
      Address.restore(input.address),
      input.serviceRadiusKm,
      false,
      true,
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
      isActive: caregiver.isCurrentlyActive(),
      isEnabled: caregiver.isEnabled(),
    };
  }
}
