import { AuthUser } from "@/features/auth";
import { Chat } from "@/features/chat";

export type AppLoaderData = {
  user: AuthUser;
  chatList: Chat[];
};
