import { ServiceTypes } from "../../types/serviceType.js";
import { Address } from "../../valuesObjects/address.js";
import { Money } from "../../valuesObjects/money.js";
export declare class ServiceOffer {
    readonly id: string;
    readonly caregiverId: string;
    private type;
    private description;
    private price;
    private locality;
    private isActive;
    readonly createdAt: Date;
    private updatedAt;
    constructor(id: string, caregiverId: string, type: ServiceTypes, description: string, price: Money, locality: Address, isActive: boolean, createdAt: Date, updatedAt: Date);
    activate(): void;
    deactivate(): void;
    changePrice(newPrice: Money): void;
    getPrice(): Money;
    isEnabled(): boolean;
}
