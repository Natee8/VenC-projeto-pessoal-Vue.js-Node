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

  private mapToDTO(
    offer: ServiceOffer,
    service?: { id: number; name: string; description: string },
  ): ServiceOfferDTO {
    return {
      id: Number(offer.id),
      caregiverId: Number(offer.caregiverId),
      serviceId: offer.getServiceId(),
      description: offer.getDescription(),
      price: offer.getPrice().getAmount(),
      isActive: offer.isEnabled(),
      service,
    };
  }

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

    const price = Money.create(input.price);

    const created = await this.serviceOfferRepo.create({
      caregiverId: input.caregiverId,
      serviceId: input.serviceId,
      price: price.getAmount(),
      description: input.description?.trim(),
    });

    return right(this.mapToDTO(created, service));
  }

  async changePrice(
    id: number,
    newPrice: number,
  ): Promise<Either<Error, ServiceOfferDTO>> {
    if (!newPrice || newPrice <= 0) {
      return left(new Error("Preço inválido"));
    }

    const offer = await this.serviceOfferRepo.findById(id);

    if (!offer) {
      return left(new Error("Oferta não encontrada"));
    }

    offer.changePrice(Money.create(newPrice));

    const updated = await this.serviceOfferRepo.updatePrice(
      id,
      offer.getPrice().getAmount(),
    );

    return right(this.mapToDTO(updated));
  }

  async toggleActive(id: number): Promise<Either<Error, ServiceOfferDTO>> {
    const offer = await this.serviceOfferRepo.findById(id);

    if (!offer) {
      return left(new Error("Oferta não encontrada"));
    }

    if (offer.isEnabled()) {
      offer.deactivate();
    } else {
      offer.activate();
    }

    const updated = await this.serviceOfferRepo.toggleActive(
      id,
      offer.isEnabled(),
    );

    return right(this.mapToDTO(updated));
  }

  async getByCaregiver(
    caregiverId: number,
  ): Promise<Either<Error, ServiceOfferDTO[]>> {
    if (!caregiverId || caregiverId <= 0) {
      return left(new Error("Caregiver inválido"));
    }

    const offers = await this.serviceOfferRepo.findByCaregiver(caregiverId);

    const services = await this.serviceRepo.findManyByIds(
      offers.map((offer) => offer.getServiceId()),
    );
    const serviceById = new Map(services.map((service) => [service.id, service]));

    return right(
      offers.map((offer) =>
        this.mapToDTO(offer, serviceById.get(offer.getServiceId())),
      ),
    );
  }
}
