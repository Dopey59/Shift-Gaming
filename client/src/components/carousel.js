import React, { useEffect } from 'react';
import Swiper from 'swiper/bundle';
import 'swiper/css/bundle';

export default function Carousel() {
  useEffect(() => {
    const swiper = new Swiper('.swiper', {
      direction: 'horizontal',
      loop: true,
      pagination: {
        el: '.swiper-pagination',
      },
      navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
      },
    });
  }, []); // Le tableau vide [] signifie que cet effet ne sera exécuté qu'une seule fois après le chargement initial du composant.

  return (
    <div className="swiper shadow-rose-900 shadow-2xl">
      <div className="swiper-wrapper">
        <div className="swiper-slide">
          <img
            src="https://wallpapercave.com/wp/wp12593841.jpg"
            alt="fc24-ea-sports"
            className='rounded-md w-auto'
          />
          <div className="absolute top-1/2 left-1/2 flex flex-col gap-2 transform -translate-x-1/2 -translate-y-1/2 text-white text-center">
            <h1 className="text-md sm:text-3xl font-bold">Actuellement à -20%</h1>
            <a href='https://www.instant-gaming.com/?igr=gamer-7232d0' className="sm:text-lg text-sm bg-orange-500 p-1 rounded">Voir le site</a>
          </div>
        </div>
      <div className="swiper-slide">
          <img
            src={require('../assets/mirage-min.webp')}
            alt="Assassin's-creed-Mirage-Ubisoft"
            className='rounded-md'
          />
          <div className="absolute top-1/2 left-1/2 flex flex-col gap-2 transform -translate-x-1/2 -translate-y-1/2 text-white text-center">
            <h1 className="text-md sm:text-3xl font-bold">Actuellement à -20%</h1>
            <a href='https://www.instant-gaming.com/?igr=gamer-7232d0' className="sm:text-lg text-sm bg-orange-500 p-1 rounded">Voir le site</a>
          </div>
        </div>
        <div className="swiper-slide">
          <img
            src={require('../assets/starfield-min.webp')}
            alt="starfield-bethesda"
            className='rounded-xl'
          />
          <div className="absolute flex flex-col gap-2 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-white text-center">
            <h1 className="text-md sm:text-3xl font-bold">Actuellement à -26%</h1>
            <a href='https://www.instant-gaming.com/?igr=gamer-7232d0' className="sm:text-lg text-sm bg-orange-500 p-1 rounded">Voir le site</a>
          </div>
        </div>


        <div className="swiper-slide">
          <img
            src={require('../assets/payday3.webp')} 
            alt="payday-3"
            className='rounded-xl'
          />
          <div className="absolute top-1/2 left-1/2 flex flex-col gap-2 transform -translate-x-1/2 -translate-y-1/2 text-white text-center">
            <h1 className="text-md sm:text-3xl font-bold">Actuellement à -25%</h1>
            <a href="https://www.instant-gaming.com/?igr=gamer-7232d0" className="sm:text-lg text-sm bg-orange-500 p-1 rounded">Voir le site</a>
          </div>
        </div>

        <div className="swiper-slide">
          <img
            src={require('../assets/mk-min.webp')} 
            alt="Mortal-Kombat-1"
            className='rounded-xl'
          />
          <div className="absolute top-1/2 left-1/2 flex flex-col gap-2 transform -translate-x-1/2 -translate-y-1/2 text-white text-center">
            <h1 className="text-md sm:text-3xl font-bold">Actuellement à -29%</h1>
            <a href="https://www.instant-gaming.com/?igr=gamer-7232d0?igr=gamer-7232d0" className="sm:text-lg text-sm bg-orange-500 p-1 rounded">Voir le site</a>
          </div>
        </div>
      </div>

      {/* Si nous avons besoin de la pagination */}
      <div className="swiper-pagination"></div>

      {/* Si nous avons besoin de boutons de navigation */}
      <div className="swiper-button-prev"></div>
      <div className="swiper-button-next"></div>
    </div>
  );
}
