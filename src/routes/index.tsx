import { AuthRoutes } from "@/features/auth";
import { createBrowserRouter } from "react-router-dom";

export const router = createBrowserRouter([
  {
    path: "/",
    children: AuthRoutes,
  },
]);
