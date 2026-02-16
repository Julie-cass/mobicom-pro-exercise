// Layout.jsx
import React from "react";
import { Outlet } from "react-router-dom";

import Navigation from "./components/MenuFolder/Navigation";

export default function Layout() {
  return (
    <>
      <header>
   <Navigation/>
      </header>

      <main>
        <Outlet />
      </main>

      <footer>
        {/* Footer */}
      </footer>
    </>
  );
}