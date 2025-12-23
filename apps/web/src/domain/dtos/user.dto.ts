import { UserRole } from '../../../../../packages/types/userType'

export interface UserDTO {
  id: string;
  name: string;
  email: string;
  role: UserRole;
  rating: number;
  isActive: boolean;
  createdAt: string;
  updatedAt: string;
}
