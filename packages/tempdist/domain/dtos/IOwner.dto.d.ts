import { Address } from "../../valuesObjects/address";
export interface OwnerProfileDTO {
    userId: number;
    address: Address;
    phone: string | null;
    searchRadiusKm?: number;
    createdAt: string;
    updatedAt: string;
}
