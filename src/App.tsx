import React, { Suspense } from "react";
import { HelmetProvider } from "react-helmet-async";
import { RouterProvider } from "react-router-dom";
import { storage } from "./utils/storage";
import { Layout } from "./components/Layout";
import { sidebarRouter, chatRouter } from "./routes/protected";
import { publicRouter } from "./routes/public";
import { useAuth } from "./stores/auth";
//chagne the storege.getTOken to auth.user
function App() {
  const { user } = useAuth();
  return (
    <Suspense>
      <HelmetProvider>
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
