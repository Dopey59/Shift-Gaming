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
      scrollbar: {
        el: '.swiper-scrollbar',
      },
    });
  }, []); // Le tableau vide [] signifie que cet effet ne sera exécuté qu'une seule fois après le chargement initial du composant.

  return (
    <div className="swiper">
      <div className="swiper-wrapper">
        <div className="swiper-slide">
          <img
            src="https://images.unsplash.com/photo-1580610447943-1bfbef5efe07?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
            alt="Slide 1"
            className=''
          />
          <div className="absolute flex flex-col gap-2 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-white text-center">
            <h1 className="sm:text-3xl text-xl font-bold">Pour une communauté de passionnés</h1>
            <p className="sm:text-lg text-sm">De belles choses arrivent.</p>
          </div>
        </div>

        <div className="swiper-slide">
          <img
            src="https://images.unsplash.com/photo-1482855549413-2a6c9b1955a7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
            alt="Slide 2 - manette xbox series s"
            className=''
          />
          <div className="absolute top-1/2 left-1/2 flex flex-col gap-2 transform -translate-x-1/2 -translate-y-1/2 text-white text-center">
            <h1 className="text-xl sm:text-3xl font-bold">Plus on est d'fous, plus on game</h1>
            <p className="sm:text-lg text-sm">Shift Gaming s'adresse aussi aux joueurs consoles.</p>
          </div>
        </div>

        <div className="swiper-slide">
          <img
            src="https://images.unsplash.com/photo-1661347561879-c9ab77bac89f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
            alt="Slide 3 - gamer"
            className='brightness-50'
          />
          <div className="absolute top-1/2 left-1/2 flex flex-col gap-2 transform -translate-x-1/2 -translate-y-1/2 text-white text-center">
            <h1 className="sm:text-3xl text-xl font-bold">"Le guild ultime pour les gamers"</h1>
            <p className="sm:text-lg text-sm">Des trucs & astuces pour vous aider pas à pas.</p>
          </div>
        </div>
      </div>

      {/* Si nous avons besoin de la pagination */}
      <div className="swiper-pagination"></div>

      {/* Si nous avons besoin de boutons de navigation */}
      <div className="swiper-button-prev"></div>
      <div className="swiper-button-next"></div>

      {/* Si nous avons besoin de la barre de défilement */}
      <div className="swiper-scrollbar"></div>
    </div>
  );
}
