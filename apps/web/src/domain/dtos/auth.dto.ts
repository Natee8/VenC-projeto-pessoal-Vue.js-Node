import { UserRole } from "../../../../../packages/types/userType";

export type LoginParams = {
  email: string;
  password: string;
};

export type AuthAccount = {
  id: number;
  email?: string;
  role: UserRole;
};

export type AuthSession = {
  accessToken: string;
  refreshToken: string;
  expiresAt: Date;
};

export type VerifyResetCodeParams = {
  email: string;
  code: string;
};

export type ResetPasswordParams = {
  email: string;
  code: string;
  newPassword: string;
};