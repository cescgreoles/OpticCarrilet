import React, { useState } from "react";
import "../styles/Carousel.scss"; // Create a separate CSS file for styling (optional)

const Carousel = ({ items }) => {
  const [currentItem, setCurrentItem] = useState(0);

  const nextItem = () => {
    setCurrentItem((prevItem) =>
      prevItem === items.length - 1 ? 0 : prevItem + 1
    );
  };

  const prevItem = () => {
    setCurrentItem((prevItem) =>
      prevItem === 0 ? items.length - 1 : prevItem - 1
    );
  };

  return (
    <div className="carousel">
      <button className="carousel-button" onClick={prevItem}>
        Previous
      </button>
      <div className="carousel-item">{items[currentItem]}</div>
      <button className="carousel-button" onClick={nextItem}>
        Next
      </button>
    </div>
  );
};

export default Carousel;
