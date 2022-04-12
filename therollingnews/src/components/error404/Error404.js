import React from "react";
import { Card } from "react-bootstrap";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHome } from "@fortawesome/free-solid-svg-icons";

const Error404 = () => {
  return (
    <div className="container d-flex justify-content-center  my-5">
      <Card className="bg-dark text-white">
        <Card.Img
          src={process.env.PUBLIC_URL + "/error.png"}
          alt="pagina error"
        />
        <Card.ImgOverlay>
          <Card.Text>
            <Link
              type="button"
              variant="primary"
              className="azul text-white p-3 rounded"
              to="/"
            >
              <FontAwesomeIcon icon={faHome} /> Home
            </Link>
          </Card.Text>
        </Card.ImgOverlay>
      </Card>
    </div>
  );
};

export default Error404;
