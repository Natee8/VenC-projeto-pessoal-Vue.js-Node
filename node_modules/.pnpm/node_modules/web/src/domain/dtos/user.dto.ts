import { UserRole } from '../../../../../packages/types/userType'

export type CreateUserParams = {
  name: string;
  email: string;
  password: string;
  role: UserRole;
};

export type UpdateUserParams = {
  name?: string;
  email?: string;
};
