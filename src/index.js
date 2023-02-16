import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./index.css";
import App from "./App";
import Layout from "./templates/Layout";
import Welcome from "./pages/Welcome";
import ClassDetails from "./pages/ClassDetails";
import LogInOut from "./pages/LogInOut";

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
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
