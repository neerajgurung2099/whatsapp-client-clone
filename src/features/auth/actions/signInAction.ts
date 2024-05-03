import { LoaderFunctionArgs } from "react-router-dom";
import {
  SignInCredentialsDTO,
  signInWithEmailAndPassword,
} from "../api/signIn";

export const signInAction = async ({ request }: LoaderFunctionArgs) => {
  const data: SignInCredentialsDTO = await request.json();
  const response = await signInWithEmailAndPassword(data);
  return null;
};
