import { IAddress, ServiceOfferDTO } from "../..";
import { CaregiverPetPreferenceDTO } from "./ICarregiverPetPreference.dto";

export type ProfileDTO = {
  user: {
    id: number;
    name: string;
    email: string;
    profilePhotoUrl: string | null;
  };

  ownerProfile: {
    userId: number;
    address: IAddress;
    phone: string | null;
    searchRadiusKm?: number;
  } | null;

  caregiverProfile: {
    id: number;
    userId: number;
    offersHosting: boolean;
    serviceRadiusKm: number;
    isVerified: boolean;
    isPublicProfile: boolean;
    averageRating: number;
    reviewsCount: number;
    address: IAddress;
  } | null;

  services: ServiceOfferDTO[];
  preferences: CaregiverPetPreferenceDTO[];
  reviews: any[];
};
