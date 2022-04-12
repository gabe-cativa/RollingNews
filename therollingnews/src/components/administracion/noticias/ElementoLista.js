import React from "react";
import Button from "react-bootstrap/Button";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheckCircle } from "@fortawesome/free-regular-svg-icons";
import { faEdit } from "@fortawesome/free-regular-svg-icons";
import { faTrashAlt } from "@fortawesome/free-regular-svg-icons";
import Swal from "sweetalert2";
import { Link } from "react-router-dom";

const ElementoLista = (props) => {
  const eliminarNotica = (id) => {
    Swal.fire({
      title: "Estás seguro?",
      text: "La noticia no se podrá recuperar",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Sí, eliminar!",
      cancelButtonText: "Cancelar",
    }).then(async (result) => {
      if (result.value) {
        try {
          const respuesta = await fetch(
            `https://the-rolling-new.herokuapp.com/api/theRollingNew/Administracion/Noticia/${id}`,
            {
              method: "DELETE",
              headers: {
                "Content-Type": "application/json",
              },
            }
          );

          if (respuesta.status === 200) {
            props.setRecargarNoticias(true);
            Swal.fire("Listo!", "La noticia ha sido eliminada", "success");
          }
        } catch (error) {
          Swal.fire({
            icon: "error",
            title: "Oops...",
            text: "Ocurrió un error!",
            footer: "<p>No se pudo eliminar la noticia</p>",
          });
        }
      }
    });
  };

  const destacarNoticia = async (id) => {
    if (props.noticia.destacado === false) {
      props.noticia.destacado = true;
    } else {
      props.noticia.destacado = false;
    }

    const noticiaDest = {
      titulo: props.noticia.titulo,
      url: props.noticia.url,
      detalleCorto: props.noticia.detalleCorto,
      detalle: props.noticia.detalle,
      categoria: props.noticia.categoria,
      autor: props.noticia.autor,
      fecha: props.noticia.fecha,
      destacado: props.noticia.destacado,
    };

    try {
      const respuesta = await fetch(
        `https://the-rolling-new.herokuapp.com/api/theRollingNew/Administracion/Noticia/${props.noticia._id}`,
        {
          method: "PUT",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(noticiaDest),
        }
      );

      if (respuesta.status === 200) {
        props.setRecargarNoticias(true);
        Swal.fire("Listo!", "Se cambió el estado destacado", "success");
      }
    } catch (error) {
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: "Ocurrió un error!",
        footer: "<p>No se pudo eliminar la noticia</p>",
      });
    }
  };

  return (
    <tr>
      <td>{props.noticia.titulo}</td>
      <td>{props.noticia.categoria}</td>
      <td>
        <Button
          variant="outline-warning"
          size="sm"
          className="mx-1 destacar"
          onClick={() => destacarNoticia(props.noticia.id)}
        >
          <FontAwesomeIcon icon={faCheckCircle} size="2x"></FontAwesomeIcon>
        </Button>
        <Link
          to={`/Administracion/Noticia/${props.noticia._id}`}
          className="btn btn-outline-primary mx-1 editar"
        >
          <FontAwesomeIcon icon={faEdit} size="2x"></FontAwesomeIcon>
        </Link>
        <Button
          variant="outline-danger"
          size="sm"
          className="mx-1 eliminar"
          onClick={() => eliminarNotica(props.noticia._id)}
        >
          <FontAwesomeIcon icon={faTrashAlt} size="2x"></FontAwesomeIcon>
        </Button>
      </td>
    </tr>
  );
};

export default ElementoLista;
