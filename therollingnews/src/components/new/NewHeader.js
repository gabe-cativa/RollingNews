import React from "react";

const NewHeader = () => {
  const dia = new Date();
  const diaSemana = [
    "Domingo",
    "Lunes",
    "Martes",
    "Miercoles",
    "Jueves",
    "Viernes",
    "Sabado",
  ];

  return (
    <div className="d-flex justify-content-around mb-2 mt-2 newDetail-header">
      <h3 className="type-Future font-weight-bold">
        Bienvenidos a TheRollingTimes.com!
      </h3>
      <h3>
        {`${diaSemana[dia.getDay()]} ${dia.getDate()} del ${dia.getYear()}`}
      </h3>
      <h3>Tiempo Actual.....</h3>
    </div>
  );
};

export default NewHeader;
