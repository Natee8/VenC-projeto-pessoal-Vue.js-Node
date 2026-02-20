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
