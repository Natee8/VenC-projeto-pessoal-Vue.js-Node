import { UserRole } from "@packages";
export interface LoginRequestDTO {
  email: string;
  password: string;
}

export interface LoginResponseDTO {
  token: string;
  userId: string;
  role: UserRole;
  name: string;
}

export interface IRefreshResponse {
  accessToken: string;
  refreshToken: string;
}

export interface IResponseRegister {
  userId: number;
  profileId: number;
  warnings: string[];
}
