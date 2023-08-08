import React from "react";
import BurgerMenu from "../components/BurgerMenu";
import InfoNav from "../components/InfoNav";
import Navbar from "../components/Navbar";
import GifGafas from "../components/GifGafas";
import Combination from "../components/Combination";
import Footer from "../components/Footer";
import QuienSomos from "../components/QuienSomos";
import Secciones from "../components/Secciones";

const Home = () => {
  return (
    <div>
      <body>
        <header>
          <BurgerMenu />
          <InfoNav />
          <Navbar />
          <GifGafas />
        </header>
        {/* <VideoPlayer /> */}
        <Combination />
        <QuienSomos />
        <Secciones />
        <Footer />
      </body>
    </div>
  );
};

export default Home;
