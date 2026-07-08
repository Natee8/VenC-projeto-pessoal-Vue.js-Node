import { User } from "src/infrastructure/stores/auth/types/user.js";
import {
  AuthSession,
  LoginParams,
  //ResetPasswordParams,
  //VerifyResetCodeParams,
} from "../dtos/auth.dto.js";
import { IResponse } from "src/types/IResponse.js";

export interface AuthRepository {
  login(params: LoginParams): Promise<IResponse<AuthSession>>;

  me(): Promise<User>;

  logout(refreshToken: string): Promise<void>;

  /* sendResetCode(email: string): Promise<void>;

    verifyResetCode(params: VerifyResetCodeParams): Promise<void>;

    resetPassword(params: ResetPasswordParams): Promise<void>;*/
}
