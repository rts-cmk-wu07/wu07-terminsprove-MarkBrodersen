import { useState } from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import App from "../App";
import Layout from "../templates/Layout";
import Welcome from "./Welcome";
import ClassDetails from "./ClassDetails";
import LogInOut from "./LogInOut";
export default function Router() {
  //  !turn ? den ene : den anden
  const router = createBrowserRouter([
    {
      element:
        sessionStorage.getItem("key") !== "true" ? <Welcome /> : <Layout />,
      children: [
        {
          path: "/",
          element: <App />,
        },
        {
          path: "/welcome",
          element: <Welcome />,
        },
        {
          path: "/logout",
          element: <LogInOut />,
        },
        {
          path: "/logind",
          element: <LogInOut />,
        },
        {
          path: "/classDetails/:id",
          element: <ClassDetails />,
        },
      ],
    },
  ]);
  return <RouterProvider router={router} />;
}
