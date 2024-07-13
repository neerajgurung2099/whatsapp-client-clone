import { auth } from "@/utils/auth";
import { LoaderFunctionArgs, redirect } from "react-router-dom";
import { SignInCredentialsDTO } from "../api/signIn";

export const signInAction = async ({ request }: LoaderFunctionArgs) => {
  try {
    const data: SignInCredentialsDTO = await request.json();
    await auth.signIn(data);
    return redirect("/");
  } catch (error) {
    return null;
  }
};
