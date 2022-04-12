import React, { useRef, useState } from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import Alert from "react-bootstrap/Alert";
import Swal from "sweetalert2";
import "../style/admin.css";
import { withRouter } from "react-router-dom";

const EditarCategoria = (props) => {
  const [error, setError] = useState(false);
  const nombreCatRef = useRef("");
  const descripcionCatRef = useRef("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (
      nombreCatRef.current.value.trim() === "" ||
      descripcionCatRef.current.value.trim() === ""
    ) {
      setError(true);
      return;
    }
    setError(false);

    const categoriaModificada = {
      nombre: nombreCatRef.current.value,
      descripcion: descripcionCatRef.current.value,
      nombreViejo: props.categoria.nombre,
    };
    try {
      const respuesta = await fetch(
        `https://the-rolling-new.herokuapp.com/api/theRollingNew/Administracion/Categoria/${props.categoria._id}`,
        {
          method: "PUT",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(categoriaModificada),
        }
      );

      if (respuesta.status === 200) {
        props.setRecargarCategorias(true);
        Swal.fire(
          "Listo!",
          "La categoría se modificó correctamente",
          "success"
        );
        props.history.push("/Administracion/Categorias");
      }
    } catch (error) {
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: "Ocurrió un error!",
        footer: "<p>No se pudo modificar la categoría.</p>",
      });
    }
  };

  return (
    <section className="container px-5">
      <h1 className="text-center my-4">Modificar categoría</h1>
      <Form onSubmit={handleSubmit} className="mt-5 mb-3">
        <Form.Group>
          <Form.Label>Categoría</Form.Label>
          <Form.Control
            type="text"
            placeholder="ingresar el nombre de la categoría"
            ref={nombreCatRef}
            defaultValue={props.categoria.nombre}
          />
        </Form.Group>

        <Form.Group className="my-4">
          <Form.Label>Descripción</Form.Label>
          <Form.Control
            type="text"
            placeholder="una descripción breve de la categoría"
            ref={descripcionCatRef}
            defaultValue={props.categoria.descripcion}
          />
        </Form.Group>
        {error ? (
          <Alert className="mt-4" variant={"danger"}>
            Se debe completar todos los campos
          </Alert>
        ) : null}
        <Button type="submit" className="w-100 my-4 boton">
          GUARDAR CAMBIOS
        </Button>
      </Form>
    </section>
  );
};

export default withRouter(EditarCategoria);
