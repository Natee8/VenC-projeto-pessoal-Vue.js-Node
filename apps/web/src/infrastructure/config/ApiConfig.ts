import axios from "axios";

/**
 * Instância única de HTTP do app. Todo repository passa por aqui.
 *
 * O fallback existe porque `VITE_API_URL` não está versionado — sem ele o
 * `baseURL` fica `undefined` e as requisições vão parar no próprio dev server
 * do Vite (5173) em vez da API (3000).
 */
export const apiInstance = axios.create({
  baseURL: import.meta.env.VITE_API_URL ?? "http://localhost:3000",
});

apiInstance.interceptors.request.use((config) => {
  if (!config.headers.Authorization) {
    const token = localStorage.getItem("accessToken");

    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
  }

  return config;
});
