import Logo from "../assets/img/logo.svg";

export function ItemLi(props) {
  return (
    <li className={props.className}>
      <a href="">{props.name}</a>
    </li>
  );
}

export function Sidebar() {
  return (
    <nav>
      <ul className="sidebar">
        <div>
          <ItemLi name="slaca 2019" className="titulo" />
          <li>
            <img src={Logo} alt="logo-site" />
          </li>
        </div>
        <div className="nav">
          <ItemLi name="Apresentação" />
          <ItemLi name="Comitês" />
          <ItemLi name="Autores" />
          <ItemLi name="Eixo temáticos" />
          <ItemLi name="Trabalhos" className="efeito" />
          <ItemLi name="Contato" />
        </div>
      </ul>
    </nav>
  );
}
