import { auth } from "@/utils/auth";
import { redirect } from "react-router-dom";

const MainLayout = () => {
  console.log(auth.user);
  return <div>Main layout</div>;
};
export const protectedRoutes = [
  {
    path: "/app",
    element: <MainLayout />,
    loader: () => {
      if (!auth.user) {
        return redirect("/");
      }
      return null;
    },
    children: [
      {
        path: "dashboard",
        element: <h1>Dashboard</h1>,
      },
    ],
  },
];
