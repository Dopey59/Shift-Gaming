import React, { useEffect } from 'react';
import Swiper from 'swiper/bundle';
import 'swiper/swiper-bundle.css';

export default function Carousel() {
  useEffect(() => {
    // Initialize Swiper here, after the component has mounted
    const swiper = new Swiper('.swiper', {
      direction: 'horizontal',
      loop: true,
      effect: 'fade',
      speed: 800,
      
      pagination: {
        el: '.swiper-pagination',
      },
      navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
      },
      crossFade: {
        boolean: false,
      },
    });
  }, []); // Empty dependency array ensures this effect runs once after initial render

  return (
    <div className="swiper relative">
      <div className="swiper-wrapper">
        {/* Slide 1 */}
        <div className="swiper-slide bg-black">
          <img alt="img1" src='./starfield-min.jpeg' className="sm:w-auto sm:h-auto" />
          <div className="sm:absolute inset-0 flex flex-col gap-4 py-44 items-center justify-center bg-opacity-30 bg-black text-white p-4">
            <h1 className='font-bold text-xl text-left sm:text-5xl '>Actuellement à -26% sur PC et XBOX</h1>
            <p className=" text-sm text-center">Plonge dans un univers étoilé par les créateurs de Skyrim et Fallout 4.</p>
            <a className="bg-orange-500 w-full sm:w-auto font-bold text-white p-2 text-center text-md sm:text-xl rounded-md hover:bg-orange-600"
              href='https://www.instant-gaming.com/?igr=gamer-7232d0'>En profiter</a>
          </div>
        </div>

        {/* Slide 2 */}
        <div className="swiper-slide bg-black">
          <img alt="img2" src='./mk-min.jpeg' className="sm:w-auto sm:h-auto" />
          <div className="sm:absolute inset-0 flex flex-col gap-4 sm:items-center py-44 justify-center bg-opacity-30 bg-black text-white p-4">
            <h1 className='text-2xl sm:text-5xl font-bold text-center'>Disponible maintenant à -29% sur PC & XBOX</h1>
            <p className="text-sm text-center">Détruis tes ennemis avec de nouveaux finishers plus meurtriers les uns que les autres.</p>
            <a className="bg-orange-500 font-bold sm:w-auto w-full text-white p-2 text-center text-md sm:text-xl rounded-md hover:bg-orange-600"
              href='https://www.instant-gaming.com/?igr=gamer-7232d0'>En profiter</a>
          </div>
        </div>

        {/* Slide 3 */}
        <div className="swiper-slide bg-black">
          <img alt="img3" src='./mirage-min.jpg' className="sm:w-auto sm:h-auto" />
          <div className="sm:absolute inset-0 flex flex-col gap-4 py-44 items-center justify-center bg-opacity-30 bg-black text-white p-6 ">
            <h1 className='text-2xl sm:text-5xl font-bold text-center'>AC : Mirage | disponible en pré-commande maintenant</h1>
            <p className="text-sm text-center">Incarne Basim et explore les rues de Bagdad dans ce nouvel opus emblématique d'Ubisoft.</p>
            <a className="bg-orange-500 font-bold w-full sm:w-auto text-white p-2 text-center text-md sm:text-xl rounded-md hover:bg-orange-600"
              href='https://www.instant-gaming.com/?igr=gamer-7232d0'>En profiter</a>
          </div>
        </div>
      </div>

      <div className="swiper-button-prev"></div>
      <div className="swiper-button-next"></div>

      <div className="swiper-scrollbar"></div>
    </div>
  );
}
