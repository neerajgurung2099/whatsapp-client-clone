import { AuthRoutes } from "@/features/auth";
import { createBrowserRouter, useRouteError } from "react-router-dom";
import { ProtectedRoutes } from "./protected";

export const Error = () => {
  const error: any = useRouteError();
  console.log(error);
  return (
    <div className="h-screen flex justify-center items-center text-center flex-col">
      <h1 className="text-2xl font-bold ">Oops!</h1>
      <p>Sorry, an unexprected error has occured.</p>
      <p className="italic">{error.statusText || error.message} </p>
    </div>
  );
};
export const router = createBrowserRouter([
  {
    path: "/",
    children: [AuthRoutes, ProtectedRoutes],
    errorElement: <Error />,
  },
]);
