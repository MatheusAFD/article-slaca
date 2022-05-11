import React, { useState } from "react";
import { Feedback } from "./FeedbackTopico";

import italico from "../assets/icons/negrito.png";
import negrito from "../assets/icons/italico.png";

export function Topico() {
  const [isShowFeedback, setIsShowFeedback] = useState(false);
  const [subject, setSubject] = useState("");
  const [content, setContent] = useState("");

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

    setTopicList([...topicList, topic]);
    setIsShowFeedback(!isShowFeedback);
  }

  console.log(topicList);

  return (
    <>
      {isShowFeedback ? (
        <>
          <Feedback />
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

      {/* {isShowFeedback && <Feedback />}
      <div className="enviar-duvida sombra mll-2">
        {!isShowFeedback && (
          
        )}
      </div> */}
    </>
  );
}
