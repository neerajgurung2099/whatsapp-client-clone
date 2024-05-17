import { LoaderFunctionArgs, redirect } from "react-router-dom";
import {
  SignInCredentialsDTO,
  signInWithEmailAndPassword,
} from "../api/signIn";
import { storage } from "@/utils/storage";

export const signInAction = async ({ request }: LoaderFunctionArgs) => {
  const data: SignInCredentialsDTO = await request.json();
  //const response = await signInWithEmailAndPassword(data);
  const response = {
    jwt: "test",
    user: {
      email: "test@gmail.com",
      userName: "test",
      _id: "1",
    },
  };
  storage.setToken(response.jwt);
  return response;
};
