import { IAddress } from "../../index.js";

export interface OwnerProfileDTO {
  userId: number;
  address: IAddress;
  phone: string | null;
  searchRadiusKm?: number;
  createdAt: string;
  updatedAt: string;
}
