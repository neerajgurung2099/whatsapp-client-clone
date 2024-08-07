import { Navigate, RouteObject } from "react-router-dom";
import { signInAction } from "../actions/signInAction";
import { signUpAction } from "../actions/signUpAction";
import { Layout } from "../components/Layout";
import { authLoader } from "../loaders/authLoader";
import { SignIn } from "./SignIn";
import { SignUp } from "./SignUp";

export const AuthRoutes: RouteObject = {
  path: "auth",
  loader: authLoader,
  element: <Layout />,
  children: [
    {
      index: true,
      element: <Navigate to={"./signin"} />,
    },
    {
      path: "signin",
      element: <SignIn />,
      action: signInAction,
    },
    {
      path: "signup",
      element: <SignUp />,
      action: signUpAction,
    },
    {
      path: "*",
      element: <Navigate to={"./signin"} />,
    },
  ],
};
