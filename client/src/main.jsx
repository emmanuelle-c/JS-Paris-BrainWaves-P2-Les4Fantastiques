import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import AvisClient from "./pages/AvisClient";

import App from "./App";
import PageHero from "./pages/PageHero";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "/avisclient",
    element: (
  
        <main>
          <AvisClient />
        </main>
  
    path: "/pagehero/:id",
    element: (
      
        <main>
          <PageHero />
        </main>
      
    ),
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);