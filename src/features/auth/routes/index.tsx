import { RouteObject } from "react-router-dom";
import { Layout } from "../components/Layout";
import { SignIn } from "./SignIn";
import { SignUp } from "./SignUp";

export const AuthRoutes: RouteObject[] = [
  {
    element: <Layout />,
    children: [
      {
        index: true,
        element: <SignIn />,
      },
      {
        path: "/signup",
        element: <SignUp />,
      },
    ],
  },
];
