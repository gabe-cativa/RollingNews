import React, { useState } from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGoogle } from "@fortawesome/free-brands-svg-icons";
import "./style/login.css";
import { Link, withRouter } from "react-router-dom";
import Swal from "sweetalert2";

const Ingresar = (props) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (password === "" || email === "") {
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: "Ocurrió un error!",
        footer: "<p>Email o contraseña incorrectas</p>",
      });
      return;
    } else {
      const usuarioBuscado = props.usuarios.find(
        (usuario) => usuario.correo === email
      );
      if (usuarioBuscado) {
        if (
          email === usuarioBuscado.correo &&
          password === usuarioBuscado.contrasenia
        ) {
          props.history.push("/Administracion/administrar/");
          props.sesion(usuarioBuscado);
          Swal.fire(`Bienvenido ${usuarioBuscado.nombre}!`, "", "success");
        }
      } else {
        Swal.fire({
          icon: "error",
          title: "Oops...",
          text: "Ocurrió un error!",
          footer: "<p>Email o contraseña incorrectas</p>",
        });
      }
    }
  };

  return (
    <div className="py-2 pb-5">
      <div className="fixed-bg d-none d-md-block d-lg-block">
        <img
          src="https://inmediaciones.org/wp-content/uploads/2019/10/smartphones.jpg"
          className="bglogin"
          alt="background login"
        ></img>
      </div>
      <div className="container">
        <div className="row">
          <Card className="border ml-auto col-sm-12 col-md-8 col-lg-6 mt-5">
            <Card.Body>
              <Card.Title className="mb-4 text-danger">Ingresar</Card.Title>

              <Form onSubmit={handleSubmit}>
                <Form.Group>
                  <Form.Control
                    type="email"
                    placeholder="Email"
                    name="email"
                    onChange={(e) => setEmail(e.target.value)}
                  />
                </Form.Group>
                <Form.Group className="my-4">
                  <Form.Control
                    type="password"
                    placeholder="Contraseña"
                    name="password"
                    onChange={(e) => setPassword(e.target.value)}
                  />
                </Form.Group>
                <Button
                  className="mb-3 text-white amarillo"
                  type="submit"
                  size="lg"
                  block
                >
                  Ingresar
                </Button>
                <Link className="text-secondary" to="error404/Error404">
                  ¿Necesitás ayuda?
                </Link>
                <Button
                  className="my-4 text-white rojo d-flex align-content-center justify-content-center"
                  size="lg"
                  block
                >
                  <Link to="error404/Error404" className=" text-white">
                    Ingresar con Google{" "}
                    <FontAwesomeIcon
                      className="mx-2 mt-1  text-white "
                      icon={faGoogle}
                      size="1x"
                    ></FontAwesomeIcon>
                  </Link>
                </Button>
              </Form>
              <hr></hr>

              <div className="mb-4">
                <Link className="text-danger" to="/login/registro">
                  Registrarme ahora
                </Link>
              </div>
            </Card.Body>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default withRouter(Ingresar);
