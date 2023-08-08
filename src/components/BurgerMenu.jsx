import React from "react";
import { slide as Menu } from "react-burger-menu";
import "../styles/BurgerMenu.scss";
import logoUlleres from "../assets/logoUlleres.png";
// import logoB from "../assets/logotip.png";

const BurgerMenu = () => {
  return (
    <Menu>
      {/* <img src={logoB} alt="logoB" className="img-logo"></img> */}
      <a className="menu-item" href="/">
        <img src={logoUlleres} alt="logo-ulleres" className="logoUlleres"></img>
      </a>
      <a className="menu-item" href="tienda">
        LA TIENDA
      </a>
      <a className="menu-item" href="consulta">
        NUESTRA CONSULTA
      </a>
      <a className="menu-item" href="productos">
        NUESTROS PRODUCTOS
      </a>
      <a className="menu-item" href="contact">
        CONTACTO
      </a>
    </Menu>
  );
};

export default BurgerMenu;
