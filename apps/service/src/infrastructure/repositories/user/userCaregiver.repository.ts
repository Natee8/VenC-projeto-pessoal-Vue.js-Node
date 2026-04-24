import { PrismaClient } from "../../../generated/prisma/index.js";
import type { Prisma, State } from "../../../generated/prisma/index.js";

import { Caregiver } from "@packages";
import { UserId } from "@packages";
import { Address } from "@packages";
import { CaregiverWithAddress } from "apps/service/src/utils/usersWithAddress.js";

export class CaregiverRepository {
  private prisma = new PrismaClient();

  private mapToEntity(record: CaregiverWithAddress): Caregiver {
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
      where: {
        userId: caregiver.getUserId().getValue(),
      },

      include: {
        address: true,
      },

      create: {
        userId: caregiver.getUserId().getValue(),
        offersHosting: caregiver.canHostPets(),
        serviceRadiusKm: caregiver.getServiceRadius(),
        isVerified: caregiver.hasVerification(),
        isPublicProfile: caregiver.isPublic(),
        createdAt: new Date(),
        updatedAt: new Date(),

        address: {
          create: {
            street: caregiver.getAddress().street,
            number: caregiver.getAddress().number,
            neighborhood: caregiver.getAddress().neighborhood,
            city: caregiver.getAddress().city,
            state: caregiver.getAddress().state as State,
            zipCode: caregiver.getAddress().zipCode,
          },
        },
      },

      update: {
        offersHosting: caregiver.canHostPets(),
        serviceRadiusKm: caregiver.getServiceRadius(),
        isVerified: caregiver.hasVerification(),
        isPublicProfile: caregiver.isPublic(),
        updatedAt: new Date(),

        address: {
          update: {
            street: caregiver.getAddress().street,
            number: caregiver.getAddress().number,
            neighborhood: caregiver.getAddress().neighborhood,
            city: caregiver.getAddress().city,
            state: caregiver.getAddress().state as State,
            zipCode: caregiver.getAddress().zipCode,
          },
        },
      },
    });

    return this.mapToEntity(record);
  }

  async findByUserId(userId: number, tx?: Prisma.TransactionClient) {
    const client = tx ?? this.prisma;

    const record = await client.caregiver.findUnique({
      where: { userId },
      include: {
        address: true,
      },
    });

    return record ? this.mapToEntity(record) : null;
  }
}
