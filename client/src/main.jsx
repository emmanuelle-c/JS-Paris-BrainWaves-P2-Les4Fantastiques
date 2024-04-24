import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { StatusProvider } from "./assets/context/status";
import App from "./App";
import PageHero from "./pages/PageHero";
import FirstPage from "./pages/FirstPage/FirstPage";
<<<<<<< HEAD
import UserPage from "./pages/UserPage/UserPage";
=======
>>>>>>> 6aabfed57e64720b26fc029837a478d013ceb09a
import Faq from "./pages/Faq/Faq";

const router = createBrowserRouter([
  {
    path: "/accueil",
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
    path: "/",
    element: (
      <main>
        <FirstPage />
      </main>
    ),
  },
  {
    path: "/userpage",
    element: (
        <UserPage />
    ),
  },
  {
    path:'/faq',
    element:(
      <main>
        <Faq/>
      </main>
    )
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <React.StrictMode>
    <StatusProvider>
    <RouterProvider router={router} />
    </StatusProvider>
  </React.StrictMode>
);
