import { axios } from "@/lib/axios";
import { UserResponse } from "../types";

export type SignUpCredentialsDTO = {
  email: string;
  password: string;
  name: string;
};
export const signUpWithEmailAndPassword = (
  data: SignUpCredentialsDTO
): Promise<UserResponse> => {
  return axios.post("/auth/signup", data);
};
