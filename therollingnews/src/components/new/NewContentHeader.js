import React from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebookSquare,
  faInstagramSquare,
  faTwitterSquare,
} from "@fortawesome/free-brands-svg-icons";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";

const NewContentHeader = (props) => {
  return (
    <div className="mt-2">
      <h5 className="card-text type-Future">
        <small className="text-muted">
          BreadCurm - <Link to={"/"}>Home</Link> -
          <Link to="/{props.categoria}">{props.categoria}</Link>
        </small>
      </h5>{" "}
      <h1 className="type-Future font-weight-bolder">{props.titulo}</h1>
      <div className="d-flex justify-content-between">
        <p className="card-text type-Future">
          <small className="text-muted">{props.fecha}</small>
        </p>
        <div>
          <Link variant="light" to={`/error`} className="mr-1">
            <FontAwesomeIcon
              icon={faFacebookSquare}
              size="2x"
            ></FontAwesomeIcon>
          </Link>
          <Link variant="light" to={`/error`} className="mr-1">
            <FontAwesomeIcon
              icon={faInstagramSquare}
              size="2x"
            ></FontAwesomeIcon>
          </Link>
          <Link variant="light" to={`/error`} className="mr-1">
            <FontAwesomeIcon icon={faTwitterSquare} size="2x"></FontAwesomeIcon>
          </Link>
          <Link variant="light" to={`/error`} className="mr-1">
            <FontAwesomeIcon icon={faEnvelope} size="2x"></FontAwesomeIcon>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default NewContentHeader;
