import { UserRole } from "../../../../../packages/types/userType";
import { IAddress } from "./IAddressEntity";

export interface ICaregiver {
  id: string;
  userId: string;
  name: string;
  email: string;
  role: UserRole; 
  rating: number;
  isActive: boolean;
  isVerified: boolean;
  address: IAddress
  serviceRadiusKm: number;
  services: {
    walk: boolean;
    feeding: boolean;
    hosting: boolean;
    medication: boolean;
  };

  pricing?: {
    walkPrice?: number;
    feedingPrice?: number;
    hostingPrice?: number;
  };

  createdAt: string;
  updatedAt: string;
}
