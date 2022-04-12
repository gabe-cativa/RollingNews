import React, { useState, useEffect } from "react";
import Tiempo from "../Apiclima/Tiempo";
import "./Moneda.css";

const Precio = () => {
  const [precio, setprecio] = useState([]);

  useEffect(() => {
    consultarDolar();
    setInterval(consultarDolar, 900000);
  }, []);

  const consultarDolar = async () => {
    const respuesta = await fetch("https://dolarapi.casalox.com/api/v1/dolar");

    const data = await respuesta.json();
    setprecio(data);
  };
  return (
    <div className="d-flex container-fluid justify-content-center shadow amarillo text-white">
      <section className="row w-75 d-flex justify-content-around">
        <div className="d-flex align-items-center col-sm-6 col-md-6 col-lg-3 d-flex justify-content-center">
          <small>
            <strong>Dolar</strong>: {precio[0] && precio[0].sellPrice}/
            {precio[0] && precio[0].buyPrice}
          </small>
        </div>

        <div className="d-flex align-items-center col-sm-6 col-md-6 col-lg-3 d-flex justify-content-center">
          <small>
            <strong>Blue</strong>: {precio[1] && precio[1].sellPrice}/
            {precio[1] && precio[1].buyPrice}
          </small>
        </div>

        <div className="d-flex align-items-center col-sm-6 col-md-6 col-lg-3 d-flex justify-content-center">
          <small>
            <strong>Real</strong>: {precio[6] && precio[6].sellPrice}/
            {precio[6] && precio[6].buyPrice}
          </small>
        </div>
        <div className="d-flex align-items-center col-sm-6 col-md-6 col-lg-3 d-flex justify-content-center">
          <Tiempo></Tiempo>
        </div>
      </section>
    </div>
  );
};

export default Precio;
