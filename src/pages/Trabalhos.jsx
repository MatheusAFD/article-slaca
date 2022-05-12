import { Header } from "../components/Header";
import { MainContent } from "../components/MainContent";
import { Resumo } from "../components/Resumo";
import { Discussao } from "../components/Discussao";
import { Footer } from "../components/Footer";

export function Trabalhos() {
  return (
    <div>
      <Header className="colum-2" />
      <MainContent className="colum-2" />
      <Resumo />
      <Discussao />
      <Footer />
    </div>
  );
}
