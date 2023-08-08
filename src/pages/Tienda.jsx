import React from "react";
import InfoNav from "../components/InfoNav";
import Navbar from "../components/Navbar";
import BurgerMenu from "../components/BurgerMenu";
import ResponsiveMap from "../components/Map";
import Map from "../components/Map";

const Tienda = () => {
  return (
    <body>
      <header>
        <BurgerMenu />
        <InfoNav />
        <Navbar />
      </header>
      <main>
        <Map />
      </main>
    </body>
  );
};

export default Tienda;
