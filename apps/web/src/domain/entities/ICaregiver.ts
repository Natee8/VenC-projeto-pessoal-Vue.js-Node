import { IAddress } from "../../../../../packages/src/domain/dtos/IAddress.dto.js";
import { UserRole } from "../../../../../packages/src/types/userType.js";

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
