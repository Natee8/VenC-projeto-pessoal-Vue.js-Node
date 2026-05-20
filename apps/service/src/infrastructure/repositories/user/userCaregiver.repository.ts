import { PrismaClient } from "../../../generated/prisma/index.js";
import type { Prisma } from "../../../generated/prisma/index.js";
import { Caregiver, UserId, Address, State } from "@packages";
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
      Address.restore({
        ...record.address,

        state: record.address.state as unknown as State,

        complement: record.address.complement ?? undefined,
        latitude: record.address.latitude ?? undefined,
        longitude: record.address.longitude ?? undefined,
      }),
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
            street: caregiver.getAddress().getValue().street,
            number: caregiver.getAddress().getValue().number,
            neighborhood: caregiver.getAddress().getValue().neighborhood,
            city: caregiver.getAddress().getValue().city,
            state: caregiver.getAddress().getValue().state as State,
            zipCode: caregiver.getAddress().getValue().zipCode,
            complement: caregiver.getAddress().getValue().complement,
            latitude: caregiver.getAddress().getValue().latitude,
            longitude: caregiver.getAddress().getValue().longitude,
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
            street: caregiver.getAddress().getValue().street,
            number: caregiver.getAddress().getValue().number,
            neighborhood: caregiver.getAddress().getValue().neighborhood,
            city: caregiver.getAddress().getValue().city,
            state: caregiver.getAddress().getValue().state as State,
            zipCode: caregiver.getAddress().getValue().zipCode,
            complement: caregiver.getAddress().getValue().complement,
            latitude: caregiver.getAddress().getValue().latitude,
            longitude: caregiver.getAddress().getValue().longitude,
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

  async findPublicCaregivers() {
    const records = await this.prisma.caregiver.findMany({
      where: {
        isPublicProfile: true,
      },
      include: {
        address: true,
      },
    });

    return records.map((r) => this.mapToEntity(r as CaregiverWithAddress));
  }
}
