import {
  ChatDrawer,
  ChatLayout,
  Sidebar,
  SidebarDrawer,
} from "@/components/Layout";
import { Chats, Profile } from "@/features/profile";
import { createMemoryRouter } from "react-router-dom";

export const sidebarRouter = createMemoryRouter([
  {
    path: "/",
    element: <Sidebar />,
    children: [
      {
        path: "sidebar",
        element: <SidebarDrawer />,
        children: [
          {
            path: "profile",
            element: <Profile />,
          },
          {
            path: "chats",
            element: <Chats />,
          },
        ],
      },
    ],
  },
]);
export const chatRouter = createMemoryRouter([
  {
    path: "/",
    element: <ChatLayout />,
    children: [
      {
        path: "contactinfo",
        element: <ChatDrawer />,
      },
    ],
  },
]);
