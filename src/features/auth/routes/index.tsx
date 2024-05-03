import { RouteObject } from "react-router-dom";
import { Layout } from "../components/Layout";
import { SignIn } from "./SignIn";
import { SignUp } from "./SignUp";
import { signInAction } from "@/features/auth/actions/signInAction";
import { signUpAction } from "../actions/signUpAction";

export const AuthRoutes: RouteObject[] = [
  {
    element: <Layout />,
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
  },
];
