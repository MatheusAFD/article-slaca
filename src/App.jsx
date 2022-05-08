import { useState } from "react";
import { Sidebar } from "./components/Sidebar";
import { Trabalhos } from "./pages/Trabalhos";
import "./assets/css/global.css";
import { MenuMobile } from "./components/MenuMobile";

export function App() {
  const [isMobile, setIsMobile] = useState(false);
  const returnMobile = window.screen.width < 900 ? true : false;
  function returnIsMobile() {
    setIsMobile(returnMobile);
  }
  window.addEventListener("resize", returnIsMobile);

  return (
    <div className="grid">
      {!returnMobile ? (
        <>
          <Sidebar />
        </>
      ) : (
        <>
          <MenuMobile />
        </>
      )}

      <Trabalhos />
    </div>
  );
}
