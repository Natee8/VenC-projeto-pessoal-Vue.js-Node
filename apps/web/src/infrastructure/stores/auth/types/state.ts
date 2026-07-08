import { User } from "./user";

export interface AuthState {
  accessToken: string | null;
  user: User | null;
  refreshToken: string | null;
  isAuthenticated: boolean;
}
