import { useState } from "react";
import { Discussao } from "../components/Discussao";
import { Header } from "../components/Header";
import { MainContent } from "../components/MainContent";
import { Resumo } from "../components/Resumo";

export function Trabalhos() {
  return (
    <div>
      {}
      <Header className="colum-2" />
      <MainContent className="colum-2" />
      <Resumo />
    </div>
  );
}
