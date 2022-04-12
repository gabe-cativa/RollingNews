import React, { useRef, useState } from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import Alert from "react-bootstrap/Alert";
import Swal from "sweetalert2";
import "../style/admin.css";
import { withRouter } from "react-router-dom";

const EditarUsuarios = (props) => {
  const [error, setError] = useState(false);
  const nombreRef = useRef("");
  const apellidoRef = useRef("");
  const direccionRef = useRef("");
  const localidadRef = useRef("");
  const codPostalRef = useRef("");
  const telefonoRef = useRef("");
  const correoRef = useRef("");
  const perfilRef = useRef("");
  const usuarioRef = useRef("");
  const contraseniaRef = useRef("");
  const estadoRef = useRef("");
  const handleSubmit = async (e) => {
    e.preventDefault();

    if (
      nombreRef.current.value.trim() === "" ||
      apellidoRef.current.value.trim() === "" ||
      direccionRef.current.value.trim() === "" ||
      localidadRef.current.value.trim() === "" ||
      codPostalRef.current.value.trim() === "" ||
      telefonoRef.current.value.trim() === "" ||
      correoRef.current.value.trim() === "" ||
      perfilRef.current.value.trim() === "" ||
      usuarioRef.current.value.trim() === "" ||
      contraseniaRef.current.value.trim() === "" ||
      estadoRef.current.value.trim() === ""
    ) {
      setError(true);
      return;
    }
    setError(false);

    const usuarioModificado = {
      nombre: nombreRef.current.value,
      apellido: apellidoRef.current.value,
      direccion: direccionRef.current.value,
      localidad: localidadRef.current.value,
      codPostal: codPostalRef.current.value,
      telefono: telefonoRef.current.value,
      correo: correoRef.current.value,
      perfil: perfilRef.current.value,
      usuario: usuarioRef.current.value,
      contrasenia: contraseniaRef.current.value,
      estado: estadoRef.current.value,
    };

    try {
      const respuestaU = await fetch(
        `https://the-rolling-new.herokuapp.com/api/theRollingNew/Administracion/Usuario/${props.usuario._id}`,
        {
          method: "PUT",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(usuarioModificado),
        }
      );

      if (respuestaU.status === 200) {
        props.setRecargarUsuarios(true);
        Swal.fire("Listo!", "El usuario se modificó correctamente", "success");
        props.history.push("/Administracion/Usuarios");
      }
    } catch (error) {
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: "Ocurrió un error!",
        footer: "<p>No se pudo modificar el usuario.</p>",
      });
    }
  };

  return (
    <section className="container px-5">
      <h1 className="text-center my-4">Modificar Usuario</h1>
      <Form onSubmit={handleSubmit} className="mt-5 mb-3">
        <Form.Group>
          <Form.Label>Nombre</Form.Label>
          <Form.Control
            type="text"
            placeholder="Ingresar el nombre del Usuario"
            ref={nombreRef}
            defaultValue={props.usuario.nombre}
          />
        </Form.Group>

        <Form.Group className="my-4">
          <Form.Label>Apellido</Form.Label>
          <Form.Control
            type="text"
            placeholder="Ingresar el apellido del Usuario"
            ref={apellidoRef}
            defaultValue={props.usuario.apellido}
          />
        </Form.Group>
        <Form.Group className="my-4">
          <Form.Label>Dirección</Form.Label>
          <Form.Control
            type="text"
            placeholder="Ingresar direccion del Usuario"
            ref={direccionRef}
            defaultValue={props.usuario.direccion}
          />
        </Form.Group>
        <Form.Group className="my-4">
          <Form.Label>Localidad</Form.Label>
          <Form.Control
            type="text"
            placeholder="Ingresar localidad del Usuario"
            ref={localidadRef}
            defaultValue={props.usuario.localidad}
          />
        </Form.Group>
        <Form.Group className="my-4">
          <Form.Label>Codigo Postal</Form.Label>
          <Form.Control
            type="text"
            placeholder="Ingresar Codigo Postal del Usuario"
            ref={codPostalRef}
            defaultValue={props.usuario.codPostal}
          />
        </Form.Group>
        <Form.Group className="my-4">
          <Form.Label>Telefono</Form.Label>
          <Form.Control
            type="text"
            placeholder="Ingresar Telefono del Usuario"
            ref={telefonoRef}
            defaultValue={props.usuario.telefono}
          />
        </Form.Group>
        <Form.Group className="my-4">
          <Form.Label>Correo</Form.Label>
          <Form.Control
            type="email"
            placeholder="Ingresar Email del Usuario"
            ref={correoRef}
            defaultValue={props.usuario.correo}
          />
        </Form.Group>
        <Form.Group className="my-4">
          <Form.Label>Perfil</Form.Label>
          <Form.Control
            type="text"
            placeholder="Ingresar perfil del Usuario"
            ref={perfilRef}
            defaultValue={props.usuario.perfil}
          />
        </Form.Group>
        <Form.Group className="my-4">
          <Form.Label>Usuario</Form.Label>
          <Form.Control
            type="text"
            placeholder="Ingresar usuario "
            ref={usuarioRef}
            defaultValue={props.usuario.usuario}
          />
        </Form.Group>
        <Form.Group className="my-4">
          <Form.Label>Contraseña</Form.Label>
          <Form.Control
            type="password"
            placeholder="Ingresar contraseña del usuario"
            ref={contraseniaRef}
            defaultValue={props.usuario.contrasenia}
          />
        </Form.Group>
        <Form.Group className="my-4">
          <Form.Label>Contraseña</Form.Label>
          <Form.Control
            type="password"
            placeholder="Ingresar nuevamente la contraseña del Usuario"
            ref={contraseniaRef}
            defaultValue={props.usuario.contrasenia}
          />
        </Form.Group>
        <Form.Group className="my-4">
          <Form.Label>Estado</Form.Label>
          <Form.Control
            type="text"
            placeholder="Ingresar estado del Usuario"
            ref={estadoRef}
            defaultValue={props.usuario.estado}
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

export default withRouter(EditarUsuarios);
