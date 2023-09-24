import React, { useEffect } from 'react';
import Swiper from 'swiper/bundle';
import 'swiper/swiper-bundle.css';

export default function Carousel() {
  useEffect(() => {
    // Initialize Swiper here, after the component has mounted
    const swiper = new Swiper('.swiper', {
      pagination: {
        el: '.swiper-pagination',
      },
      navigation: {
        nextEl: '.swiper-button-next', // Sélectionnez la classe de la flèche suivante
        prevEl: '.swiper-button-prev', // Sélectionnez la classe de la flèche précédente
      },
      direction: 'horizontal',
      loop: true,
    });
  }, []); // Empty dependency array ensures this effect runs once after initial render

  return (
    <div className="swiper">
      <div className="swiper-wrapper">
        <div className="swiper-slide"><img alt="img1" src='./img2.jpg' /></div>
        <div className="swiper-slide"><img alt="img2" src='./img3.jpg' /></div>
        <div className="swiper-slide"><img alt="img3" src='./img4.jpg' /></div>
        ... 
      </div>

      <div className="swiper-button-prev"></div>
      <div className="swiper-button-next"></div>

      <div className="swiper-scrollbar"></div>
    </div>
  );
}