// src/components/Carousel.js
import React, { useState } from "react";
import Banner from "./Banner";
import "../styles/Carousel.scss";

const Carousel = ({ banners }) => {
  const [currentBannerIndex, setCurrentBannerIndex] = useState(0);

  const nextBanner = () => {
    setCurrentBannerIndex((prevIndex) => (prevIndex + 1) % banners.length);
  };

  const prevBanner = () => {
    setCurrentBannerIndex((prevIndex) =>
      prevIndex === 0 ? banners.length - 1 : prevIndex - 1
    );
  };

  return (
    <div className="carousel">
      <button onClick={prevBanner}></button>
      <Banner imageUrl={banners[currentBannerIndex]} />
      <button onClick={nextBanner}></button>
    </div>
  );
};

export default Carousel;
