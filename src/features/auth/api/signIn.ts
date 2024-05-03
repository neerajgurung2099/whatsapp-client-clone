import { axios } from "@/lib/axios";
import { UserResponse } from "../types";

export type SignInCredentialsDTO = {
  email: string;
  password: string;
};

export const signInWithEmailAndPassword = (
  data: SignInCredentialsDTO
): Promise<UserResponse> => {
  return axios.post("/auth/signin", data);
};
