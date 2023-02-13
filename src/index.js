import React from "react";
import ReactDOM from "react-dom/client";
// import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./index.css";
import App from "./App";
// import Layout from "./templates/Layout";
// import Welcome from "./pages/Welcome";
// const router = createBrowserRouter([
//   {
//     path: "/",
//     element: <Welcome />,
//     children: [
//       {
//         path: "layout",
//         element: <App />,
//       },
//     ],
//   },
// ]);
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
    {/* <RouterProvider router={router} /> */}
  </React.StrictMode>
);
