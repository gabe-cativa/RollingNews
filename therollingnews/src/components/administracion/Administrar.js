import React from "react";
import "./style/admin.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faNewspaper,
  faList,
  faUserCog,
  faPlusSquare,
} from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";
import { Button } from "react-bootstrap";

const Administrar = () => {
  return (
    <div className="container bg-dark-transparent d-flex justify-content-center py-3 mb-2">
      <div className="row shadow text-center  ">
        <div className=" col-md-6 col-sm-3 col-xs-12 text-center mb-3">
          <h3 className="text-center py-3 ">Bienvenido Administrador!</h3>
        </div>
        <hr />
        <div className="col-md-12 col-sm-12 mb-2 text-center">
          <Button
            size="lg"
            type="button"
            variant="primary"
            className="button azul m-1 py-1"
          >
            <Link to="/Administracion/Noticias" className=" text-white">
              <FontAwesomeIcon icon={faNewspaper} /> Administrar Noticias
            </Link>
          </Button>{" "}
          <Button
            size="lg"
            type="button"
            variant="primary"
            className="button azul m-1 py-1"
          >
            <Link to="/Administracion/Noticia" className=" text-white">
              <FontAwesomeIcon icon={faPlusSquare} /> Agregar Noticia
            </Link>
          </Button>{" "}
        </div>
        <br />
        <div className="col-md-12 col-sm-12 text-center mb-2">
          <Button
            variant="primary"
            size="lg"
            type="button"
            className="button azul m-1 py-1"
          >
            <Link to="/Administracion/Categorias" className=" text-white">
              <FontAwesomeIcon icon={faList} /> Administrar Categorias
            </Link>
          </Button>{" "}
          <Button
            variant="primary"
            size="lg"
            type="button"
            className="button azul m-1 py-1"
          >
            <Link to="/Administracion/Categoria" className=" text-white">
              <FontAwesomeIcon icon={faPlusSquare} /> Agregar Categoria
            </Link>
          </Button>{" "}
        </div>
        <br />
        <div className="col-sm-12  text-center ">
          <Button size="lg" variant="primary" className=" button azul m-1 py-1">
            <Link to="/administracion/Usuarios" className=" text-white">
              <FontAwesomeIcon icon={faUserCog} /> Administrar Usuarios
            </Link>
          </Button>{" "}
        </div>
      </div>
    </div>
  );
};

export default Administrar;
