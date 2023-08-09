import React from "react";
import BurgerMenu from "../components/BurgerMenu";
import InfoNav from "../components/InfoNav";
import Navbar from "../components/Navbar";
import GifGafas from "../components/GifGafas";
import Combination from "../components/Combination";
import Footer from "../components/Footer";
import QuienSomos from "../components/QuienSomos";
import Secciones from "../components/Secciones";
import Carousel from "../components/Carousel";

const Home = () => {
  const bannerUrls = [
    "../assets/playa.jpeg",
    "../assets/puestaSol.jpeg",
    "../assets/playa.jpeg",
  ];

  return (
    <div>
      <body>
        <header>
          <BurgerMenu />
          <InfoNav />
          <Navbar />
          <GifGafas />
          <Carousel banners={bannerUrls} />
        </header>

        <QuienSomos />
        <Secciones />
        <Combination />
        <Footer />
      </body>
    </div>
  );
};

export default Home;
