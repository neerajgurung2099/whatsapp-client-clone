import { MainLayout } from "@/components/Layout";
import { getChats } from "@/features/chat/api/getChats";
import { auth } from "@/utils/auth";
import { storage } from "@/utils/storage";
import { redirect } from "react-router-dom";

const appLoader = async () => {
  try {
    if (!storage.getToken()) {
      return redirect("/auth/signin");
    }
    // get user info from server using token
    await auth.getUser();

    // redirect to sigin in if token is invalid
    if (!auth.user) {
      return redirect("/auth/signin");
    }

    // get chat list
    const chatList = await getChats();
    return { user: auth.user, chatList: chatList };
  } catch (e) {}
};

export const protectedRoutes = {
  path: "app",
  id: "app",
  loader: appLoader,
  element: <MainLayout />,
  children: [
    {
      path: "dashboard",
      element: <h1>Dashboard</h1>,
    },
  ],
};
