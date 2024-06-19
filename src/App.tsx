import React, { Suspense } from "react";
import { HelmetProvider } from "react-helmet-async";
import { RouterProvider } from "react-router-dom";
import { Layout } from "./components/Layout";
import { sidebarRouter, chatRouter } from "./routes/protected";
import { publicRouter } from "./routes/public";
import { useAuth } from "./stores/auth";
import { Notifications } from "@/components/Notification";
//chagne the storege.getTOken to auth.user
function App() {
  const { user } = useAuth();
  return (
    <Suspense>
      <HelmetProvider>
        <Notifications />
        {!user ? (
          <RouterProvider router={publicRouter} />
        ) : (
          <Layout>
            <RouterProvider router={sidebarRouter} />
            <RouterProvider router={chatRouter} />
          </Layout>
        )}
      </HelmetProvider>
    </Suspense>
  );
}

export default App;
