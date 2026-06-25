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
    user: null,
    isAuthenticated: false,
  }),

  getters: {
    isOwner: (state) => state.user?.role === "OWNER",
    isCaregiver: (state) => state.user?.role === "CAREGIVER",
  },

  actions: {
    setToken(token: string) {
      console.log("🔥 setToken:", token);

      this.accessToken = token;
      localStorage.setItem("accessToken", token);
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
      const token = localStorage.getItem("accessToken");

      if (!token) return;

      this.accessToken = token;

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

    logout() {
      this.accessToken = null;
      this.user = null;
      this.isAuthenticated = false;

      localStorage.removeItem("accessToken");
    },
  },
});
