import { CreateServiceModelDTO, ServiceModelDTO } from "@packages";

import {
  Either,
  left,
  right,
} from "apps/service/src/core/interface/IEighter.js";
import { ServiceRepository } from "apps/service/src/infrastructure/repositories/services/serviceModel.repository.js";

export class ServiceModelUseCase {
  constructor(private serviceRepo: ServiceRepository) {}

  async create(
    input: CreateServiceModelDTO,
  ): Promise<Either<Error, ServiceModelDTO>> {
    if (!input.name || input.name.trim().length < 3) {
      return left(new Error("Nome do serviço inválido"));
    }

    if (!input.description || input.description.trim().length < 5) {
      return left(new Error("Descrição do serviço inválida"));
    }

    const normalizedName = input.name.trim().toLowerCase();
    const normalizedDescription = input.description.trim();

    const existing = await this.serviceRepo.findByName(normalizedName);

    if (existing) {
      return left(new Error("Serviço já existe"));
    }

    const created = await this.serviceRepo.create({
      name: normalizedName,
      description: normalizedDescription,
    });

    return right(created);
  }

  async getAll(): Promise<Either<Error, ServiceModelDTO[]>> {
    const services = await this.serviceRepo.findAll();

    return right(services);
  }

  async getById(id: number): Promise<Either<Error, ServiceModelDTO>> {
    if (!id || id <= 0) {
      return left(new Error("ID inválido"));
    }

    const service = await this.serviceRepo.findById(id);

    if (!service) {
      return left(new Error("Serviço não encontrado"));
    }

    return right(service);
  }

  async getByName(name: string): Promise<Either<Error, ServiceModelDTO>> {
    if (!name || name.trim().length < 3) {
      return left(new Error("Nome inválido"));
    }

    const normalizedName = name.trim().toLowerCase();

    const service = await this.serviceRepo.findByName(normalizedName);

    if (!service) {
      return left(new Error("Serviço não encontrado"));
    }

    return right(service);
  }
}
