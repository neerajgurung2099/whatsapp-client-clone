import { config } from "@/config";
import { useNotificationStore } from "@/stores/notification";
import { storage } from "@/utils/storage";
import { default as Axios, InternalAxiosRequestConfig } from "axios";
export const axios = Axios.create({
  baseURL: config.apiUrl,
});

axios.interceptors.request.use((config: InternalAxiosRequestConfig) => {
  const token = storage.getToken();
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  config.headers.Accept = "application/json";
  return config;
});

axios.interceptors.response.use(
  (response) => {
    return response.data;
  },

  (error) => {
    const message = error.response.data.errors.message || error.message;
    useNotificationStore
      .getState()
      .addNotification({ title: "Error", type: "error", message: message });
    return Promise.reject(error);
  }
);
