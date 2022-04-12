import React, { useState, useRef } from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import Alert from "react-bootstrap/Alert";
import "../style/admin.css";
import Swal from "sweetalert2";
import { withRouter } from "react-router-dom";

const EditarNoticia = (props) => {
  const [categoria, setCategoria] = useState("");
  const [error, setError] = useState(false);

  const tituloRef = useRef("");
  const imagenCabeceraRef = useRef("");
  const resumenRef = useRef("");
  const noticiaRef = useRef("");
  const autorRef = useRef("");
  const destacado = props.noticia.destacado;

  const seleccionarCategoria = (e) => {
    setCategoria(e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const _categoria = categoria === "" ? props.noticia.categoria : categoria;
    if (
      tituloRef.current.value.trim() === "" ||
      imagenCabeceraRef.current.value.trim() === "" ||
      resumenRef.current.value.trim() === "" ||
      noticiaRef.current.value.trim() === "" ||
      autorRef.current.value.trim() === "" ||
      _categoria === ""
    ) {
      setError(true);
      return;
    }
    setError(false);

    const fecha = new Date();
    const noticiaModificada = {
      titulo: tituloRef.current.value,
      url: imagenCabeceraRef.current.value,
      detalleCorto: resumenRef.current.value,
      detalle: noticiaRef.current.value,
      autor: autorRef.current.value,
      fecha: fecha,
      categoria: _categoria,
      destacado,
    };

    try {
      const respuesta = await fetch(
        `https://the-rolling-new.herokuapp.com/api/theRollingNew/Administracion/Noticia/${props.noticia._id}`,
        {
          method: "PUT",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(noticiaModificada),
        }
      );

      if (respuesta.status === 200) {
        props.setRecargarNoticias(true);
        Swal.fire("Listo!", "La noticia se modificó correctamente", "success");
        props.history.push("/Administracion/Noticias");
      }
    } catch (error) {
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: "Ocurrió un error!",
        footer: "<p>No se pudo modificar la noticia.</p>",
      });
    }
  };

  return (
    <section className="container">
      <Form onSubmit={handleSubmit}>
        <h1 className="text-center my-4">Modificar noticia</h1>
        <Form.Group>
          <Form.Label>Título de la nota</Form.Label>
          <Form.Control
            type="text"
            placeholder="Agregar el título de la nota"
            ref={tituloRef}
            defaultValue={props.noticia.titulo}
          />
        </Form.Group>
        <Form.Group>
          <Form.Label>Imagen de cabecera</Form.Label>
          <Form.Control
            type="text"
            placeholder="Agregar url de la imagen"
            ref={imagenCabeceraRef}
            defaultValue={props.noticia.url}
          />
        </Form.Group>
        <Form.Group>
          <Form.Label>Resumen</Form.Label>
          <Form.Control
            as="textarea"
            rows="3"
            placeholder="Agregar un extracto de la nota"
            ref={resumenRef}
            defaultValue={props.noticia.detalleCorto}
          />
        </Form.Group>
        <Form.Group>
          <Form.Label>Noticia</Form.Label>
          <Form.Control
            as="textarea"
            rows="10"
            placeholder="Agregar el cuerpo de la nota"
            ref={noticiaRef}
            defaultValue={props.noticia.detalle}
          />
        </Form.Group>
        <Form.Group>
          <Form.Label>Autor</Form.Label>
          <Form.Control
            type="text"
            placeholder="Agregar el nombre del autor de la nota"
            ref={autorRef}
            defaultValue={props.noticia.autor}
          />
        </Form.Group>
        <h3 className="text-center mt-4">Categoría</h3>
        <div className="my-3 text-center">
          {props.categorias.map((categoria) => (
            <Form.Check
              type="radio"
              label={categoria.nombre}
              value={categoria.nombre}
              name="categoria"
              inline
              className="mx-3"
              onChange={seleccionarCategoria}
              defaultChecked={props.noticia.categoria === `${categoria.nombre}`}
            />
          ))}
        </div>

        {error ? (
          <Alert className="mt-4" variant={"danger"}>
            Debes completar todos los campos
          </Alert>
        ) : null}
        <Button type="submit" className="w-100 mb-4 boton">
          GUARDAR CAMBIOS
        </Button>
      </Form>
    </section>
  );
};

export default withRouter(EditarNoticia);
