import { Notifications } from "@/components/Notification";
import { Suspense } from "react";
import { HelmetProvider } from "react-helmet-async";
import { RouterProvider } from "react-router-dom";
import { router } from "./routes";
function App() {
  return (
    <Suspense>
      <HelmetProvider>
        <Notifications />
        <RouterProvider router={router} />
      </HelmetProvider>
    </Suspense>
  );
}

export default App;
