import React from "react";
import NewTopCard from "./NewTopCard";

const NewTop = (props) => {
  return (
    <div className=" bk-naranja">
      {props.noticiasRelevantes.map((noticia, i) => (
        <NewTopCard
          key={noticia._id}
          titulo={noticia.titulo}
          imagen={noticia.url}
          noticia={noticia}
        ></NewTopCard>
      ))}
    </div>
  );
};

export default NewTop;
