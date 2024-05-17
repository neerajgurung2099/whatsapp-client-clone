import { ChatLayout, SidebarLayout } from "@/components/Layout";
import { Profile } from "@/features/profile";
import { createMemoryRouter } from "react-router-dom";

export const sidebarRouter = createMemoryRouter([
  {
    path: "/",
    element: <SidebarLayout />,
    children: [
      {
        path: "profile",
        element: <Profile />,
      },
    ],
  },
]);
export const chatRouter = createMemoryRouter([
  {
    path: "/",
    element: <ChatLayout />,
    children: [],
  },
]);
