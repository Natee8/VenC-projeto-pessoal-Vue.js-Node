import { defineStore } from "pinia";
import { jwtDecode } from "jwt-decode";
import { authRepository } from "src/infrastructure/repositories/authRepository";
import { AuthState } from "./types/state";

export type Role = "OWNER" | "CAREGIVER";

type JwtPayload = {
  sub: number;
  role: Role;
  exp: number;
};

export const useAuthStore = defineStore("auth", {
  state: (): AuthState => ({
    accessToken: null,
    refreshToken: null,
    user: null,
    isAuthenticated: false,
  }),

  getters: {
    isOwner: (state) => state.user?.role === "OWNER",
    isCaregiver: (state) => state.user?.role === "CAREGIVER",
  },

  actions: {
    setToken(accessToken: string, refreshToken: string) {
      this.accessToken = accessToken;
      this.refreshToken = refreshToken;

      localStorage.setItem("accessToken", accessToken);
      localStorage.setItem("refreshToken", refreshToken);
    },

    async fetchMe() {
      console.log("🚀 fetchMe chamado");

      if (!this.accessToken) {
        console.log("❌ SEM TOKEN");
        return;
      }

      try {
        const user = await authRepository.me();

        console.log("👤 USER DO /me:", user);

        this.user = user;
        this.isAuthenticated = true;
      } catch (e) {
        console.log("❌ ERRO NO /me:", e);
        this.logout();
      }
    },

    async loadFromStorage() {
      const accessToken = localStorage.getItem("accessToken");
      const refreshToken = localStorage.getItem("refreshToken");

      if (!accessToken) return;

      this.accessToken = accessToken;
      this.refreshToken = refreshToken;

      this.decodeToken();
      await this.fetchMe();
    },

    decodeToken() {
      if (!this.accessToken) return;

      try {
        const decoded = jwtDecode<JwtPayload>(this.accessToken);

        const isExpired = decoded.exp * 1000 < Date.now();

        if (isExpired) {
          this.logout();
        }
      } catch {
        this.logout();
      }
    },

    setAuth(data: {
      accessToken: string;
      refreshToken: string;
      user: { id: number; role: Role };
    }) {
      this.accessToken = data.accessToken;
      this.refreshToken = data.refreshToken;
      this.user = data.user;
      this.isAuthenticated = true;

      localStorage.setItem("accessToken", data.accessToken);
      localStorage.setItem("refreshToken", data.refreshToken);
    },

    async logout() {
      try {
        if (this.refreshToken) {
          await authRepository.logout(this.refreshToken);
        }
      } catch (e) {
        console.error("Erro ao deslogar:", e);
      }

      this.accessToken = null;
      this.refreshToken = null;
      this.user = null;
      this.isAuthenticated = false;

      localStorage.removeItem("accessToken");
      localStorage.removeItem("refreshToken");
    },
  },
});
