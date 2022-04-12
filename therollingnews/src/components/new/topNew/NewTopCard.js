import React from "react";
import { Card } from "react-bootstrap";
import { Link } from "react-router-dom";

const NewTopCard = (props) => {
  return (
    <div className="mt-4 ">
      <Link to={`/${props.noticia.categoria}/nota/${props.noticia._id}`}>
        <div className="">
          <Card.Img src={props.imagen} className="cardNew-img" />
          <Card.Title className="p-1 font-weight-bold">
            {props.titulo}
          </Card.Title>
        </div>
      </Link>
    </div>
  );
};

export default NewTopCard;
