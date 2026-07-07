import { apiInstance } from "../config/ApiConfig.js";

export const verificationCodeRepository = {
  async sendResetPasswordCode(email: string) {
    const { data } = await apiInstance.post("/verification/send-code", {
      email,
    });

    return data;
  },

  async verifyResetPasswordCode(email: string, code: string) {
    const { data } = await apiInstance.post("/verification/verify-code", {
      email,
      code,
    });

    return data;
  },

  async resetPassword({
    token,
    newPassword,
  }: {
    token: string;
    newPassword: string;
  }) {
    const payload = { token, newPassword };
    const { data } = await apiInstance.post("/auth/reset-password", payload);
    return data;
  },
};
