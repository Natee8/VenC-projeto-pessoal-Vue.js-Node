import { IAddress } from "@packages";
import { UserRole } from "@packages";
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
  address: IAddress;
  searchRadiusKm?: number;
  pets: IPet;
  createdAt: string;
  updatedAt: string;
}
