import profilepic from "../assets/img/profile.png";

export function InfoHeader(props) {
  return <p className={props.className}> {props.name}</p>;
}

export function Header() {
  return (
    <header className="header header-bg main-container">
      <div className="header-titulo">
        <InfoHeader
          className="font-1-xs"
          name="Anais do Simpósio Latino Americano de Ciências de Alimentos"
        />
        <InfoHeader
          className="font-2-m"
          name="Anais do Simpósio Latino Americano de Ciências de Alimentos"
        />
        <InfoHeader className="font-1-xs" name="ISSN: 1234-5678" />
      </div>
      <div className="header-language">
        <button className="font-2-xs">PT,BR</button>
      </div>
      <div className="header-login">
        <p className="font-3-s">Bem vindo!</p>
        <p className="font-3-xs">alguem12@galoascience.com</p>
        <img src={profilepic} alt="Foto de perfil" />
      </div>
    </header>
  );
}
