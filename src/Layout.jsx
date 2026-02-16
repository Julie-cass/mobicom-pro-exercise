// Layout.jsx
import React from "react";
import { Outlet } from "react-router-dom";

import Navigation from "./components/MenuFolder/Navigation";

export default function Layout() {
  return (
    <>
      <header>
 
      </header>

      <main>
        <Outlet />
      </main>

      <footer>
      <Navigation/>
      </footer>
    </>
  );
}