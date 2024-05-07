import { createMemoryRouter } from "react-router-dom";

export const leftRouter = createMemoryRouter([
  { path: "/", element: <></>, children: [] },
]);
export const rightRouter = createMemoryRouter([
  {
    path: "/",
    element: <></>,
    children: [],
  },
]);
