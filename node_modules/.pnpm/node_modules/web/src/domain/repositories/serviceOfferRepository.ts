import { CreateServiceOfferParams, UpdateServiceOfferParams } from "../dtos/serviceOffer.dto.js";
import { IServiceOffer } from "../entities/IServiceOfferEntity.js";

export interface ServiceOfferRepository {
  create(params: CreateServiceOfferParams): Promise<IServiceOffer>;

  update(
    serviceOfferId: string,
    params: UpdateServiceOfferParams
  ): Promise<IServiceOffer>;

  getById(serviceOfferId: string): Promise<IServiceOffer | null>;

  listByCaregiverId(caregiverId: string): Promise<IServiceOffer[]>;

  activate(serviceOfferId: string): Promise<void>;

  deactivate(serviceOfferId: string): Promise<void>;
}
