import { ApiResponse } from "@packages";
import { apiInstance } from "../config/ApiConfig.js";

export type VerifyResetCodeResult = {
  email: string;
  resetToken: string;
};

export const verificationCodeRepository = {
  async sendResetPasswordCode(email: string): Promise<void> {
    await apiInstance.post("/verification/send-code", { email });
  },

  async verifyResetPasswordCode(
    email: string,
    code: string,
  ): Promise<VerifyResetCodeResult> {
    const { data: body } = await apiInstance.post<
      ApiResponse<VerifyResetCodeResult>
    >("/verification/verify-code", { email, code });

    return body.data;
  },

  async resetPassword({
    token,
    newPassword,
  }: {
    token: string;
    newPassword: string;
  }): Promise<void> {
    await apiInstance.post("/auth/reset-password", { token, newPassword });
  },
};
