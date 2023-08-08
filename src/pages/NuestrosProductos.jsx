import React from "react";
import BurgerMenu from "../components/BurgerMenu";
import InfoNav from "../components/InfoNav";
import Navbar from "../components/Navbar";

const NuestrosProductos = () => {
  return (
    <body>
      <header>
        <BurgerMenu />
        <InfoNav />
        <Navbar />
      </header>
      <main>
        <h3>AQUI PONDREMOS INFORMACION DE NuestrosProductos</h3>
      </main>
    </body>
  );
};

export default NuestrosProductos;
