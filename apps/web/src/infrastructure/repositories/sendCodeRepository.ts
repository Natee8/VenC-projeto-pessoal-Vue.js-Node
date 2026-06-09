import { apiInstance } from "../config/ApiConfig";

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
    email,
    code,
    newPassword,
  }: {
    token?: string;
    email?: string;
    code?: string;
    newPassword: string;
  }) {
    const payload: any = { newPassword };

    if (token) payload.token = token;
    else {
      payload.email = email;
      payload.code = code;
    }

    const { data } = await apiInstance.post("/auth/reset-password", payload);

    return data;
  },
};
