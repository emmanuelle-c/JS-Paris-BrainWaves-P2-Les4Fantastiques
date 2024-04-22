import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import App from "./App";
import PageHero from "./pages/PageHero";
import FirstPage from "./pages/FirstPage/FirstPage";
import AvisClient from "./components/Comment/AvisClient";
import Formulaire from "./components/Formulaire/Formulaire";

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
    path: "/formulaire",
    element: (
      <main>
        <Formulaire />
      </main>
    ),
  },
  {
    path: "/avisclient",
    element: (
      <main>
        <AvisClient />
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
