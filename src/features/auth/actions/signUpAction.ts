import { LoaderFunctionArgs, redirect } from "react-router-dom";
import {
  SignUpCredentialsDTO,
  signUpWithEmailAndPassword,
} from "../api/signUp";
import { auth } from "@/utils/auth";

export const signUpAction = async ({ request }: LoaderFunctionArgs) => {
  try {
    const data: SignUpCredentialsDTO = await request.json();
    Reflect.deleteProperty(data, "confirmPassword");
    await auth.signUp(data);
    return redirect("/");
  } catch (error) {
    return null;
  }
};
