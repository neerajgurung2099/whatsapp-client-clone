import { AuthRoutes } from "@/features/auth";
import { createBrowserRouter, useRouteError } from "react-router-dom";

export const Error = () => {
  const error: any = useRouteError();
  return (
    <div className="h-screen flex justify-center items-center text-center flex-col">
      <h1 className="text-2xl font-bold ">Oops!</h1>
      <p>Sorry, an unexprected error has occured.</p>
      <p className="italic">{error.statusText || error.message} </p>
    </div>
  );
};
export const publicRouter = createBrowserRouter([
  {
    path: "/",
    children: [AuthRoutes],
    errorElement: <Error />,
  },
]);
