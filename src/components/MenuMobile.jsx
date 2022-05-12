import { ItemLi } from "./Sidebar";

export function MenuMobile() {
  return (
    <>
      <nav class="navbar navbar-expand-lg navbar-light bg-light nav-bg">
        <ItemLi name="slaca 2019" className="titulo font-3-m-b" />
        <i
          class="navbar-toggler header__button material-icons"
          type="button"
          data-toggle="collapse"
          data-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
          id="btnNav"
        >
          menu
        </i>

        <div class="collapse navbar-collapse" id="navbarNav">
          <ul class="navbar-nav">
            <li class="nav-item active">
              <a class="nav-link" aria-disabled="true">
                Apresentação <span class="sr-only">(current)</span>
              </a>
            </li>

            <li class="nav-item">
              <a class="nav-link" href="./">
                Comitês
              </a>
            </li>

            <li class="nav-item">
              <a class="nav-link" href="./">
                Autores
              </a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="./">
                Eixo temático
              </a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="./">
                Trabalhos
              </a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="./">
                Contato
              </a>
            </li>
          </ul>
        </div>
      </nav>
    </>
  );
}
