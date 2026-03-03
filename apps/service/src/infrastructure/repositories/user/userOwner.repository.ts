import { PrismaClient } from "../../../generated/prisma/index.js";
import type {
  Prisma,
  OwnerProfile as PrismaOwnerProfile,
} from "../../../generated/prisma/index.js";

import { OwnerProfile } from "../../../../../../packages/src/domain/entities/ownerProfile.js";
import { UserId } from "../../../../../../packages/src/valuesObjects/userId.js";
import { Address } from "../../../../../../packages/src/valuesObjects/address.js";
import { Phone } from "../../../../../../packages/src/valuesObjects/phone.js";

export class OwnerProfileRepository {
  private prisma = new PrismaClient();

  private mapToEntity(record: PrismaOwnerProfile): OwnerProfile {
    if (!record.address) {
      throw new Error("OwnerProfile sem endereço (estado inválido)");
    }

    return new OwnerProfile(
      UserId.create(record.userId),

      Address.restore(record.address),

      record.phone ? Phone.restore(record.phone) : null,

      record.createdAt,
      record.updatedAt,

      record.searchRadiusKm ?? undefined,
    );
  }

  async save(
    ownerProfile: OwnerProfile,
    tx?: Prisma.TransactionClient,
  ): Promise<OwnerProfile> {
    const client = tx ?? this.prisma;

    const record = await client.ownerProfile.upsert({
      where: { userId: ownerProfile.getUserId().getValue() },

      update: {
        address: ownerProfile.getAddress().toPrimitives(),
        phone: ownerProfile.getPhone()?.toPrimitives() ?? null,
        searchRadiusKm: ownerProfile.getSearchRadius(),
        updatedAt: new Date(),
      },

      create: {
        userId: ownerProfile.getUserId().getValue(),
        address: ownerProfile.getAddress().toPrimitives(),
        phone: ownerProfile.getPhone()?.toPrimitives() ?? null,
        searchRadiusKm: ownerProfile.getSearchRadius(),
      },
    });

    return this.mapToEntity(record);
  }

  async findByUserId(
    userId: number,
    tx?: Prisma.TransactionClient,
  ): Promise<OwnerProfile | null> {
    const client = tx ?? this.prisma;

    const record = await client.ownerProfile.findUnique({
      where: { userId },
    });

    if (!record) return null;

    return this.mapToEntity(record);
  }

  async findAll(tx?: Prisma.TransactionClient): Promise<OwnerProfile[]> {
    const client = tx ?? this.prisma;

    const records = await client.ownerProfile.findMany();
    return records.map(this.mapToEntity);
  }
}
