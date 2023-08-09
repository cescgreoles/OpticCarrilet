import React from "react";
import lentillas from "../assets/lentillas.png";
import gafas from "../assets/gafas.png";
import audifonos from "../assets/audifonos.png";
import gafas1 from "../assets/gafas1.png";
import bajaVision from "../assets/bajaVision.png";
import "../styles/Secciones.scss";

const Secciones = () => {
  return (
    <div className="seccions">
      <a href="/">
        <img src={lentillas} alt="profile" className="sameSeccion"></img>
      </a>
      <a href="/">
        <img src={gafas} alt="profile" className="sameSeccion"></img>
      </a>
      <a href="/">
        <img src={audifonos} alt="profile" className="sameSeccion"></img>
      </a>
      <a href="/">
        <img src={gafas1} alt="profile" className="sameSeccion"></img>
      </a>
      <a href="/">
        <img src={bajaVision} alt="profile" className="sameSeccion"></img>
      </a>
    </div>
  );
};

export default Secciones;
