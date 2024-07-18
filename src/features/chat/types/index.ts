import { AuthUser } from "@/features/auth";
import { Message } from "@/features/message";

export type Chat = {
  _id: string;
  participants: AuthUser[];
  messages: Message[];
};
