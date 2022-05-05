import Logo from "../assets/img/logo.svg";

export function Sidebar() {
  return (
    <nav>
      <ul className="sidebar">
        <div>
          <li className="titulo">slaca 2019</li>
          <li>
            <img src={Logo} alt="logo-site" />
          </li>
        </div>
        <div className="nav">
          <li>
            <a href="">Apresentação</a>
          </li>
          <li>
            <a href="">Comitês</a>
          </li>
          <li>
            <a href="">Autores</a>
          </li>
          <li>
            <a href="">Eixos temáticos</a>
          </li>
          <li className="efeito">
            <a href="">Trabalhos</a>
          </li>
          <li>
            <a href="">Contato</a>
          </li>
        </div>
      </ul>
    </nav>
  );
}
