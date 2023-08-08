import React from "react";
import "../styles/QuienSomos.scss";
import QuienSomos1 from "../assets/Quiensomos.webp";
import Profile from "../assets/profile.jpeg";

const QuienSomos = () => {
  return (
    <div className="quienSomos">
      <img src={QuienSomos1} alt="quienSomos" className="fotoQuien"></img>
      <div>
        <h3>QUIÉN SOMOS?</h3>
        <img src={Profile} alt="profile" className="profile"></img>
      </div>

      <p className="textArea">
        El párrafo es un concepto muy importante en cualquier texto. Se trata de
        una unidad significativa que empieza con mayúscula y termina con un
        punto y aparte.
      </p>
    </div>
  );
};

export default QuienSomos;
