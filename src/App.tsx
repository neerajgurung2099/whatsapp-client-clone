import React, { Suspense } from "react";
import { HelmetProvider } from "react-helmet-async";
import { RouterProvider } from "react-router-dom";
import { storage } from "./utils/storage";
import { Layout } from "./components/Layout";
import { leftRouter, rightRouter } from "./routes/protected";
import { publicRouter } from "./routes/public";
//chagne the storege.getTOken to auth.user
function App() {
  return (
    <Suspense>
      <HelmetProvider>
        {!storage.getToken() ? (
          <RouterProvider router={publicRouter} />
        ) : (
          <Layout>
            <RouterProvider router={leftRouter} />
            <RouterProvider router={rightRouter} />
          </Layout>
        )}
      </HelmetProvider>
    </Suspense>
  );
}

export default App;
