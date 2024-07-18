import { getChats } from "../api/getChats";

export const chatLoader = async () => {
  try {
    const chatList = await getChats();
    return chatList;
  } catch (e) {
    return null;
  }
};
