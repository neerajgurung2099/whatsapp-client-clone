import { RouteObject } from "react-router-dom";
import { Layout } from "../components/Layout";
import { SignIn } from "./SignIn";
import { SignUp } from "./SignUp";
import { signUpAction } from "../actions/signUpAction";
import { signInAction } from "../actions/signInAction";
import { rootLoader } from "../loaders/rootLoader";

export const AuthRoutes: RouteObject = {
  element: <Layout />,
  // loader: rootLoader,
  children: [
    {
      index: true,
      element: <SignIn />,

      action: signInAction,
    },
    {
      path: "/signup",
      element: <SignUp />,
      action: signUpAction,
    },
  ],
};
