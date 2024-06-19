import { config } from "@/config";
import { useNotificationStore } from "@/stores/notification";
import { default as Axios } from "axios";
export const axios = Axios.create({
  baseURL: config.apiUrl,
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
