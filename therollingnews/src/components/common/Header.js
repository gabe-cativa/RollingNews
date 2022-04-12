import React, { useState } from "react";
import { Navbar, Nav, Form, Button, Col, Row } from "react-bootstrap";
import { Link, NavLink, useHistory } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faUser,
  faCaretDown,
  faSearch,
} from "@fortawesome/free-solid-svg-icons";
import SeccionesHeader from "../principal/SeccionesHeader";
import Modal from "react-bootstrap/Modal";
import Swal from "sweetalert2";
import Dropdown from "react-bootstrap/Dropdown";

const Header = (props) => {
  const [seccionVisible, setSeccionVisible] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const [nombre, setnombreSuscriptor] = useState("");
  const [apellido, setapellidoSuscriptor] = useState("");
  const [direccion, setdireccionSuscriptor] = useState("");
  const [localidad, setlocalidadSuscriptor] = useState("");
  const [codPostal, setcodigoPostalSuscriptor] = useState("");
  const [telefono, settelefonoSuscriptor] = useState("");
  const [correo, setemailSuscriptor] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    const nuevoSuscriptor = {
      nombre,
      apellido,
      direccion,
      localidad,
      codPostal,
      telefono,
      correo,
    };

    const requestInfo = {
      method: "POST",
      body: JSON.stringify(nuevoSuscriptor),
      headers: new Headers({
        "Content-Type": "application/json",
      }),
    };

    fetch(
      "https://the-rolling-new.herokuapp.com/api/theRollingNew/Suscripcion",
      requestInfo
    )
      .then((res) => res.json())
      .then((resp) => {
        if (resp.mensaje === "Suscripcion almacenada con exito") {
          Swal.fire(
            "Datos enviados correctamente",
            "Próximamente nos pondremos en contacto con vos para terminar tu suscripción",
            "success"
          );
        }
      })
      .catch(console.warn);
  };
  let history = useHistory();
  const handleSubmitSearch = (e) => {
    e.preventDefault();
    if (searchTerm !== "") {
      const upperTerm = searchTerm[0].toUpperCase() + searchTerm.slice(1);
      history.push(`/Categoria/${upperTerm}`);
      setSearchTerm("");
    }
  };
  const handleChange = (event) => {
    setSearchTerm(event.target.value);
  };
  return (
    <Navbar variant="dark" bg="dark" className="azul" expand="lg">
      <Navbar.Brand>
        <NavLink to="/">
          <img
            src={process.env.PUBLIC_URL + "/logo.png"}
            alt="logo"
            className="logo"
          />
        </NavLink>
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <div className="subnav">
          <Nav className="mr-auto">
            {props.sesion.usuario !== "Ingresar" ? (
              <Dropdown>
                <Dropdown.Toggle
                  variant="primary"
                  className="btn-nav mr-3 text-white amarillo"
                >
                  {props.sesion.usuario}
                </Dropdown.Toggle>
                <Dropdown.Menu className="amarillo">
                  <Dropdown.Item>
                    <Link
                      to="/administracion/Administrar"
                      className="text-light"
                    >
                      Administración
                    </Link>
                  </Dropdown.Item>
                  <Dropdown.Divider />
                  <Dropdown.Item
                    href="/"
                    onClick={() => props.setSesion({ usuario: "Ingresar" })}
                    className="text-light"
                  >
                    Cerrar sesión
                  </Dropdown.Item>
                </Dropdown.Menu>
              </Dropdown>
            ) : (
              <NavLink
                to="/login/ingresar"
                className="nav-link mr-3"
                activeClassName="active"
              >
                {" "}
                <FontAwesomeIcon key="15" icon={faUser} />{" "}
                {props.sesion.usuario}
              </NavLink>
            )}

            <Button
              className="nav-Link warning text-white"
              onClick={handleShow}
              variant="warning"
            >
              Suscribirse
            </Button>
          </Nav>
        </div>
        <Nav className="ml-auto subnav">
          <NavLink to="/" className="nav-link " activeClassName="active">
            Home
          </NavLink>
          <div className="subnav justify-content-center">
            <Nav.Link
              className="nav-link "
              onClick={() => setSeccionVisible(!seccionVisible)}
            >
              Secciones
              <FontAwesomeIcon icon={faCaretDown} />
            </Nav.Link>
            {seccionVisible && (
              <SeccionesHeader
                setSeccionVisible={setSeccionVisible}
                seccionVisible={seccionVisible}
                categorias={props.categorias}
              ></SeccionesHeader>
            )}
          </div>
        </Nav>
        <Form className="form-inline" onSubmit={handleSubmitSearch}>
          <div className="">
            <input
              type="text"
              placeholder=" Buscar por Secciones"
              onChange={handleChange}
              value={searchTerm}
              className="btn-sm form-control"
            />
            <Button className="btn-ms bg-transparent" type="submit">
              <FontAwesomeIcon icon={faSearch} />
            </Button>
          </div>
        </Form>
        <Form className="">
          <Modal animation={false} show={show} onHide={handleClose}>
            <Modal.Header closeButton>
              <Modal.Title className="text-center">Suscribite</Modal.Title>
            </Modal.Header>
            <Modal.Body>
              <div>
                <Form.Label className="lead font-weight-bold text-warning">
                  Datos personales
                </Form.Label>
                <Form onSubmit={handleSubmit}>
                  <Row className="mb-3">
                    <Col>
                      <Form.Control
                        placeholder="Nombre"
                        onChange={(e) => setnombreSuscriptor(e.target.value)}
                      />
                    </Col>
                    <Col>
                      <Form.Control
                        placeholder="Apellido"
                        onChange={(e) => setapellidoSuscriptor(e.target.value)}
                      />
                    </Col>
                  </Row>
                  <Form.Control
                    type="text"
                    placeholder="Direccion"
                    onChange={(e) => setdireccionSuscriptor(e.target.value)}
                  />
                  <br />
                  <Form.Control
                    type="text"
                    placeholder="Localidad"
                    onChange={(e) => setlocalidadSuscriptor(e.target.value)}
                  />
                  <br />
                  <Form.Control
                    type="number"
                    placeholder="Codigo postal"
                    onChange={(e) => setcodigoPostalSuscriptor(e.target.value)}
                  />
                  <br />
                  <Form.Control
                    type="number"
                    placeholder="Telefono"
                    onChange={(e) => settelefonoSuscriptor(e.target.value)}
                  />
                  <br />
                  <Form.Group>
                    <Form.Label className="lead font-weight-bold text-warning">
                      Email
                    </Form.Label>
                    <Form.Control
                      type="email"
                      placeholder="direccion@correo.com"
                      onChange={(e) => setemailSuscriptor(e.target.value)}
                    />
                  </Form.Group>
                  <Button
                    variant="warning"
                    className="text-white"
                    onClick={handleSubmit}
                    type="submit"
                  >
                    Guardar
                  </Button>
                </Form>
              </div>
            </Modal.Body>
          </Modal>
        </Form>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default Header;
