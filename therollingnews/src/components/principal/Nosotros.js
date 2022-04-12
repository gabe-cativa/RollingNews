import React from "react";
import { Button, Card } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLinkedin } from "@fortawesome/free-brands-svg-icons";
import "./style/publicidad.css";

const Nosotros = () => {
  return (
    <div className="container ">
      <h1 className="disply-4 ">Acerca de Nosotros </h1>
      <section className="containernos d-flex justify-content-center ">
        <div className="row d-flex justify-content-center mt-3">
          <div className="col-lg-3 col-md-6 text-center mb-3">
            <Card className="card bg-light text-center">
              <div>
                <img
                  src={process.env.PUBLIC_URL + "/foto/jose.png"}   
                  alt="Jose Lopez"
                  className="rounded-circle efectoimg py-4"
                  width="100px"
                  height="150px"
                />
              </div>
              <Card.Body className="card-body  bg-dark text-white">
                <Card.Title>José López</Card.Title>
                <Card.Text>Developer.</Card.Text>
                <Button
                  variant="primary"
                  className="azul rounded-circle"
                  type="button"
                  href="/error404/Error404"
                >
                  <FontAwesomeIcon icon={faLinkedin} />
                </Button>
              </Card.Body>
            </Card>
          </div>

          <div className="col-lg-3 col-md-6 text-center mb-3">
            <Card className="card bg-light text-center">
              <div>
                <img
                  src={process.env.PUBLIC_URL + "/foto/nico.png"}
                  alt="Nicolas Bertini Arganaraz"
                  className="rounded-circle efectoimg py-4"
                  width="100px"
                  height="150px"
                />
              </div>
              <Card.Body className="card-body  bg-dark text-white">
                <Card.Title>Nicolás Bertini</Card.Title>
                <Card.Text>Developer.</Card.Text>
                <Button
                  variant="primary"
                  className="azul rounded-circle"
                  type="button"
                  href="/error404/Error404"
                >
                  <FontAwesomeIcon icon={faLinkedin} />
                </Button>
              </Card.Body>
            </Card>
          </div>
          <div className="col-lg-3 col-md-6 text-center mb-3">
            <Card className="card bg-light text-center">
              <div>
                <img
                  src={process.env.PUBLIC_URL + "/foto/ro.png"}
                  alt="Rosario Serrano"
                  className="rounded-circle efectoimg py-4"
                  width="100px"
                  height="150px"
                />
              </div>
              <Card.Body className="card-body  bg-dark text-white">
                <Card.Title>Rosario Serrano</Card.Title>
                <Card.Text>Developer.</Card.Text>
                <Button
                  variant="primary"
                  className="azul rounded-circle"
                  type="button"
                  href="/error404/Error404"
                >
                  <FontAwesomeIcon icon={faLinkedin} />
                </Button>
              </Card.Body>
            </Card>
          </div>
          <div className="col-lg-3 col-md-6 text-center mb-3">
            <Card className="card bg-light text-center">
              <div>
                <img
                  src={process.env.PUBLIC_URL + "/foto/Maury.png"}
                  alt=" Mauricio Castro"
                  className="rounded-circle efectoimg py-4"
                  width="100px"
                  height="150px"
                />
              </div>
              <Card.Body className="card-body  bg-dark text-white">
                <Card.Title>Mauricio Castro</Card.Title>
                <Card.Text>Developer.</Card.Text>
                <Button
                  variant="primary"
                  className="azul rounded-circle"
                  type="button"
                  href="/error404/Error404"
                >
                  <FontAwesomeIcon icon={faLinkedin} />
                </Button>
              </Card.Body>
            </Card>
          </div>
          <div className="col-lg-3 col-md-6 text-center mb-3">
            <Card className="card bg-light text-center">
              <div>
                <img
                  src={process.env.PUBLIC_URL + "/foto/carlos.png"}
                  alt="Carlos Rodriguez"
                  className="rounded-circle efectoimg py-4"
                  width="100px"
                  height="150px"
                />
              </div>
              <Card.Body className="card-body  bg-dark text-white">
                <Card.Title>Carlos Rodríguez</Card.Title>
                <Card.Text>Developer.</Card.Text>
                <Button
                  variant="primary"
                  className="azul rounded-circle"
                  type="button"
                  href="/error404/Error404"
                >
                  <FontAwesomeIcon icon={faLinkedin} />
                </Button>
              </Card.Body>
            </Card>
          </div>
          <div className="col-lg-3 col-md-6 text-center mb-3">
            <Card className="card bg-light text-center">
              <div>
                <img
                  src={process.env.PUBLIC_URL + "/foto/pablo.png"}
                  alt=" Pablo Cativa"
                  className="rounded-circle efectoimg py-4"
                  width="100px"
                  height="150px"
                />
              </div>
              <Card.Body className="card-body  bg-dark text-white">
                <Card.Title>Pablo Cativa</Card.Title>
                <Card.Text>Developer.</Card.Text>
                <Button
                  variant="primary"
                  className="azul rounded-circle"
                  type="button"
                  href="/error404/Error404"
                >
                  <FontAwesomeIcon icon={faLinkedin} />
                </Button>
              </Card.Body>
            </Card>
          </div>
          <div className="col-lg-3 col-md-6 text-center mb-3">
            <Card className="card bg-light text-center">
              <div>
                <img
                  src={process.env.PUBLIC_URL + "/foto/luciano.png"}
                  alt=" Luciano Chipolina"
                  className="rounded-circle efectoimg py-4"
                  width="100px"
                  height="150px"
                />
              </div>
              <Card.Body className="card-body  bg-dark text-white">
                <Card.Title>Luciano Chipolina</Card.Title>
                <Card.Text>Developer.</Card.Text>
                <Button
                  variant="primary"
                  className="azul rounded-circle"
                  type="button"
                  href="/error404/Error404"
                >
                  <FontAwesomeIcon icon={faLinkedin} />
                </Button>
              </Card.Body>
            </Card>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Nosotros;
