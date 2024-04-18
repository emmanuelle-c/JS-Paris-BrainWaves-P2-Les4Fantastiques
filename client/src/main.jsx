import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import AvisClient from "./components/Comment/AvisClient";

import App from "./App";
import PageHero from "./pages/PageHero";
import FirstPage from "./pages/FirstPage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "/pagehero/:id",
    element: (
      
        <main>
          <PageHero />
        </main>
      
    ),
  },
  {
    path: "/firstpage",
    element:(

      <main>
        <FirstPage/>
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