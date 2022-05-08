import React, { useState } from "react";
import { Topico } from "./Topico";

import img1 from "../assets/icons/icone1.png";
import img2 from "../assets/icons/icone2.png";
import img3 from "../assets/icons/icone3.png";
import criar from "../assets/icons/criar.png";

export function Discussao() {
  const [isCreateTopic, setIsCreateTopic] = useState(false);
  const [isCreatedTopic, setIsCreatedTopic] = useState(false);
  function handleCreatedTopic() {
    setIsCreatedTopic(!isCreatedTopic);
  }
  function handleToggleShow() {
    setIsCreateTopic(!isCreateTopic);
  }

  return (
    <section className="main-container mt-3 ">
      <h3 className="h3titulo sombra ">Discussões</h3>

      {isCreateTopic && <Topico />}
      <div className="discussao sombra">
        {!isCreateTopic && (
          <>
            <h4 className="title-discussao">
              Compartilhe suas ideias ou dúvidas com os autores!
            </h4>
            <div className="discussao-icons mt-3">
              <img src={img1} alt="" />
              <img src={img2} alt="" />
              <img src={img3} alt="" />
            </div>
            <p className="text-discussao mt-3">
              Sabia que o maior estímulo no desenvolvimento científico e
              cultural é a curiosidade? <br /> Deixe seus questionamentos ou
              sugestões para o autor!
            </p>
            <div>
              <button
                onClick={handleToggleShow}
                className="mt-2 discussao-button-criar"
              >
                <img src={criar} alt="" />
                <hr />
                criar tópico
              </button>
            </div>
          </>
        )}{" "}
      </div>
    </section>
  );
}
