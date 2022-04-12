import React from "react";
import ListGroup from "react-bootstrap/ListGroup";
import "../style/admin.css";
import ElementoListUsu from "./ElementoListUsu";

const ListadoUsuarios = (props) => {
  return (
    <section className="container my-5">
      <div>
        <h1 className="text-center  ">Lista de Usuarios</h1>
        <ListGroup>
          {props.usuario.map((usuario) => (
            <ElementoListUsu
              key={usuario._id}
              usuario={usuario}
              setRecargarUsuarios={props.setRecargarUsuarios}
            ></ElementoListUsu>
          ))}
        </ListGroup>
      </div>
    </section>
  );
};

export default ListadoUsuarios;
