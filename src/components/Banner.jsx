// src/components/Banner.js
import React from "react";
import "../styles/Banner.scss";

const Banner = ({ imageUrl }) => {
  return (
    <div className="banner">
      <img src={imageUrl} alt="Banner" />
    </div>
  );
};

export default Banner;
