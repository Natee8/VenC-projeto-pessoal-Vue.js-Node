import { ServiceType } from "../../../../../packages/types/serviceType";
import { ServiceTypeLabelTypeof } from "../../infrastructure/utils/ServiceTypesLabels";
import { IAddress } from "../entities/IAddressEntity";
import { IPrice } from "../entities/IServiceOfferEntity";

export type CreateServiceOfferParams = {
  caregiverId: string;
  type: ServiceType;
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