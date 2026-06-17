import { IAddress } from "./IAddress.dto";

export interface CaregiverDTO {
  id: number;
  userId: number;
  offersHosting: boolean;
  address: IAddress;
  serviceRadiusKm: number;
  averageRating: number;
  reviewsCount: number;
  isVerified: boolean;
  isPublic: boolean;
}

export type CaregiverPublicDTO = {
  id: number;
  name: string;
  avatarUrl: string | null;
  rating: number;
  reviewsCount: number;
  city: string;
  state: string;
  startingPrice: number | null;
  services: {
    id: number;
    name: string;
    price: number;
  }[];
};
