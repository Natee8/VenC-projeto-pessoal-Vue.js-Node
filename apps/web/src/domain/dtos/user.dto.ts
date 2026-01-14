import { UserRole } from "../../../../../packages/src/types/userType.js";

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
