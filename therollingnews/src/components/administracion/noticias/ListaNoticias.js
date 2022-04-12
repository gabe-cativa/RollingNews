import React from "react";
import { Link } from "react-router-dom";
import Table from "react-bootstrap/Table";
import ElementoLista from "./ElementoLista";
import "../style/admin.css";
import { Button } from "react-bootstrap";

const ListaNoticias = (props) => {
  return (
    <section className="container my-5 ">
      <div>
        <h1 className="text-center  ">Lista de Noticias</h1>
        <Button
          type="button "
          variant="primary"
          className="azul text-white py-2 mb-3  ml-auto rounded"
        >
          {" "}
          <Link to="/Administracion/Noticia" className="text-white">
            Agregar Noticia
          </Link>
        </Button>

        <Table striped bordered hover>
          <thead>
            <tr>
              <th>Título</th>
              <th>Categoría</th>
              <th>Acciones</th>
            </tr>
          </thead>
          <tbody>
            {props.noticias.map((noticia) => (
              <ElementoLista
                key={noticia._id}
                noticia={noticia}
                setRecargarNoticias={props.setRecargarNoticias}
              ></ElementoLista>
            ))}
          </tbody>
        </Table>
      </div>
    </section>
  );
};

export default ListaNoticias;
