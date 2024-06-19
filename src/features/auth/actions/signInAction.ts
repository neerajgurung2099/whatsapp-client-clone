import { LoaderFunctionArgs, redirect } from "react-router-dom";
import {
  SignInCredentialsDTO,
  signInWithEmailAndPassword,
} from "../api/signIn";
import { storage } from "@/utils/storage";

export const signInAction = async ({ request }: LoaderFunctionArgs) => {
  try {
    const data: SignInCredentialsDTO = await request.json();
    const response = await signInWithEmailAndPassword(data);
    storage.setToken(response.token);
    return response;
  } catch (error) {
    console.log(error);
    return null;
  }
};
