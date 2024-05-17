import { AuthUser } from "@/features/auth";
import { create } from "zustand";

type AuthStore = {
  user: null | AuthUser;
  setUser: (user: AuthUser) => void;
  removeUser: () => void;
};
export const useAuth = create<AuthStore>((set) => ({
  user: null,
  setUser: (user) => set(() => ({ user: user })),
  removeUser: () =>
    set(() => {
      console.log("User removed");
      return { user: null };
    }),
}));
