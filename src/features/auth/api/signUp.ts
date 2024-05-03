import { axios } from "@/lib/axios";

export type SignUpCredentialsDTO = {
  email: string;
  password: string;
  userName: string;
};
export const signUpWithEmailAndPassword = (data: SignUpCredentialsDTO) => {
  return axios.post("/auth/signup", data);
};
