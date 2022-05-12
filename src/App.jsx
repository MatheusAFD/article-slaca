import { useState } from "react";
import { Sidebar } from "./components/Sidebar";
import { Trabalhos } from "./pages/Trabalhos";
import { MenuMobile } from "./components/MenuMobile";
import "./assets/css/style.min.css";

export function App() {
  return (
    <div className="grid">
      <Sidebar />
      <MenuMobile />
      <Trabalhos />
    </div>
  );
}
