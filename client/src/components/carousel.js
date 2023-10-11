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
          <a 
          href="https://www.instant-gaming.com/fr/6842-acheter-forza-motorsport-pc-xbox-series-x-s-pc-xbox-series-x-s-jeu-microsoft-store/?igr=gamer-7232d0">
            <img
              src={require('../assets/Forza.webp')}
              alt="fc24-ea-sports"
              className='rounded-md w-full h-auto'
            />
          </a>
        </div>
      <div className="swiper-slide">
          <a 
          href="https://www.instant-gaming.com/fr/9187-acheter-ubisoft-connect-assassin-s-creed-mirage-pc-jeu-ubisoft-connect-europe/?igr=gamer-7232d0">
            <img
              src={require('../assets/Mirage.webp')}
              alt="Assassin's-creed-Mirage-Ubisoft"
              className='rounded-md w-full h-auto'
            />
          </a>
        </div>
        <div className="swiper-slide">
          <a 
          href="https://www.instant-gaming.com/fr/14584-acheter-nba-2k24-kobe-bryant-edition-pc-jeu-steam-europe/?igr=gamer-7232d0">
            <img
              src={require('../assets/NBA-2K24.webp')}
              alt="Nba 2K24"
              className='rounded-xl w-full h-auto'
            />
          </a>
        </div>


        <div className="swiper-slide">
          <a 
          href="https://www.instant-gaming.com/fr/6442-acheter-payday-3-pc-jeu-steam/?igr=gamer-7232d0">
            <img
              src={require('../assets/Payday3.webp')} 
              alt="payday-3"
              className='rounded-xl w-full h-auto'
            />
          </a>
        </div>

        <div className="swiper-slide">
          <a 
          href="https://www.instant-gaming.com/fr/9422-acheter-steam-mortal-kombat-1-pc-jeu-steam-europe/?igr=gamer-7232d0">
            <img
              src={require('../assets/Mortal-Kombat.webp')} 
              alt="Mortal-Kombat-1"
              className='rounded-xl w-full h-auto'
            />
          </a>
        </div>

        <div className="swiper-slide">
          <a 
          href="https://www.instant-gaming.com/fr/13588-acheter-ea-sports-fc-24-pc-jeu-ea-app/?igr=gamer-7232d0https://www.instant-gaming.com/?igr=gamer-7232d0">
            <img
              src={require('../assets/F24-EA.webp')} 
              alt="FC24 - Ea sports"
              className='rounded-xl w-full h-auto'
            />
          </a>
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
