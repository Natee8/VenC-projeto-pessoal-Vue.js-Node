import { IAddress, ServiceOfferDTO } from "../..";
import { CaregiverPetPreferenceDTO } from "./ICarregiverPetPreference.dto";
import { IUserReviewDTO } from "./IReview.dto";

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
    address: IAddress;
    services: ServiceOfferDTO[];
    preferences: CaregiverPetPreferenceDTO[];
  } | null;
};
