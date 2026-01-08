import { UserRole } from "../../types/userType";
import { IAddress } from "./IAddress.dto";

export interface IUserDto {
  id: string | number;
  name: string;
  email: string;
  password: string;
  address?: IAddress;
  role: UserRole;
  ImgUrl: string;
  isActive: boolean;
  birthDate?: Date;
  createdAt: Date;
  updatedAt: Date;
}