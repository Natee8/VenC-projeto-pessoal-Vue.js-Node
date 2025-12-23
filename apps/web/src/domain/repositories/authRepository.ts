import { AuthSession, LoginParams, ResetPasswordParams, VerifyResetCodeParams } from "../dtos/auth.dto";

export interface AuthRepository {
    login(params: LoginParams): Promise<AuthSession>;

    sendResetCode(email: string): Promise<void>;

    verifyResetCode(params: VerifyResetCodeParams): Promise<void>;

    resetPassword(params: ResetPasswordParams): Promise<void>;
};