import React from "react";
import "../styles/Combination.scss";
import playa from "../assets/playa.jpeg";

const Combination = () => {
  return (
    <div className="combo">
      <p className="texto-centrado">
        El párrafo es un concepto muy importante en cualquier texto. Se trata de
        una unidad significativa que empieza con mayúscula y termina con un
        punto y aparte. Presenta una idea principal organizada de manera
        coherente y va acompañada de ideas secundarias que ayudan a precisar y
        sustentar su contenido.
      </p>
      <img src={playa} alt="imagen1" className="imagen-1"></img>
    </div>
  );
};

export default Combination;
