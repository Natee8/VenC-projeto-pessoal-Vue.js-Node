import { IAddress } from "../../../../../packages/src/domain/dtos/IAddress.dto.js";
import { ServiceTypes } from "../../../../../packages/src/types/serviceType.js";
import { ServiceTypeLabelTypeof } from "../../infrastructure/utils/ServiceTypesLabels.js";
import { IPrice } from "../entities/IServiceOfferEntity.js";

export type CreateServiceOfferParams = {
  caregiverId: string;
  type: ServiceTypes;
  description: string;
  price: IPrice
  locality: IAddress
};

export type UpdateServiceOfferParams = {
  description?: string;
  price?:IPrice
  locality?: IAddress
};

export interface IServiceCardConfigDto {
  type: ServiceTypeLabelTypeof;
  title: string;
  description: string;
  icon: string;
  ctaLabel: string;
}
