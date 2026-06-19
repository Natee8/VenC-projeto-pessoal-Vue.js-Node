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
      record.basePrice,
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
      record.averageRating,
      record.reviewsCount ?? 0,
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
        user: true,
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

    if (filters?.serviceIds?.length || filters?.minPrice || filters?.maxPrice) {
      console.log("🟡 SERVICE FILTER CHECK:");
      console.log({
        serviceIds: filters?.serviceIds,
        hasServiceIds: filters?.serviceIds?.length,
      });
      where.services = {
        some: {
          isActive: true,

          ...(filters.serviceIds?.length && {
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
    console.log("🟢 WHERE FINAL:");
    console.log(JSON.stringify(where, null, 2));

    const records = await this.prisma.caregiver.findMany({
      where,

      include: {
        address: true,
        user: true,

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

    console.log("🔵 RAW RECORDS:");
    console.dir(records, { depth: 5 });

    records.forEach((r) => {
      console.log(`🧩 Caregiver ${r.id} services:`);
      console.log(
        r.services.map((s) => ({
          serviceId: s.serviceId,
          serviceName: s.service.name,
        })),
      );
    });

    return records.map((r) => ({
      id: r.id,
      name: r.user.name,
      avatarUrl: r.user.profilePhotoUrl,
      rating: r.averageRating,
      reviewsCount: r.reviewsCount,
      city: r.address?.city,
      state: r.address?.state,
      startingPrice: r.basePrice,
      services: r.services.map((s) => ({
        id: s.service.id,
        name: s.service.name,
        price: s.price,
      })),
    }));
  }
}
