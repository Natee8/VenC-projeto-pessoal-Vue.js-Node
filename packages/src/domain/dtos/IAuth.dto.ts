import { UserId } from "../../valuesObjects/userId.js";
import { UserAuth } from "../entities/userAuthEntity.js";

export interface IRefreshToken {
  token: string;
  userId: UserId;
  createdAt: Date;
  expiresAt: Date;
}

export interface RefreshToken {
  token: string;
  userId: UserId;
  createdAt: Date;
  expiresAt: Date;
  revokedAt?: Date;

  getUser(): UserAuth;
  isExpired(): boolean;
}

export interface IUserAuthDto {
  id: string | number;
  email: string;
  cpf: string;
  isActive: boolean;
  birthDate: Date;
  createdAt: Date;
  updatedAt: Date;
}

//payload para apis, usar em forms etc
export interface RegisterPayload {
  name: string;
  email: string;
  birthDate: string;
  cpf: string;
  password: string;

  address: {
    street: string;
    number: string;
    neighborhood: string;
    city: string;
    state: string;
    zipCode: string;
  };

  serviceRadiusKm: number;
  isPublicProfile: boolean;
  offersHosting: boolean;
  type: "owner" | "caregiver";
  profileImage?: File | null;
}
