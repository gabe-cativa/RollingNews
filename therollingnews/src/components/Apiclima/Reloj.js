import React, { useState, useEffect } from "react";
import Card from "react-bootstrap/Card";
import "./Reloj.css";

const Reloj = () => {
  const [hora, setReloj] = useState();

  useEffect(() => {
    const intervale = () => {
      const element = (
        <div className="box-reloj contenedorReloj relojborder">
          <h5 className="text-dark"> {new Date().toLocaleTimeString()}</h5>
        </div>
      );
      setReloj(element);
    };

    setInterval(intervale, 1000);
  }, []);

  return (
    <Card>
      <Card.Body>
        <>
          <h5>{hora}</h5>
        </>
      </Card.Body>
    </Card>
  );
};
export default Reloj;
