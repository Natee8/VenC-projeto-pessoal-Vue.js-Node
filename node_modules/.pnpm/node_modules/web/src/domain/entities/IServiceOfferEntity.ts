import { IAddress } from "../../../../../packages/src/domain/dtos/IAddress.dto.js";
import { ServiceTypes } from "../../../../../packages/src/types/serviceType.js";

export interface IServiceOffer {
    id: string,
    caregiverId: string,
    type: ServiceTypes,
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
