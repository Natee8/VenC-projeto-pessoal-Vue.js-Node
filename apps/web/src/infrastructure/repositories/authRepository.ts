import { ApiResponse } from "@packages";
import { AuthRepository } from "../../domain/repositories/authRepository";
import { AuthSession } from "../../domain/dtos/auth.dto";
import { User } from "../stores/auth/types/user";
import { apiInstance } from "../config/ApiConfig";

export const authRepository: AuthRepository = {
  async login({ email, password }) {
    const { data: body } = await apiInstance.post<ApiResponse<AuthSession>>(
      "/auth/login",
      { email, password },
    );

    return body.data;
  },

  async me() {
    const { data: body } = await apiInstance.get<ApiResponse<User>>("/auth/me");

    return body.data;
  },

  async logout(refreshToken: string) {
    await apiInstance.post("/auth/logout", { refreshToken });
  },
};
