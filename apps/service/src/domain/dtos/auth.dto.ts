import { UserRole } from "../../../../../packages/types/userType";

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