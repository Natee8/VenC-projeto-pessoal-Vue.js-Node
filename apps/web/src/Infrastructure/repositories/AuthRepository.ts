// infra/repositories/authRepository.ts

import { AuthRepository } from "../../domain/repositories/authRepository";
import { apiInstance } from "../config/ApiConfig";

export const authRepository: AuthRepository = {
  async login({ email, password }) {
    const { data } = await apiInstance.post("/login", {
      email,
      password,
    });

    return data;
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
