// Router.jsx
import React from "react";
import { createBrowserRouter } from "react-router-dom";

import Layout from "./Layout.jsx";
import Home from "./pages/Home.jsx";
import Settings from "./pages/Settings.jsx"
import Statistics from "./pages/Statistics.jsx"

import Error from "./pages/Error.jsx"

const Router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />, // MENU + FOOTER
    children: [
      { index: true, element: <Home /> },
      { path: "settings", element: < Settings/> },
        { path: "statistics", element: < Statistics/> },
         { path: "error", element: < Error/> },
    ],
  },
]);

export default Router;
