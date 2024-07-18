import { axios } from "@/lib/axios";
import { Chat } from "../types";

export const getChats = (): Promise<Chat[]> => {
  return axios.get("/chat");
};
