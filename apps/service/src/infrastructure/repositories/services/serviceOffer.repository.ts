import { ServiceOfferDTO } from "@packages";

import {
  PrismaClient,
  ServiceOffer as PrismaServiceOffer,
} from "../../../generated/prisma/index.js";

export class ServiceOfferRepository {
  constructor(private prisma: PrismaClient) {}

  private toDTO(offer: PrismaServiceOffer): ServiceOfferDTO {
    return {
      id: offer.id,
      caregiverId: offer.caregiverId,
      serviceId: offer.serviceId,
      description: offer.description,
      price: offer.price,
      isActive: offer.isActive,
    };
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

  async create(data: {
    caregiverId: number;
    serviceId: number;
    description?: string;
    price: number;
  }): Promise<ServiceOfferDTO> {
    const record = await this.prisma.serviceOffer.create({
      data,
    });

    return this.toDTO(record);
  }

  async findById(id: number): Promise<ServiceOfferDTO | null> {
    const record = await this.prisma.serviceOffer.findUnique({
      where: { id },
    });

    return record ? this.toDTO(record) : null;
  }

  async findByCaregiver(caregiverId: number): Promise<ServiceOfferDTO[]> {
    const records = await this.prisma.serviceOffer.findMany({
      where: { caregiverId },
    });

    return records.map((offer) => this.toDTO(offer));
  }

  async findByService(serviceId: number): Promise<ServiceOfferDTO[]> {
    const records = await this.prisma.serviceOffer.findMany({
      where: { serviceId },
    });

    return records.map((offer) => this.toDTO(offer));
  }

  async findByCaregiverAndService(
    caregiverId: number,
    serviceId: number,
  ): Promise<ServiceOfferDTO | null> {
    const record = await this.prisma.serviceOffer.findUnique({
      where: {
        caregiverId_serviceId: {
          caregiverId,
          serviceId,
        },
      },
    });

    return record ? this.toDTO(record) : null;
  }

  async updatePrice(id: number, price: number): Promise<ServiceOfferDTO> {
    const record = await this.prisma.serviceOffer.update({
      where: { id },
      data: { price },
    });

    return this.toDTO(record);
  }

  async toggleActive(id: number, isActive: boolean): Promise<ServiceOfferDTO> {
    const record = await this.prisma.serviceOffer.update({
      where: { id },
      data: { isActive },
    });

    return this.toDTO(record);
  }
}
