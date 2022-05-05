import { useState } from "react";
import { Sidebar } from "./components/Sidebar";
import { Container } from "./components/Container";
import "./assets/css/global.css";

export function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="flex">
      <Sidebar />
      <Container />
    </div>
  );
}
