import { UserRole } from "../../../../../packages/types/userType";

//falsa entidade serve só para o formato que a tela consome 

export interface IUser {
  id: string;
  name: string;
  email: string;
  password: string;
  role: UserRole;
  rating: number;
  isActive: boolean;
  createdAt: string;
  updatedAt: string;
}
