import { ListCaregiversFilters } from "apps/service/src/domain/dtos/service.dto.js";
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
      record.reviewsCount ?? 0,
      record.averageRating ?? 0,
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

  async findPublicCaregivers(filters?: ListCaregiversFilters) {
    const where: Prisma.CaregiverWhereInput = {
      isPublicProfile: true,
      isActive: true,
    };

    // 📍 localização
    if (filters?.city || filters?.state) {
      where.address = {};

      if (filters.city) {
        where.address.city = filters.city;
      }

      if (filters.state) {
        where.address.state = filters.state as State;
      }
    }

    if (filters?.offersHosting !== undefined) {
      where.offersHosting = filters.offersHosting;
    }

    if (filters?.minRating) {
      where.averageRating = {
        gte: filters.minRating,
      };
    }

    if (filters?.serviceIds || filters?.minPrice || filters?.maxPrice) {
      where.services = {
        some: {
          isActive: true,

          ...(filters.serviceIds && {
            serviceId: {
              in: filters.serviceIds,
            },
          }),

          ...(filters.minPrice && {
            price: {
              gte: filters.minPrice,
            },
          }),

          ...(filters.maxPrice && {
            price: {
              ...(filters.minPrice ? { gte: filters.minPrice } : {}),
              lte: filters.maxPrice,
            },
          }),
        },
      };
    }

    const records = await this.prisma.caregiver.findMany({
      where,

      include: {
        address: true,

        services: {
          where: {
            isActive: true,
          },
          include: {
            service: true,
          },
        },
      },

      orderBy: {
        averageRating: "desc",
      },
    });

    return records.map((r) => this.mapToEntity(r as CaregiverWithAddress));
  }
}
