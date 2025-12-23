import { ServiceType } from "../../../../../packages/types/serviceType";
import { IAddress } from "./IAddressEntity";

export interface IServiceOffer {
    id: string,
    caregiverId: string,
    type: ServiceType,
    description: string,
    price: IPrice,
    locality: IAddress,
    isActive: boolean,
    createdAt: Date,
    updatedAt: Date
}

export interface IPrice {
    amount: number;
    currency: string;
}