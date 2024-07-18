import { rootLoader } from "@/loaders/rootLoader";
import { createBrowserRouter, Navigate } from "react-router-dom";
import { protectedRoutes } from "./protected";
import { publicRoutes } from "./public";

export const router = createBrowserRouter([
  {
    path: "/",
    loader: rootLoader,
  },
  publicRoutes,
  protectedRoutes,
  {
    path: "*",
    element: <Navigate to={"/"} />,
  },
]);
