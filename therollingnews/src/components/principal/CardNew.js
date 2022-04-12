import React from "react";
import { Card } from "react-bootstrap";
import { Link } from "react-router-dom";

const CardNew = (props) => {
  return (
    <div className="cardNew-container">
      <Link to={`/${props.nombreCategoria}/nota/${props.noticia._id}`}>
        <Card style={{ width: "21rem" }} className="cardNew-card">
          <Card.Img
            variant="top"
            src={props.noticia.url}
            className="cardNew-img"
          />
          <Card.Body>
            <Card.Title className="font-weight-bolder type-Future">
              {props.noticia.titulo}
            </Card.Title>
            <Card.Text className="type-Future">
              {props.noticia.detalleCorto}
            </Card.Text>
          </Card.Body>
          <Card.Footer className="cardNew-cardFooter">
            <small className="text-muted">{props.noticia.fecha}</small>
          </Card.Footer>
        </Card>
      </Link>
    </div>
  );
};

export default CardNew;
