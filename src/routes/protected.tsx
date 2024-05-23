import { ChatDrawer, ChatLayout, Sidebar } from "@/components/Layout";
import { Profile } from "@/features/profile";
import { createMemoryRouter } from "react-router-dom";

export const sidebarRouter = createMemoryRouter([
  {
    path: "/",
    element: <Sidebar />,
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
    children: [
      {
        path: "contactinfo",
        element: <ChatDrawer />,
      },
    ],
  },
]);
