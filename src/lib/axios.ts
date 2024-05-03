import { config } from "@/config";
import { default as Axios } from "axios";
export const axios = Axios.create({
  baseURL: config.apiUrl,
});
