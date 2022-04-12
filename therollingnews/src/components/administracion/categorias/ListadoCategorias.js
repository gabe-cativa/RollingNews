import React from "react";
import { Link } from "react-router-dom";
import ListGroup from "react-bootstrap/ListGroup";
import "../style/admin.css";
import ElementoListaCat from "./ElementoListaCat";
import { Button } from "react-bootstrap";

const ListadoCategorias = (props) => {
  return (
    <section className="container my-5">
      <div>
        <h1 className="text-center">Lista de Categorías</h1>
        <Button
          type="button "
          variant="primary"
          className="azul text-white py-2 mb-3  ml-auto rounded"
        >
          {" "}
          <Link to="/Administracion/Categoria" className="text-white">
            Agregar Categoria
          </Link>
        </Button>

        <ListGroup>
          {props.categorias.map((categoria) => (
            <ElementoListaCat
              key={categoria._id}
              categoria={categoria}
              setRecargarCategorias={props.setRecargarCategorias}
            ></ElementoListaCat>
          ))}
        </ListGroup>
      </div>
    </section>
  );
};

export default ListadoCategorias;
