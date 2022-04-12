import React from "react";
import Button from "react-bootstrap/Button";
import ListGroup from "react-bootstrap/ListGroup";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEdit } from "@fortawesome/free-regular-svg-icons";
import { faTrashAlt } from "@fortawesome/free-regular-svg-icons";
import Swal from "sweetalert2";
import { Link } from "react-router-dom";

const ElementoListUsu = (props) => {
  const eliminarUsuario = (id) => {
    Swal.fire({
      title: "Estás seguro?",
      text: `El usuario ${props.usuario.usuario} no se podrá recuperar.`,
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Sí, eliminar!",
      cancelButtonText: "Cancelar",
    }).then(async (result) => {
      if (result.value) {
        try {
          const respuestaU = await fetch(
            `https://the-rolling-new.herokuapp.com/api/theRollingNew/Administracion/Usuario/${id}`,

            {
              method: "DELETE",
              headers: {
                "Content-Type": "application/json",
              },
            }
          );

          if (respuestaU.status === 200) {
            props.setRecargarUsuarios(true);
            Swal.fire("Listo!", "El usuario ha sido eliminado", "success");
          }
        } catch (error) {
          Swal.fire({
            icon: "error",
            title: "Oops...",
            text: "Ocurrió un error!",
            footer: "<p>No se pudo eliminar el usuario</p>",
          });
        }
      }
    });
  };
  return (
    <ListGroup.Item className="d-flex align-items-center">
      <p className="pt-3">
        <span className="font-weight-bold">{props.usuario.usuario} </span>
        {props.usuario.correo}
      </p>
      <Link
        to={`/Administracion/Usuario/${props.usuario._id}`}
        className="btn btn-outline-primary mx-1 editar ml-auto"
      >
        <FontAwesomeIcon icon={faEdit} size="2x"></FontAwesomeIcon>
      </Link>
      <Button
        variant="outline-danger"
        size="sm"
        className="mx-1 eliminar"
        onClick={() => eliminarUsuario(props.usuario._id)}
      >
        <FontAwesomeIcon icon={faTrashAlt} size="2x"></FontAwesomeIcon>
      </Button>
    </ListGroup.Item>
  );
};

export default ElementoListUsu;
