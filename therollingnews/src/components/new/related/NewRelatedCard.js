import React from "react";
import { Card } from "react-bootstrap";
import { Link } from "react-router-dom";

const NewRelatedCard = (props) => {
  return (
    <div className="cardNew-container ">
      <Link to={`/${props.noticia.categoria}/nota/${props.noticia._id}`}>
        <Card
          style={{ width: "21rem" }}
          className="mr-2 .newDetail-relatedCard"
        >
          <Card.Img
            variant="top"
            src={props.noticia.url}
            className="cardNew-img"
          />
          <Card.Body>
            <Card.Title className="font-weight-bolder type-Future">
              {props.noticia.titulo}
            </Card.Title>
          </Card.Body>
        </Card>
      </Link>
    </div>
  );
};

export default NewRelatedCard;
