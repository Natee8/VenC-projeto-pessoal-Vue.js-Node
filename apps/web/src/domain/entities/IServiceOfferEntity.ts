import { IAddress } from "@packages";
import { ServiceTypes } from "@packages";

export interface IServiceOffer {
  id: string;
  caregiverId: string;
  type: ServiceTypes;
  description: string;
  price: IPrice;
  locality: IAddress;
  isActive: boolean;
  createdAt: Date;
  updatedAt: Date;
}

export interface IPrice {
  amount: number;
  currency: string;
}
