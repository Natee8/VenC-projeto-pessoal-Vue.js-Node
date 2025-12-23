import { ServiceType } from "../../../../../packages/types/serviceType";
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
