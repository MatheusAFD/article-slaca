import React, { useState } from "react";
import { Feedback } from "./FeedbackTopico";

import italico from "../assets/icons/negrito.png";
import negrito from "../assets/icons/italico.png";
import checkG from "../assets/icons/checkG.png";

export function Topico() {
  const [isShowFeedback, setIsShowFeedback] = useState(false);
  const [subject, setSubject] = useState("");
  const [content, setContent] = useState("");
  const [IS_SHOW_TOPIC_ADDED, SET_IS_SHOW_TOPIC_ADDED] = useState(false);

  const [topicList, setTopicList] = useState([
    {
      subject: "a",
      content: "a",
    },
    {
      subject: "a",
      content: "a",
    },
  ]);

  function handleAddTopic() {
    let topic = {
      Subject: subject,
      Content: content,
    };
    isShowTopicAdded();

    setTopicList([...topicList, topic]);
    setIsShowFeedback(!isShowFeedback);
  }

  function isShowTopicAdded() {
    SET_IS_SHOW_TOPIC_ADDED(true);
  }
  console.log(topicList);

  return (
    <>
      {isShowFeedback ? (
        <>
          <Feedback />
          {IS_SHOW_TOPIC_ADDED && (
            <>
              <div className="blur-div">
                <div className="content-blur">
                  <img src={checkG} alt="" />
                  <p className="font-1-feedback ">
                    Aguardando feedback dos autores
                  </p>
                  <h5 className="text-discussao orange">Editar tópico</h5>
                </div>
                <div className="mt-3 question pointer mb-2 filter-topic ">
                  <h4 className="title-discussao mt-2 left">Assunto aqui</h4>
                  <p className="left font-1-name">Usuario aqui</p>
                  <p className="tipografia blur-content">Conteudo aqui</p>
                  <div className="acoes left mb-2">
                    <span>0 likes</span>
                    <span>0 respostas</span>
                  </div>
                </div>
              </div>
            </>
          )}
          {/* <div className="main-container mt-3 question pointer mb-2">
            <></>
          </div> */}
        </>
      ) : (
        <>
          <div className="enviar-duvida sombra mll-2 anime ">
            <p className="topico-duvida mt-2">
              Tem uma dúvida ou sugestão? Compartilhe seu feedback com os
              autores!
            </p>
            <div>
              <label htmlFor="input01" className="topico-titulo">
                Assunto
              </label>
              <input
                onChange={(e) => setSubject(e.target.value)}
                type="text"
                id="input01"
                placeholder="Defina um tópico sucinto para notificar os autores..."
              />
            </div>
            <div className="mt-1 ">
              <label htmlFor="input02" className="topico-titulo">
                Conteudo
              </label>
              <textarea
                onChange={(e) => setContent(e.target.value)}
                name=""
                id="input02"
                cols="30"
                rows="10"
              ></textarea>
              {
                <div className="topico-formatacao">
                  <div className="icons">
                    <img src={negrito} alt="" />
                    <img src={italico} alt="" />
                  </div>
                  <input
                    onClick={handleAddTopic}
                    type="submit"
                    value="Enviar"
                    className="topico-enviar button-enviar-topico"
                  />
                </div>
              }
              {topicList.map((topic, key) => {
                return <p> {topic.Content}</p>;
              })}
            </div>
          </div>
        </>
      )}
    </>
  );
}
