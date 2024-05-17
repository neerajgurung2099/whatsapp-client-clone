import { LoaderFunctionArgs, redirect } from "react-router-dom";
import {
  SignUpCredentialsDTO,
  signUpWithEmailAndPassword,
} from "../api/signUp";
import { storage } from "@/utils/storage";

export const signUpAction = async ({ request }: LoaderFunctionArgs) => {
  const data: SignUpCredentialsDTO = await request.json();
  //const response = await signUpWithEmailAndPassword(data);
  const response = {
    jwt: "test",
    user: {
      email: "test",
      userName: "test",
      _id: "1",
    },
  };

  storage.setToken(response.jwt);

  return response;
};
