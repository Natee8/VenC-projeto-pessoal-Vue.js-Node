import { Money, ServiceOffer } from "@packages";

import {
  PrismaClient,
  ServiceOffer as PrismaServiceOffer,
} from "../../../generated/prisma/index.js";
import type { Prisma } from "../../../generated/prisma/index.js";

export class ServiceOfferRepository {
  constructor(private prisma: PrismaClient) {}

  private mapToEntity(offer: PrismaServiceOffer): ServiceOffer {
    return new ServiceOffer(
      String(offer.id),
      String(offer.caregiverId),
      offer.serviceId,
      offer.description,
      Money.create(offer.price),
      offer.isActive,
      new Date(),
      new Date(),
    );
  }

  async runInTransaction<T>(
    fn: (tx: Prisma.TransactionClient) => Promise<T>,
  ): Promise<T> {
    return this.prisma.$transaction(fn);
  }

  async getAveragePriceByCaregiver(caregiverId: number): Promise<number> {
    const result = await this.prisma.serviceOffer.aggregate({
      where: { caregiverId },
      _avg: {
        price: true,
      },
    });

    return result._avg.price ?? 0;
  }

  async create(
    data: {
      caregiverId: number;
      serviceId: number;
      description?: string;
      price: number;
    },
    tx?: Prisma.TransactionClient,
  ): Promise<ServiceOffer> {
    const client = tx ?? this.prisma;

    const record = await client.serviceOffer.create({
      data,
    });

    return this.mapToEntity(record);
  }

  async findById(id: number): Promise<ServiceOffer | null> {
    const record = await this.prisma.serviceOffer.findUnique({
      where: { id },
    });

    return record ? this.mapToEntity(record) : null;
  }

  async findByCaregiver(caregiverId: number): Promise<ServiceOffer[]> {
    const records = await this.prisma.serviceOffer.findMany({
      where: { caregiverId },
    });

    return records.map((offer) => this.mapToEntity(offer));
  }

  async findByService(serviceId: number): Promise<ServiceOffer[]> {
    const records = await this.prisma.serviceOffer.findMany({
      where: { serviceId },
    });

    return records.map((offer) => this.mapToEntity(offer));
  }

  async findByCaregiverAndService(
    caregiverId: number,
    serviceId: number,
    tx?: Prisma.TransactionClient,
  ): Promise<ServiceOffer | null> {
    const client = tx ?? this.prisma;

    const record = await client.serviceOffer.findUnique({
      where: {
        caregiverId_serviceId: {
          caregiverId,
          serviceId,
        },
      },
    });

    return record ? this.mapToEntity(record) : null;
  }

  async updatePrice(id: number, price: number): Promise<ServiceOffer> {
    const record = await this.prisma.serviceOffer.update({
      where: { id },
      data: { price },
    });

    return this.mapToEntity(record);
  }

  async toggleActive(id: number, isActive: boolean): Promise<ServiceOffer> {
    const record = await this.prisma.serviceOffer.update({
      where: { id },
      data: { isActive },
    });

    return this.mapToEntity(record);
  }
}
