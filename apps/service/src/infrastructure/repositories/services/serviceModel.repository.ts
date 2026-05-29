import { CreateServiceModelDTO, ServiceModelDTO } from "@packages";
import {
  PrismaClient,
  Service as PrismaService,
} from "../../../generated/prisma/index.js";

export class ServiceRepository {
  constructor(private prisma: PrismaClient) {}

  private toDTO(service: PrismaService): ServiceModelDTO {
    return {
      id: service.id,
      name: service.name,
      description: service.description,
    };
  }

  async create(data: CreateServiceModelDTO): Promise<ServiceModelDTO> {
    const record = await this.prisma.service.create({
      data,
    });

    return this.toDTO(record);
  }

  async findAll(): Promise<ServiceModelDTO[]> {
    const records = await this.prisma.service.findMany({
      orderBy: { name: "asc" },
    });

    return records.map((service) => this.toDTO(service));
  }

  async findById(id: number): Promise<ServiceModelDTO | null> {
    const record = await this.prisma.service.findUnique({
      where: { id },
    });

    return record ? this.toDTO(record) : null;
  }

  async findByName(name: string): Promise<ServiceModelDTO | null> {
    const record = await this.prisma.service.findUnique({
      where: { name },
    });

    return record ? this.toDTO(record) : null;
  }
}
