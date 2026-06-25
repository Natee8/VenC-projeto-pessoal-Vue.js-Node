import axios from "axios";
import { useAuthStore } from "../stores/auth/authStore";

const api = axios.create({
  baseURL: "http://localhost:3000",
});

api.interceptors.request.use((config) => {
  const authStore = useAuthStore();

  if (authStore.accessToken) {
    config.headers.Authorization = `Bearer ${authStore.accessToken}`;
  }

  return config;
});

export default api;
