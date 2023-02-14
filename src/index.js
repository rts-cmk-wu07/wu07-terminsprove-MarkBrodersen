import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./index.css";
import App from "./App";
import Layout from "./templates/Layout";
import Welcome from "./pages/Welcome";
import ClassDetails from "./pages/ClassDetails";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: "/home",
        element: <App />,
      },
      {
        path: "/welcome",
        element: <Welcome />,
      },
      {
        path: "/search",
        element: <App />,
      },
      {
        path: "/myschedule",
        element: <App />,
      },
      {
        path: "/signin",
        element: <App />,
      },
      {
        path: "/logind",
        element: <App />,
      },
      {
        path: "/classDetails/:id",
        element: <ClassDetails />,
      },
    ],
  },
]);
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
