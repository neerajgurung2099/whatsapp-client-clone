import { LoaderFunctionArgs, redirect } from "react-router-dom";
import {
  SignUpCredentialsDTO,
  signUpWithEmailAndPassword,
} from "../api/signUp";

export const signUpAction = async ({ request }: LoaderFunctionArgs) => {
  try {
    const data: SignUpCredentialsDTO = await request.json();
    Reflect.deleteProperty(data, "confirmPassword");
    const response = await signUpWithEmailAndPassword(data);
    return response;
  } catch (error) {
    return null;
  }
};
