import React from "react";
import NewContentHeader from "./NewContentHeader";
import { Card } from "react-bootstrap";

const NewContent = (props) => {
  return (
    <div className="col-9 pr-5 newDetail-container_new type-Future">
      <NewContentHeader
        titulo={props.noticia.titulo}
        categoria={props.noticia.categoria}
        fecha={props.noticia.fecha}
      ></NewContentHeader>
      <Card>
        <Card.Img
          variant="top"
          src={props.noticia.url}
          alt={`imagen de noticia ${props.noticia._id}`}
        />
        <Card.Body>
          <Card.Text>Nota desarrollada por: {props.noticia.autor}</Card.Text>
          <Card.Text className="type-Future">{props.noticia.detalle}</Card.Text>
        </Card.Body>
      </Card>
    </div>
  );
};

export default NewContent;
