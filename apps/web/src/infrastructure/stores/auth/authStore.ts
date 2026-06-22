import { defineStore } from "pinia";
import { jwtDecode } from "jwt-decode";

export type Role = "OWNER" | "CAREGIVER";

type JwtPayload = {
  sub: number;
  role: Role;
  exp: number;
};

interface AuthState {
  accessToken: string | null;
  userRole: Role | null;
  isAuthenticated: boolean;
}

export const useAuthStore = defineStore("auth", {
  state: (): AuthState => ({
    accessToken: null,
    userRole: null,
    isAuthenticated: false,
  }),

  getters: {
    isOwner: (state) => state.userRole === "OWNER",
    isCaregiver: (state) => state.userRole === "CAREGIVER",
  },

  actions: {
    setToken(token: string) {
      console.log("🔥 setToken FOI CHAMADO", token);

      this.accessToken = token;
      localStorage.setItem("accessToken", token);

      this.decodeToken();
    },

    loadFromStorage() {
      const token = localStorage.getItem("accessToken");

      if (!token) return;

      this.accessToken = token;
      this.decodeToken();
    },

    decodeToken() {
      if (!this.accessToken) return;

      try {
        const decoded = jwtDecode<JwtPayload>(this.accessToken);

        console.log("TOKEN DECODADO:", decoded);
        console.log("ROLE:", decoded.role);

        const isExpired = decoded.exp * 1000 < Date.now();

        if (isExpired) {
          this.logout();
          return;
        }

        this.userRole = decoded.role;
        this.isAuthenticated = true;
      } catch (error) {
        console.error("Erro ao decodificar token:", error);
        this.logout();
      }
    },

    logout() {
      this.accessToken = null;
      this.userRole = null;
      this.isAuthenticated = false;

      localStorage.removeItem("accessToken");
    },
  },
});
