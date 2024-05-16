import React from "react";
import "./Horarios.css";

const Horarios = () => {
  return (
    <div className="conteiner">
      <h3 className="horariosh3">Lunes a Viernes</h3>
      <p className="horariosp">9 a 13 hs - 16 a 20 hs.</p>
      <h3 className="horariosh3">Sábados</h3>
      <p className="horariosp">9 a 13 hs</p>
      <h3 className="horariosh3">Domingos</h3>
      <p className="horariosp">CERRADO</p>
    </div>
  );
};

export default Horarios;
