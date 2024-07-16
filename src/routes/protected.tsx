import { MainLayout } from "@/components/Layout";
import { auth } from "@/utils/auth";
import { redirect } from "react-router-dom";

export const protectedRoutes = [
  {
    path: "/app",
    id: "root",
    element: <MainLayout />,
    loader: async () => {
      try {
        await auth.getUser();
        if (!auth.user) {
          return redirect("/auth/signin");
        }
        return auth.user;
      } catch (e) {}
    },
    children: [
      {
        path: "dashboard",
        element: <h1>Dashboard</h1>,
      },
    ],
  },
];
