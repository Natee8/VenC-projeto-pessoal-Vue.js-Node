import { User } from "./user";

export interface AuthState {
  accessToken: string | null;
  user: User | null;
  isAuthenticated: boolean;
}
