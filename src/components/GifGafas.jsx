import React from "react";
import gafas from "../assets/ulleres.avif";
import "../styles/GifGafas.scss";

const GifGafas = () => {
  return (
    <div className="gafas">
      <img src={gafas} alt="loading..." className="gafas-img" />
    </div>
  );
};

export default GifGafas;
