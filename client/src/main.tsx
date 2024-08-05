import React from "react";
import ReactDOM from "react-dom/client";
import { RouterProvider } from "react-router-dom";
import "./index.css";
import { router } from "./lib/routes.tsx";
import { NavLinkProvider } from "./context/NavLinkProvider.tsx";
import ClientProvider from "./components/QueryClientProvider.tsx";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <ClientProvider>
      <NavLinkProvider>
        <RouterProvider router={router} />
      </NavLinkProvider>
    </ClientProvider>
  </React.StrictMode>
);
