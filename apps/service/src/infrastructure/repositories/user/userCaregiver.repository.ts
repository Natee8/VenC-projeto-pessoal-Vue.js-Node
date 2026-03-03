import { PrismaClient } from "../../../generated/prisma/index.js";
import type {
  Prisma,
  Caregiver as PrismaCaregiver,
} from "../../../generated/prisma/index.js";

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
      // new field from schema
      record.isPublicProfile ?? false,
      record.createdAt,
      record.updatedAt,
    );
  }

  async save(
    caregiver: Caregiver,
    tx?: Prisma.TransactionClient,
  ): Promise<Caregiver> {
    const client = tx ?? this.prisma;

    const record = await client.caregiver.upsert({
      where: { userId: caregiver.getUserId().getValue() },

      update: {
        offersHosting: caregiver.canHostPets(),
        address: caregiver.getAddress().toPrimitives(),
        serviceRadiusKm: caregiver.getServiceRadius(),
        isVerified: caregiver.hasVerification(),
        // map public profile flag
        isPublicProfile: caregiver.isPublic(),
        updatedAt: new Date(),
      },

      create: {
        userId: caregiver.getUserId().getValue(),
        offersHosting: caregiver.canHostPets(),
        address: caregiver.getAddress().toPrimitives(),
        serviceRadiusKm: caregiver.getServiceRadius(),
        isVerified: caregiver.hasVerification(),
        isPublicProfile: caregiver.isPublic(),
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    });

    return this.mapToEntity(record);
  }

  async findByUserId(userId: number, tx?: Prisma.TransactionClient) {
    const client = tx ?? this.prisma;

    const record = await client.caregiver.findUnique({
      where: { userId },
    });

    return record ? this.mapToEntity(record) : null;
  }
}
