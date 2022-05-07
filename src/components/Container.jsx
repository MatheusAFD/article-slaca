import { Discussao } from "./Discussao";
import { Header } from "./Header";
import { MainContent } from "./MainContent";
import { Resumo } from "./Resumo";

export function Container() {
  return (
    <div>
      <Header className="colum-2" />
      <MainContent className="colum-2" />
      <Resumo />
      <Discussao />
    </div>
  );
}
