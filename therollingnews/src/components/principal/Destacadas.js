import React, { Fragment } from "react";
import Card from "react-bootstrap/Card";
import "./style/destacadas.css";
import { Link } from "react-router-dom";

const Destacadas = (props) => {
  return (
    <Fragment>
      <section className="col-md-4 col-sm-12">
        <Link to={`/${props.categoria}/nota/${props.id}`}>
          <Card
            style={{ height: "100%" }}
            className="shadow mb-5 bg-white rounded grow"
          >
            <Card.Img
              variant="top"
              src={props.imagen}
              alt={props.titulo}
              style={{ height: "193px" }}
            />
            <Card.Body className="row">
              <Card.Title className="px-2">{props.titulo}</Card.Title>
              <Card.Text className="px-2">{props.detalleCorto}</Card.Text>
            </Card.Body>
          </Card>
        </Link>
      </section>
    </Fragment>
  );
};

export default Destacadas;
