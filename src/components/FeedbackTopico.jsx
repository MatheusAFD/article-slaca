import React, { useState } from "react";
import { Topico } from "./Topico";

export function Feedback() {
  const [isReturnTopico, setIsReturnTopico] = useState(false);
  function returnTopico() {
    setIsReturnTopico(!isReturnTopico);
    console.log("trocou");
  }

  return (
    <>
      {isReturnTopico ? (
        <>
          <Topico />
        </>
      ) : (
        <>
          <div className="feedback-topico sombra anime">
            <h4 className="title-discussao mt-2">
              Seu tópico foi enviado com sucesso! :D
            </h4>
            <p className="mt-1 topico-duvida">
              Agradecemos por sua contribuição, uma notificação será enviada ao
              seu email assim que seu tópico for respondido!
            </p>
            <a href="" className="mt-3 text-discussao orange">
              Descubra outros trabalhos!
            </a>
            <input
              onClick={returnTopico}
              className="mt-4 feedback-button-topico feedback-button"
              type="submit"
              value="criar novo tópico"
            />
          </div>
        </>
      )}
    </>
  );
}
