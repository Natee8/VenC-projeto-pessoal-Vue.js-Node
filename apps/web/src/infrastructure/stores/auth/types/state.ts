import { ProfileDTO } from "@packages";
import { User } from "./user";

export interface AuthState {
  accessToken: string | null;
  user: User | null;
  refreshToken: string | null;
  profile: ProfileDTO | null;
  isAuthenticated: boolean;
}
