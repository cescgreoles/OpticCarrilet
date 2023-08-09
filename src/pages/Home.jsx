import React from "react";
import BurgerMenu from "../components/BurgerMenu";
import InfoNav from "../components/InfoNav";
import Navbar from "../components/Navbar";
import GifGafas from "../components/GifGafas";
import Combination from "../components/Combination";
import Footer from "../components/Footer";
import QuienSomos from "../components/QuienSomos";
import Secciones from "../components/Secciones";
import VideoPlayer from "../components/VideoPlayer";
import BannerSeccion from "../components/BannerSeccion";

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
        <BannerSeccion />
        <QuienSomos />
        <Secciones />
        <Combination />
        <Footer />
      </body>
    </div>
  );
};

export default Home;
