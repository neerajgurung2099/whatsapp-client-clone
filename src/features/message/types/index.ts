import { AuthUser } from "@/features/auth";

export type Message = {
  _id: string;
  sender: AuthUser;
  content: string;
};
