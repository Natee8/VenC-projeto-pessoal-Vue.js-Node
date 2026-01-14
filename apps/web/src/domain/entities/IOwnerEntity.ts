import { IAddress } from "../../../../../packages/src/domain/dtos/IAddress.dto.js";
import { UserRole } from "../../../../../packages/src/types/userType.js";
import { IPet } from "./IPetEntity.js";

export interface IOwner {
  id: string;
  userId: string;
  name: string;
  email: string;
  role: UserRole; 
  rating: number;
  totalReviews: number;
  isActive: boolean;
  address: IAddress
  searchRadiusKm?: number;
  pets: IPet
  createdAt: string;
  updatedAt: string;
}
