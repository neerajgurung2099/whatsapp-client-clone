import { AuthUser, getUser } from "@/features/auth";
import {
  SignInCredentialsDTO,
  signInWithEmailAndPassword,
} from "@/features/auth/api/signIn";
import { storage } from "./storage";
import {
  SignUpCredentialsDTO,
  signUpWithEmailAndPassword,
} from "@/features/auth/api/signUp";

type Auth = {
  user: AuthUser | null;
  isLoading: boolean;
  signIn: (data: SignInCredentialsDTO) => Promise<void>;
  signUp: (data: SignUpCredentialsDTO) => void;
  getUser: () => void;
};
export const auth: Auth = {
  user: null,
  isLoading: false,
  signIn: async (data: SignInCredentialsDTO) => {
    const { user, token } = await signInWithEmailAndPassword(data);
    storage.setToken(token);
    auth.user = user;
  },
  signUp: async (data: SignUpCredentialsDTO) => {
    const { user, token } = await signUpWithEmailAndPassword(data);
    storage.setToken(token);
    auth.user = user;
  },
  getUser: async () => {
    if (storage.getToken()) {
      const userData = await getUser();
      auth.user = userData;
    }
  },
};
