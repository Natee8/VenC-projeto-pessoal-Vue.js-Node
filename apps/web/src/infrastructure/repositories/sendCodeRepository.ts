import { apiInstance } from "../config/ApiConfig";

export const verificationCodeRepository = {
  async sendResetPasswordCode(email: string) {
    const { data } = await apiInstance.post("/auth/send-reset-password-code", {
      email,
    });

    return data;
  },

  async verifyResetPasswordCode(email: string, code: string) {
    const { data } = await apiInstance.post(
      "/auth/verify-reset-password-code",
      {
        email,
        code,
      },
    );

    return data;
  },

  async resetPassword({
    email,
    code,
    newPassword,
  }: {
    email: string;
    code: string;
    newPassword: string;
  }) {
    const { data } = await apiInstance.post("/auth/reset-password", {
      email,
      code,
      newPassword,
    });

    return data;
  },
};
