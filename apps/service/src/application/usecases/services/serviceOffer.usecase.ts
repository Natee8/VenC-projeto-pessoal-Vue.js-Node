import {
  Either,
  left,
  right,
} from "apps/service/src/core/interface/IEighter.js";

import { ServiceOfferRepository } from "apps/service/src/infrastructure/repositories/services/serviceOffer.repository.js";
import { ServiceRepository } from "apps/service/src/infrastructure/repositories/services/serviceModel.repository.js";
import { Money, ServiceOffer, ServiceOfferDTO } from "@packages";

export class ServiceOfferUseCase {
  constructor(
    private serviceRepo: ServiceRepository,
    private serviceOfferRepo: ServiceOfferRepository,
  ) {}

  async create(input: {
    caregiverId: number;
    serviceId: number;
    price: number;
    description?: string;
  }): Promise<Either<Error, ServiceOfferDTO>> {
    if (!input.caregiverId || input.caregiverId <= 0) {
      return left(new Error("Caregiver inválido"));
    }

    const service = await this.serviceRepo.findById(input.serviceId);

    if (!service) {
      return left(new Error("Serviço não existe"));
    }

    if (!input.price || input.price <= 0) {
      return left(new Error("Preço inválido"));
    }

    const existing = await this.serviceOfferRepo.findByCaregiverAndService(
      input.caregiverId,
      input.serviceId,
    );

    if (existing) {
      return left(new Error("Você já oferece esse serviço"));
    }

    const offer = new ServiceOffer(
      "0",
      String(input.caregiverId),
      input.serviceId,
      input.description?.trim() ?? null,
      Money.create(input.price),
      true,
      new Date(),
      new Date(),
    );

    const created = await this.serviceOfferRepo.create({
      caregiverId: input.caregiverId,
      serviceId: input.serviceId,
      price: offer.getPrice().getValue(),
      description: offer.getDescription() ?? undefined,
    });

    return right(created);
  }

  async changePrice(
    id: number,
    newPrice: number,
  ): Promise<Either<Error, ServiceOfferDTO>> {
    if (!newPrice || newPrice <= 0) {
      return left(new Error("Preço inválido"));
    }

    const dto = await this.serviceOfferRepo.findById(id);

    if (!dto) {
      return left(new Error("Oferta não encontrada"));
    }

    const offer = new ServiceOffer(
      String(dto.id),
      String(dto.caregiverId),
      dto.serviceId,
      dto.description ?? null,
      Money.create(dto.price),
      dto.isActive,
      new Date(),
      new Date(),
    );

    offer.changePrice(Money.create(newPrice));

    const updated = await this.serviceOfferRepo.updatePrice(
      id,
      offer.getPrice().getValue(),
    );

    return right(updated);
  }

  async toggleActive(id: number): Promise<Either<Error, ServiceOfferDTO>> {
    const dto = await this.serviceOfferRepo.findById(id);

    if (!dto) {
      return left(new Error("Oferta não encontrada"));
    }

    const offer = new ServiceOffer(
      String(dto.id),
      String(dto.caregiverId),
      dto.serviceId,
      dto.description ?? null,
      Money.create(dto.price),
      dto.isActive,
      new Date(),
      new Date(),
    );

    if (offer.isEnabled()) {
      offer.deactivate();
    } else {
      offer.activate();
    }

    const updated = await this.serviceOfferRepo.toggleActive(
      id,
      offer.isEnabled(),
    );

    return right(updated);
  }

  async getByCaregiver(
    caregiverId: number,
  ): Promise<Either<Error, ServiceOfferDTO[]>> {
    if (!caregiverId || caregiverId <= 0) {
      return left(new Error("Caregiver inválido"));
    }

    const offers = await this.serviceOfferRepo.findByCaregiver(caregiverId);

    return right(offers);
  }
}
