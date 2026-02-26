import { PrismaClient } from "../../../generated/prisma/index.js";
import type { Caregiver as PrismaCaregiver } from "../../../generated/prisma/index.js";
import { Caregiver } from "../../../../../../packages/src/domain/entities/caregiverEntity.js";

import { UserId } from "../../../../../../packages/src/valuesObjects/userId.js";
import { Address } from "../../../../../../packages/src/valuesObjects/address.js";

export class CaregiverRepository {
  private prisma = new PrismaClient();

  private mapToEntity(record: PrismaCaregiver): Caregiver {
    if (!record.address) {
      throw new Error("Caregiver sem endereço");
    }

    return new Caregiver(
      record.id,
      UserId.create(record.userId),
      record.offersHosting,
      Address.restore(record.address),
      record.serviceRadiusKm,
      record.isVerified,
      record.isActive,
      record.createdAt,
      record.updatedAt,
    );
  }

  async save(caregiver: Caregiver): Promise<Caregiver> {
    const record = await this.prisma.caregiver.upsert({
      where: { userId: caregiver.getUserId().getValue() },

      update: {
        offersHosting: caregiver.canHostPets(),
        address: caregiver.getAddress().toPrimitives(),
        serviceRadiusKm: caregiver.getServiceRadius(),
        isVerified: caregiver.hasVerification(),
        isActive: caregiver.isCurrentlyActive(),
      },

      create: {
        userId: caregiver.getUserId().getValue(),
        offersHosting: caregiver.canHostPets(),
        address: caregiver.getAddress().toPrimitives(),
        serviceRadiusKm: caregiver.getServiceRadius(),
        isVerified: caregiver.hasVerification(),
        isActive: caregiver.isCurrentlyActive(),
      },
    });

    return this.mapToEntity(record);
  }

  async findByUserId(userId: number) {
    const record = await this.prisma.caregiver.findUnique({
      where: { userId },
    });

    return record ? this.mapToEntity(record) : null;
  }
}
