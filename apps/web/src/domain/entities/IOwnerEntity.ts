import { UserRole } from "../../../../../packages/types/userType";
import { IAddress } from "./IAddressEntity";
import { IPet } from "./IPetEntity";

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
