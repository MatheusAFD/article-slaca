import checkIcon from "../assets/icons/check.png";

export function Answers(props) {
  return (
    <>
      <div className={props.className}>
        <div className="mt-3">
          <div className="answer-justify">
            {props.typeUser == "Autor" ? (
              <>
                <p className="left font-1-name-b">{props.author}</p>
              </>
            ) : (
              <>
                <p className="left font-1-name">{props.author}</p>
              </>
            )}

            {props.typeUser == "Autor" ? (
              <>
                <div className="answerCheckDiv">
                  <img src={checkIcon} alt="" />
                  <p className="font-1-xs-b">{props.typeUser}</p>
                </div>
              </>
            ) : null}
          </div>
          <p className="tipografia-ans  answer-content">{props.content}</p>
        </div>
      </div>
    </>
  );
}
