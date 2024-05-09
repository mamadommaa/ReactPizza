// import React from "react";
import banner1 from '../assets/img/banner1.png';
import banner2 from '../assets/img/banner2.png';
import banner3 from '../assets/img/banner3.png';
import banner4 from '../assets/img/banner4.png'
import React, { useState, useEffect } from 'react';

const Banner = () => {
  const images = [banner1, banner2, banner3, banner4];
  const [currentImage, setCurrentImage] = useState(null);

  useEffect(() => {
    const randomIndex = Math.floor(Math.random() * images.length);
    setCurrentImage(images[randomIndex]);
  }, []); // [] гарантирует, что эффект запускается только один раз при монтировании

  return (
    <div className="banner">
      {currentImage && <img className="banner__image" src={currentImage} alt="" />}
    </div>
  );
};

export default Banner;