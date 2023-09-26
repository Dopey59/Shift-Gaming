import { faCircleArrowDown } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import '@fortawesome/fontawesome-svg-core/styles.css';

export default function Banniere() {
  function scrolltoId() {
    var access = document.getElementById("part");
    access.scrollIntoView({ behavior: 'smooth' }, true);
  }

  return (

    // <!-- Hero -->
    <div className="bg-slate-900">
      <div className="bg-gradient-to-b from-violet-600/[.15] via-transparent">
        <div className="max-w-[85rem] mx-auto px-4 sm:px-6 lg:px-8 py-24 space-y-8">
          {/* <!-- Announcement Banner --> */}
          <div className="flex justify-center">
            <div className="group inline-block bg-white/[.05] hover:bg-white/[.1] border border-white/[.05] p-1 pl-4 rounded-full shadow-md">
              <p className="mr-2 inline-block text-white text-sm">
                Bienvenue
              </p>
            </div>
          </div>
          {/* <!-- End Announcement Banner --> */}
    
          {/* <!-- Title --> */}
          <div className="max-w-3xl text-center mx-auto">
            <h1 className="block font-medium text-gray-200 text-4xl sm:text-5xl md:text-6xl lg:text-7xl">
              Le meilleur matériel rencontre la victoire ultime.
            </h1>
          </div>
          {/* <!-- End Title --> */}
    
          <div className="max-w-3xl text-center mx-auto">
            <h1 className="text-lg text-gray-400">Améliore ton expérience de jeu aujourd'hui.</h1>
          </div>
    
          {/* <!-- Buttons --> */}
          <div className="text-center">
            <a onClick={scrolltoId} className="inline-flex justify-center items-center gap-x-3 text-center bg-gradient-to-tl from-blue-600 to-violet-600 shadow-lg shadow-transparent hover:shadow-blue-700/50 border border-transparent text-white text-sm font-medium rounded-full focus:outline-none focus:ring-2 focus:ring-blue-600 focus:ring-offset-2 focus:ring-offset-white py-2 px-2 dark:focus:ring-offset-gray-800" href="#">
              <svg viewBox="0 0 24 24" width="24" height="24">
                <path d="M12 15.0006L7.75732 10.758L9.17154 9.34375L12 12.1722L14.8284 9.34375L16.2426 10.758L12 15.0006Z" fill="rgba(255,255,255,1)"></path>
                </svg>
            </a>
          </div>
          {/* <!-- End Buttons --> */}
        </div>
      </div>
    </div>
    // <!-- End Hero -->
  );
}
