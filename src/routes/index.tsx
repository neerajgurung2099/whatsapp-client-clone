import { auth } from "@/utils/auth";
import { createBrowserRouter, Navigate, redirect } from "react-router-dom";
import { protectedRoutes } from "./protected";
import { publicRoutes } from "./public";

export const router = createBrowserRouter([
  {
    path: "/",
    loader: async () => {
      try {
        await auth.getUser();
        if (auth.user) {
          return redirect("/app");
        } else {
          return redirect("/auth/signin");
        }
      } catch (e) {}
    },
  },
  ...publicRoutes,
  ...protectedRoutes,
  {
    path: "*",
    element: <Navigate to={"/"} />,
  },
]);
