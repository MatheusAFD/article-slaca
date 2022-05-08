import video from "../assets/img/video.png";
import download from "../assets/icons/download.png";
import favoritar from "../assets/icons/favoritar.png";
import doi from "../assets/icons/doi.png";

export function MainContent() {
  return (
    <main className="main-container mt-2">
      <section className="center-content">
        <div className="video-player">
          <h2 className="font-1-m">
            Análise sensorial de preparações funcionais desenvolvidas para
            escolares <br /> entre 09 e 15 anos, do município de Campinas/SP{" "}
          </h2>
          <img className="mt-2 img-video" src={video} alt="" />
        </div>
        <aside className="aside-content">
          <div className="aside-content-buttons">
            <button className="download">
              <img src={download} alt="" />
              <p>Download</p>
            </button>
            <button className="star">
              <img src={favoritar} alt="" />
            </button>
            <button className="doi">
              <img src={doi} alt="" />
            </button>
          </div>
          <p className="font-4-t">como citar esse trabalho?</p>
          <div className="card-detalhes ">
            <h3>Detalhes</h3>
            <div className="card-container">
              <div className="card-text-1 card-tipografia">
                <p>
                  Tipo de Apresentação: <strong>Pôster</strong>
                </p>
                <p>
                  Eixo temático: <strong>Alimentação e saúde (AS)</strong>
                </p>
                <p>
                  Palavras-chaves:
                  <strong> Alimentos funcionais, alimentação escolar.</strong>
                </p>
              </div>
              <div className="card-text-1 card-text-3 card-tipografia">
                <p>
                  <p>
                    <strong> Autores:</strong>
                  </p>
                  <p> Galileo Galilei¹</p>
                  <p> Berta Lange de Morretes² </p>
                  <p> Isaac Newton³ </p>
                  <p> Cesar Lattes¹</p>
                  <p> Stephen Hawking⁴</p>
                </p>
              </div>
              <div className="card-text-1  ">
                Universidade Estadual de Campinas ²Universidade de São Paulo
                ³Instituto Nacional de Pesquisas Espaciais ⁴Universidade Federal
                do Rio de Janeiro
              </div>

              {/* <div className="card-text-1">
                <p>
                  Tipo de Apresentação: <strong>Pôster</strong>
                </p>
                <p>
                  Eixo temático: <strong>Alimentação e saúde (AS)</strong>
                </p>
                <p>
                  Palavras-chaves:
                  <strong> Alimentos funcionais, alimentação escolar.</strong>
                </p>
              </div> */}
              {/* 
              <div className="card-text-1">
                <p>
                  Tipo de Apresentação: <strong>Pôster</strong>
                </p>
                <p>
                  Eixo temático: <strong>Alimentação e saúde (AS)</strong>
                </p>
                <p>
                  Palavras-chaves:
                  <strong> Alimentos funcionais, alimentação escolar.</strong>
                </p>
              </div> */}
            </div>
          </div>
        </aside>
      </section>
    </main>
  );
}
