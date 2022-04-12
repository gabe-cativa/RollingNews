import React from "react";
import ListGroup from "react-bootstrap/ListGroup";
import { Link } from "react-router-dom";

const SeccionesHeader = (props) => {
  return (
    <div className="subnav-content d-flex justify-content-center shadow amarillo">
      <ListGroup className="d-flex flex-lg-row justify-content-between">
        {props.categorias.map((categoria) => (
          <ListGroup.Item
            key={categoria._id}
            className="list-group border-0 bg-transparent active"
          >
            <Link
              onClick={() => props.setSeccionVisible(!props.seccionVisible)}
              to={`/Categoria/${categoria.nombre}`}
              className="text-light "
            >
              {categoria.nombre}
            </Link>
          </ListGroup.Item>
        ))}
      </ListGroup>
    </div>
  );
};

export default SeccionesHeader;
