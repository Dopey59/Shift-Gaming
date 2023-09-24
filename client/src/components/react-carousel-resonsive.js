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
    <div className="swiper h-screen relative">
      <div className="swiper-wrapper relative">
        {/* Slide 1 */}
        <div className="swiper-slide relative">
          <img alt="img1" src='./starfield-min.jpeg' />
          <div className="absolute inset-0 flex flex-col gap-4 items-center justify-center bg-opacity-30 bg-black text-white p-4">
            <h1 className='text-5xl text-center'>Actuellement à -26% sur PC et XBOX</h1>
            <p>Plonge dans unviers étoilés par les créateurs de Skyrim et Fallout 4.</p>
            <a className="bg-orange-500 font-bold text-white p-2 text-center text-xl rounded-md hover:bg-orange-600"
             href='https://www.instant-gaming.com/?igr=gamer-7232d0'>En profiter</a>
          </div>
        </div>

        {/* Slide 2 */}
        <div className="swiper-slide relative">
          <img alt="img2" src='./mk-min.jpeg' />
          <div className="absolute inset-0 flex flex-col gap-4 items-center justify-center bg-opacity-30 bg-black text-white p-4">
            <h1 className='text-5xl text-center'>Disponible maintenant à -29% sur PC & XBOX</h1>
            <p>Détruis tes ennemies avec des nouveaux finishers plus meurtirers les uns que les autres.</p>
            <a className="bg-orange-500 font-bold text-white p-2 text-center text-xl rounded-md hover:bg-orange-600"
             href='https://www.instant-gaming.com/?igr=gamer-7232d0
            ' >En profiter</a>

          </div>
        </div>

        {/* Slide 3 */}
        <div className="swiper-slide relative">
          <img alt="img3" src='./mirage-min.jpg' />
          <div className="absolute inset-0 flex flex-col gap-4 items-center justify-center bg-opacity-30 bg-black text-white p-4">
            <h1 className='text-5xl text-center'>Assassin's Creed Mirage disponible en pré-commande maintenant</h1>
            <p>Incarne Basim et explore les rues de Bagdad dans ce nouvel opus iconic de chez Ubisoft.</p>
            <a className="bg-orange-500 font-bold text-white p-2 text-center text-xl rounded-md hover:bg-orange-600"
             href='https://www.instant-gaming.com/?igr=gamer-7232d0
            ' >En profiter</a>
          </div>
        </div>
      </div>

      <div className="swiper-button-prev"></div>
      <div className="swiper-button-next"></div>

      <div className="swiper-scrollbar"></div>
    </div>
  );
}