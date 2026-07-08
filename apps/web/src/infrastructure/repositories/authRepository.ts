// infra/repositories/authRepository.ts

import { AuthRepository } from "../../domain/repositories/authRepository";
import { apiInstance } from "../config/ApiConfig";
import api from "../config/axios";

export const authRepository: AuthRepository = {
  async login({ email, password }) {
    const { data } = await apiInstance.post("/auth/login", {
      email,
      password,
    });

    return data;
  },
  async me() {
    const response = await api.get("/auth/me");
    return response.data.data;
  },

  async logout(refreshToken: string) {
    await api.post("/auth/logout", {
      refreshToken,
    });
  },
  
  /* async refreshToken(refreshToken) {
    const { data } = await apiInstance.post("/refresh", {
      refreshToken,
    });

    return data;
  },

  async logout(refreshToken) {
    await apiInstance.post("/logout", {
      refreshToken,
    });
  },*/
};
