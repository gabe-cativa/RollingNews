import React, { useState } from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import Alert from "react-bootstrap/Alert";
import Swal from "sweetalert2";
import "../style/admin.css";
import { withRouter } from "react-router-dom";

const AgregarCategoria = (props) => {
  const [nombreCat, setNombreCat] = useState("");
  const [descripcionCat, setDescripcionCat] = useState("");
  const [error, setError] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (nombreCat.trim() === "" || descripcionCat.trim() === "") {
      setError(true);
      return;
    }
    setError(false);

    const categoriaNueva = {
      nombre: nombreCat,
      descripcion: descripcionCat,
    };

    try {
      const resultado = await fetch(
        "https://the-rolling-new.herokuapp.com/api/theRollingNew/Administracion/Categoria",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(categoriaNueva),
        }
      );
      if (resultado.status === 201) {
        Swal.fire("Listo!", "La categoría se cargó correctamente", "success");
        props.setRecargarCategorias(true);
        props.history.push("/Administracion/Categorias");
      }
    } catch (error) {
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: "Ocurrió un error!",
        footer: "<p>No se pudo cargar la categoría.</p>",
      });
    }
  };

  return (
    <section className="container px-5">
      <h1 className="text-center my-4">Agregar nueva categoría</h1>
      <Form onSubmit={handleSubmit} className="mt-5 mb-3">
        <Form.Group>
          <Form.Label>Categoría</Form.Label>
          <Form.Control
            autoFocus
            type="text"
            placeholder="ingresar el nombre de la categoría"
            onChange={(e) => setNombreCat(e.target.value)}
          />
        </Form.Group>

        <Form.Group className="my-4">
          <Form.Label>Descripción</Form.Label>
          <Form.Control
            type="text"
            placeholder="una descripción breve de la categoría"
            onChange={(e) => setDescripcionCat(e.target.value)}
          />
        </Form.Group>
        {error ? (
          <Alert className="mt-4" variant={"danger"}>
            Se debe completar todos los campos
          </Alert>
        ) : null}
        <Button type="submit" className="w-100 my-4 boton">
          AGREGAR CATEGORIA
        </Button>
      </Form>
    </section>
  );
};

export default withRouter(AgregarCategoria);
