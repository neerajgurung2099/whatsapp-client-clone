import { LoaderFunctionArgs } from "react-router-dom";
import {
  SignUpCredentialsDTO,
  signUpWithEmailAndPassword,
} from "../api/signUp";

export const signUpAction = async ({ request }: LoaderFunctionArgs) => {
  const data: SignUpCredentialsDTO = await request.json();
  const response = await signUpWithEmailAndPassword(data);

  return null;
};
