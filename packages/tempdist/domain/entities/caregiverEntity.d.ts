import { Address } from "../../valuesObjects/address.js";
import { UserId } from "../../valuesObjects/userId.js";
export declare class Caregiver {
    readonly id: number;
    readonly userId: UserId;
    private offersHosting;
    private address;
    private serviceRadiusKm;
    private isVerified;
    private isPublicProfile;
    readonly createdAt: Date;
    private updatedAt;
    constructor(id: number, userId: UserId, offersHosting: boolean, address: Address, serviceRadiusKm: number, isVerified: boolean, isPublicProfile: boolean, createdAt: Date, updatedAt: Date);
    canHostPets(): boolean;
    getServiceRadius(): number;
    verify(): void;
    makePublic(): void;
    makePrivate(): void;
    isPublic(): boolean;
    getUserId(): UserId;
    hasVerification(): boolean;
    getAddress(): Address;
    getUpdatedAt(): Date;
    private touch;
}
