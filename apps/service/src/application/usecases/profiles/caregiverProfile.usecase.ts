import { Caregiver } from "@packages";
import { UserId } from "@packages";
import { Address } from "@packages";
import { CaregiverRepository } from "../../../infrastructure/repositories/user/userCaregiver.repository.js";
import { Prisma } from "../../../generated/prisma/wasm.js";
import { IAddress } from "@packages";

export class CaregiverFacadeUseCase {
  constructor(private caregiverRepo: CaregiverRepository) {}

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
    // validation
    if (input.serviceRadiusKm <= 0) {
      throw new Error("Raio de atendimento inválido");
    }

    const caregiver = new Caregiver(
      0,
      UserId.create(input.userId),
      input.offersHosting,
      Address.restore(input.address),
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
