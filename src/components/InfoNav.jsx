import React from "react";
import "../styles/InfoNav.scss";
import { PiInstagramLogoThin } from "react-icons/pi";

const InfoNav = () => {
  return (
    <div className="infoNav">
      <p>Dirección Av. del Carrilet, 80,L'Hospitalet de Llobregat </p>
      <p>Email: opticacarrilet@gmail.com</p>
      <p>Telefono: 934 21 28 53</p>

      <PiInstagramLogoThin className="icon-instagram" />
    </div>
  );
};

export default InfoNav;
