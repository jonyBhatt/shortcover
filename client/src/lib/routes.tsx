import { createBrowserRouter } from "react-router-dom";
import Layout from "../Layout";
import App from "../App";
import Login from "../auth/Login";
import Register from "../auth/Register";

import { lazy } from "react";

// const waitOneMinute = () => {
//   return new Promise<void>((resolve) => {
//     setTimeout(() => {
//       resolve();
//     }, 20000); // 60000 milliseconds = 1 minute
//   });
// };
// eslint-disable-next-line react-refresh/only-export-components
const CoverPage = lazy(async () => {
  return import("../pages/CoverPage");
});

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: "/",
        element: <App />,
      },
      {
        path: "/cars",
        element: <App />,
      },
      {
        path: "/login",
        element: <Login />,
      },
      {
        path: "/register",
        element: <Register />,
      },
      {
        path: "/cover",
        element: <CoverPage />,
      },
    ],
  },
]);
