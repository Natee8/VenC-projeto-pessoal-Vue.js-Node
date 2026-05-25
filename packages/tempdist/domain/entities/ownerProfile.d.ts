import { Phone } from "../../valuesObjects/phone.js";
import { Address } from "../../valuesObjects/address.js";
import { UserId } from "../../valuesObjects/userId.js";
export declare class OwnerProfile {
    readonly userId: UserId;
    private address;
    private phone;
    private createdAt;
    private updatedAt;
    private searchRadiusKm?;
    constructor(userId: UserId, address: Address, phone: Phone | null, createdAt: Date, updatedAt: Date, searchRadiusKm?: number | undefined);
    getAddress(): Address;
    getUserId(): UserId;
    getPhone(): Phone | null;
    getUpdatedAt(): Date;
    getSearchRadius(): number | undefined;
    getCreatedAt(): Date;
    updateAddress(address: Address): void;
    updatePhone(phone: Phone): void;
    updateSearchRadius(radius: number): void;
}
