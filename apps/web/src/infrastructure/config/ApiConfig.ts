import axios from "axios";

export const apiInstance = axios.create({
  baseURL: import.meta.env.VITE_API_URL,
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
