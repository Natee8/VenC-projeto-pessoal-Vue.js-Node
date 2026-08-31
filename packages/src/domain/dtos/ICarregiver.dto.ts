import { IAddress } from "./IAddress.dto.js";

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
  // Opcionais: o cuidador pode não ter Address, e o repository monta esses
  // campos com `r.address?.city` / `r.address?.state`.
  city?: string;
  state?: string;
  startingPrice: number | null;
  services: {
    id: number;
    name: string;
    price: number;
  }[];
};
