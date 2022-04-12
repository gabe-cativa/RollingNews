import React from "react";
import Categories from "./Categories";
import Destacadas from "./Destacadas";
import BannerCovid from "./BannerCovid";
import Publicidad from "./Publicidad";

const Inicio = (props) => {
  return (
    <div className="container">
      <section className="row my-5">
        {props.destacadas.map((destacada) => (
          <Destacadas
            key={destacada._id}
            id={destacada._id}
            categoria={destacada.categoria}
            titulo={destacada.titulo}
            imagen={destacada.url}
            detalleCorto={destacada.detalleCorto}
            categorias={props.categorias}
          ></Destacadas>
        ))}
      </section>
      <section className="">
        <BannerCovid></BannerCovid>
      </section>
      <aside className="publicidad  py-2 mt-2 ">
        <Publicidad></Publicidad>
      </aside>

      <Categories categorias={props.categorias}></Categories>
    </div>
  );
};

export default Inicio;
