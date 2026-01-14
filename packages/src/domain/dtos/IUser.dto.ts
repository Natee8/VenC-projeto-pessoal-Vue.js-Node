import { UserRole } from "../../types/userType.js";
import { IAddress } from "./IAddress.dto.js";

export interface IUserDto {
  id: string | number;
  name: string;
  email: string;
  password: string;
  address: IAddress;
  role: UserRole;
  ImgUrl: string;
  isActive: boolean;
  birthDate: Date;
  createdAt: Date;
  updatedAt: Date;
}
