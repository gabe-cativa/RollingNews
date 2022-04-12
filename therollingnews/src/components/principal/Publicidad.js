import React from "react";
import "./style/publicidad.css";

const Publicidad = () => {
  return (
    <div className="">
      <div className=" d-flex justify-content-center mt-3 mt-3  ">
        <div className="align-item">
          <img
            src={process.env.PUBLIC_URL + "/duff.gif"}
            alt="publicidad"
            width="150px"
            height="150px"
          />
        </div>
        <hr />
      </div>
      <div className=" d-flex justify-content-center mt-3  ">
        <div className="align-item">
          <img
            src={process.env.PUBLIC_URL + "/image.gif"}
            alt="publicidad"
            width="150px"
            height="150px"
          />
        </div>
        <hr />
      </div>
      <div className=" d-flex justify-content-center mt-3  ">
        <div className="align-item">
          <img
            src={process.env.PUBLIC_URL + "/boa.gif"}
            alt="publicidad"
            width="150px"
            height="150px"
          />
        </div>
        <hr />
      </div>
      <div className=" d-flex justify-content-center mt-3  ">
        <div className="align-item">
          <img
            src={process.env.PUBLIC_URL + "/images.jpg"}
            alt="publicidad"
            width="150px"
            height="150px"
          />
        </div>
        <hr />
      </div>
      <div className=" d-flex justify-content-center mt-3  ">
        <div className="align-item">
          <img
            src={process.env.PUBLIC_URL + "/coto.jpg"}
            alt="publicidad"
            width="150px"
            height="150px"
          />
        </div>
        <hr />
      </div>
    </div>
  );
};

export default Publicidad;
