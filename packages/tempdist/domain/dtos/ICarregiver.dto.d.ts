import { IAddress } from "./IAddress.dto";
export interface CaregiverDTO {
    id: number;
    userId: number;
    offersHosting: boolean;
    address: IAddress;
    serviceRadiusKm: number;
    isVerified: boolean;
    isPublic: boolean;
}
