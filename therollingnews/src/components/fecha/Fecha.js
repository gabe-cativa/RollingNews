import React, { useEffect, useState } from "react";
import Card from "react-bootstrap/Card";

const Fecha = () => {
  const [fechaje, setFechaje] = useState("");

  useEffect(() => {
    const f = new Date();

    const showDate =
      f.getDate() + "/" + (f.getMonth() + 1) + "/" + f.getFullYear();

    setFechaje(showDate);
  }, []);

  return (
    <Card>
      <Card.Body>
        <h5>{fechaje}</h5>
      </Card.Body>
    </Card>
  );
};

export default Fecha;
