import infoIcon from "../assets/icons/more.png";
import likeIcon from "../assets/icons/like.png";

export function Questions(props) {
  return (
    <>
      <div className="mt-3 question pointer mb-2" onClick={props.event}>
        <h4 className="title-discussao mt-2 left">{props.subject}</h4>
        <p className="left font-1-name">{props.user}</p>
        <p className="tipografia">{props.content}</p>
        <div className="acoes left mb-2">
          <img src={infoIcon} alt="" />
          <img src={likeIcon} alt="" />
          <span>{props.likes} likes</span>
          <span>{props.answers} respostas</span>
        </div>
      </div>
    </>
  );
}
