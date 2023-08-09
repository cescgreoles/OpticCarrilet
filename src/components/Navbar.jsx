import "../styles/NavbarStyles.scss";
import logoUlleres from "../assets/logoUlleres.png";

import React, { useState } from "react";

const Navbar = () => {
  const [isMenuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen((prev) => !prev);
  };

  return (
    <nav>
      <div className="navbar">
        <div className="logo"></div>
        <div className={`menu ${isMenuOpen ? "open" : ""}`}>
          <ul className="display-menu">
            <li>
              <a href="/">
                <img
                  src={logoUlleres}
                  alt="logo-ulleres"
                  className="logoUlleres"
                ></img>
              </a>
            </li>
            <li>
              <a href="/tienda">LA TIENDA</a>
            </li>
            <li>
              <a href="/consulta">SERVICIOS</a>
            </li>

            <li>
              <a href="/contact">CONTACTO</a>
            </li>
          </ul>
        </div>
        <div className="menu-icon" onClick={toggleMenu}>
          <i className={`fa ${isMenuOpen ? "fa-times" : "fa-bars"}`}></i>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
