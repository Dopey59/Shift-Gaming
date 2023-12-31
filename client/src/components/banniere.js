import '@fortawesome/fontawesome-svg-core/styles.css';
import  '../game/gameOn'
import { useEffect } from 'react';

export default function Banniere() {

  function scrolltoId() {
    var access = document.getElementById("part");
    access.scrollIntoView({ behavior: 'smooth' }, true);
  }
  

  return (

    // <!-- Hero -->
    <div id='bgBanniere' className="relative bg-gradient-to-br from-rose-500 to-zinc-900">
      <div className=" relative">
        <div className="max-w-[85rem] mx-auto sm:px-6 lg:px-8 py-24 space-y-8">
          {/* <!-- Announcement Banner --> */}
          <div className="flex justify-center">
            <div className="group flex bg-white/[.05] hover:bg-white/[.1] border border-white/[.05] p-2 pl-4 rounded-full shadow-md">
              <p className="mr-2 inline-block text-white text-sm">
                Bienvenue
              </p>
            </div>
          </div>
          {/* <!-- End Announcement Banner --> */}
    
          {/* <!-- Title --> */}
          <div className="max-w-3xl text-center mx-auto">
            <h1 className="block font-medium text-white text-2xl sm:text-4xl">
              Le meilleur matériel rencontre la victoire ultime.
            </h1>
          </div>
          {/* <!-- End Title --> */}
    
          <div className="max-w-3xl text-center mx-auto">
            <h1 className="text-sm sm:text-lg text-white">Améliore ton expérience de jeu aujourd'hui.</h1>
          </div>
    
          {/* <!-- Buttons --> */}
          <div className="text-center">
            <div onClick={scrolltoId} className="inline-flex justify-center hover:cursor-pointer items-center gap-x-3 text-center  bg-white/[.05] hover:bg-white/[.1]  border-white/[.55] shadow-transparent border  text-white text-sm font-medium rounded-full focus:outline-none focus:ring-2 focus:ring-blue-600 focus:ring-offset-2 focus:ring-offset-white py-2 px-2 dark:focus:ring-offset-gray-800">
              <svg viewBox="0 0 24 24" width="24" height="24">
                <path d="M12 15.0006L7.75732 10.758L9.17154 9.34375L12 12.1722L14.8284 9.34375L16.2426 10.758L12 15.0006Z" fill="rgba(255,255,255,1)"></path>
              </svg>
            </div>
          </div>
          {/* <!-- End Buttons --> */}
        </div>
      </div>
    </div>
    // <!-- End Hero -->
  );
}
