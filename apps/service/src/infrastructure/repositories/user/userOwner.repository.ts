import { PrismaClient } from "../../../generated/prisma/index.js";
import type { Prisma } from "../../../generated/prisma/index.js";
import { State as PrismaState } from "../../../generated/prisma/index.js";
import { OwnerProfile, UserId } from "@packages";
import { Address } from "@packages";
import { Phone } from "@packages";
import { OwnerProfileWithAddress } from "./types/ownerProfileWhitAdrress.js";

export class OwnerProfileRepository {
  private prisma = new PrismaClient();

  private mapToEntity(record: OwnerProfileWithAddress): OwnerProfile {
    if (!record.address) {
      throw new Error("Tutor sem endereço (estado inválido)");
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
      where: {
        userId: ownerProfile.getUserId().getValue(),
      },

      include: {
        address: true,
      },

      update: {
        phone: ownerProfile.getPhone()?.toPrimitives() ?? null,
        searchRadiusKm: ownerProfile.getSearchRadius(),

        address: {
          update: {
            street: ownerProfile.getAddress().street,
            number: ownerProfile.getAddress().number,
            neighborhood: ownerProfile.getAddress().neighborhood,
            city: ownerProfile.getAddress().city,
            state: {
              set: ownerProfile.getAddress().state,
            },
            zipCode: ownerProfile.getAddress().zipCode,
          },
        },
      },

      create: {
        userId: ownerProfile.getUserId().getValue(),

        phone: ownerProfile.getPhone()?.toPrimitives() ?? null,

        searchRadiusKm: ownerProfile.getSearchRadius(),

        address: {
          create: {
            street: ownerProfile.getAddress().street,
            number: ownerProfile.getAddress().number,
            neighborhood: ownerProfile.getAddress().neighborhood,
            city: ownerProfile.getAddress().city,
            state: ownerProfile.getAddress().state as PrismaState,
            zipCode: ownerProfile.getAddress().zipCode,
          },
        },
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
      include: {
        address: true,
      },
    });

    if (!record) return null;

    return this.mapToEntity(record);
  }

  async findAll(tx?: Prisma.TransactionClient): Promise<OwnerProfile[]> {
    const client = tx ?? this.prisma;

    const records: OwnerProfileWithAddress[] =
      await client.ownerProfile.findMany({
        include: {
          address: true,
        },
      });
    return records.map((record) => this.mapToEntity(record));
  }
}
