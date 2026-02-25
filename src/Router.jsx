// Router.jsx

import { createBrowserRouter } from "react-router-dom";

import Layout from "./Layout.jsx";
import Home from "./pages/Home.jsx";
import Settings from "./pages/SettingsPage.jsx"
import Statistics from "./pages/StatisticsPage.jsx"

import Error from "./pages/ErrorPage.jsx"

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
