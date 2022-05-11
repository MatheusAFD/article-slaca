import React, { useState } from "react";
import { Topico } from "./Topico";
import { Questions } from "./Questions";
import { Answers } from "./Answers";

import img1 from "../assets/icons/icone1.png";
import img2 from "../assets/icons/icone2.png";
import img3 from "../assets/icons/icone3.png";
import criar from "../assets/icons/criar.png";

export function Discussao() {
  const [isCreateTopic, setIsCreateTopic] = useState(false);
  const [isShowAnswer, setIsShowAnswer] = useState(false);

  function handleShowAnswer() {
    setIsShowAnswer(!isShowAnswer);
  }

  function handleToggleShow() {
    setIsCreateTopic(!isCreateTopic);
  }

  return (
    <section className="main-container mt-3 section">
      <h3 className="h3titulo sombra ">Discussões</h3>

      {isCreateTopic && <Topico />}
      <div className="discussao sombra ">
        {!isCreateTopic && (
          <>
            <h4 className="title-discussao mt-3">
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
            <div className="criar-topico">
              <img src={criar} alt="" />
              <input
                onClick={handleToggleShow}
                className="mt-2 discussao-button-criar"
                type="submit"
                value="criar tópico"
              >
                {/* <p>a</p> */}
              </input>
              <hr />
            </div>
          </>
        )}{" "}
        <Questions
          subject="Dúvida sobre data do evento"
          user="Carlos Henrique Santos"
          content="Comecinho da pergunta aparece aqui resente relato inscreve-se no campo da análise da dimensão e impacto de processo formativo situado impacto de processo formativo processo..."
          likes="1"
          answers="1"
        />
        <Questions
          subject="Não consigo criar tópico, o que fazer?"
          user="Carlos Henrique Santos"
          content="Comecinho da pergunta aparece aqui resente relato inscreve-se no campo da análise da dimensão e impacto de processo formativo situado impacto de processo formativo processo..."
          likes={3}
          answers={3}
          event={handleShowAnswer}
        />
        {isShowAnswer ? (
          <>
            <Answers
              author="Adriana da Silva"
              typeUser="Autor"
              content="A resposta do autor é aqui A resposta do autor é aqui A resposta do autor é aqui A resposta do autor é aqui A resposta do autor é aqui A resposta do autor é aqui A resposta do autor é aqui A resposta do autor é aqui A resposta do autor é aqui A resposta do autor é aqui
          A resposta do autor é aqui A resposta do autor é aqui A resposta do autor é aqui A resposta do autor é aqui A resposta do autor é aqui"
              className="answers author anime"
            />
            <Answers
              author="Adriana da Silva"
              typeUser=""
              content="A resposta do autor é aqui A resposta do autor é aqui A resposta do autor é aqui A resposta do autor é aqui A resposta do autor é aqui A resposta do autor é aqui A resposta do autor é aqui A resposta do autor é aqui A resposta do autor é aqui A resposta do autor é aqui
          A resposta do autor é aqui A resposta do autor é aqui A resposta do autor é aqui A resposta do autor é aqui A resposta do autor é aqui"
              className="answers anime"
            />
            <Answers
              author="Rogério Lima castro"
              typeUser="Autor"
              content="A resposta do autor é aqui A resposta do autor é aqui A resposta do autor é aqui A resposta do autor é aqui A resposta do autor é aqui A resposta do autor é aqui A resposta do autor é aqui A resposta do autor é aqui A resposta do autor é aqui A resposta do autor é aqui
          A resposta do autor é aqui A resposta do autor é aqui A resposta do autor é aqui A resposta do autor é aqui A resposta do autor é aqui"
              className="answers author mb-2 anime"
            />
          </>
        ) : null}
      </div>
    </section>
  );
}
