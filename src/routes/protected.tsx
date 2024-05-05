import { Layout } from "@/components/Layout";
import { storage } from "@/utils/storage";
import { RouteObject, redirect } from "react-router-dom";

const rootLoader = () => {
  if (!storage.getToken()) {
    return redirect("/signin");
  }
  return null;
};
export const ProtectedRoutes: RouteObject = {
  path: "/",
  loader: rootLoader,
  element: <Layout />,
};
