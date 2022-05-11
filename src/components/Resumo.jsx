import React, { useState } from "react";

export function Resumo() {
  const [isShow, setIsShow] = useState(false);
  function handleToggleShow() {
    setIsShow(!isShow);
  }

  return (
    <div
      className="main-container mt-3 resumo pointer"
      onClick={handleToggleShow}
    >
      <h3 className="h3titulo sombra">Resumo</h3>

      <span className=" tipografia sombra ">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus vitae
        turpis auctor, mollis felis ut, commodo turpis. Phasellus felis mauris,
        egestas eget cursus et, iaculis quis lacus. Fusce auctor eros sed magna
        ultricies gravida. Etiam aliquam dictum nisl, vel aliquet enim accumsan
        sit amet. Donec finibus nisi tellus, ut viverra lorem vestibulum ut.
        Phasellus condimentum orci id leo condimentum lobortis et non lorem. Sed
        id nisl metus. Quisque sollicitudin ligula in sapien scelerisque, ac
        gravida eros vestibulum Phasellus condimentum orci id leo condimentum
        lobortis et non lorem. Sed id nisl metus. Quisque sollicitudin ligula in
        sapien scelerisque, ac gravida eros vestibulum. Etiam aliquam dictum
        nisl, vel aliquet enim accumsan sit ametl accumsant...
        {!isShow && (
          <>
            <span className="toggleShow"> ver mais</span>
          </>
        )}
        {isShow && (
          <>
            <div className="anime">
              <br />
              <br />
              pulvinar, pharetra libero non, ornare enim. Etiam in laoreet odio.
              Nam eget tristique elit, at fermentum tellus. Mauris scelerisque
              ligula id eleifend feugiat. Donec eleifend vehicula sem nec
              dapibus. Integer scelerisque neque dui, in lacinia erat molestie
              eu. Phasellus maximus dui eget lacus porta tempor. Ut ex nibh,
              dignissim quis purus semper, efficitur facilisis turpis. Praesent
              blandit elementum ultricies.
              <br />
              <br />
              Aliquam sit amet enim sit amet nulla pulvinar lobortis consectetur
              non odio. Phasellus at lacus hendrerit, vulputate nisi sit amet,
              viverra mauris. Etiam eu scelerisque orci. Quisque sagittis, mi
              vitae pharetra iaculis, orci elit eleifend massa, eu posuere
              mauris odio id odio. Morbi eu libero luctus, consectetur lorem
              vel, interdum sapien. Aenean in porta arcu. Maecenas eu maximus
              massa. Praesent velit dolor, dignissim sed quam ac, efficitur
              porta justo. Pellentesque porta pharetra felis ut hendrerit. Nulla
              facilisi. Aliquam erat volutpat. Nunc sit amet faucibus quam.
              Maecenas dapibus luctus dolor at viverra. Duis nec fringilla
              libero. Duis risus nibh, viverra ac orci nec, iaculis dictum sem.
              Aliquam at malesuada arcu. Aliquam erat volutpat. Donec varius
              ipsum purus, ut vehicula purus placerat vitae. Lorem ipsum dolor
              sit amet, consectetur adipiscing elit.
            </div>
          </>
        )}
      </span>
    </div>
  );
}
