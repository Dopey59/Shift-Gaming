import { faCircleArrowDown } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import '@fortawesome/fontawesome-svg-core/styles.css';

export default function Banniere() {
    function scrolltoId() {
      var access = document.getElementById("part");
      access.scrollIntoView({ behavior: 'smooth' }, true);
    }
  
    return (
      <div className="banniere h-screen relative">
        <video autoPlay loop muted className="w-full h-full object-cover absolute inset-0">
          <source src='./stars.mp4' type='video/mp4' />
        </video>
  
        <div className="absolute inset-0 gap-3 flex flex-col justify-center items-center text-center text-white">
          <h1 className="text-4xl">A la recherche du <span className='text-orange-600'> meilleur </span> setup pour jouer comme un <span className='text-orange-600'>pro</span> ?</h1>
          <p className='text-xl'>Améliorez votre expérience de jeu dès maintenant !</p>
        </div>
  
        <div className="absolute bottom-12 left-1/2 transform -translate-x-1/2">
          <FontAwesomeIcon
            onClick={scrolltoId}
            icon={faCircleArrowDown}
            className="text-black bg-white rounded-full p-1 hover:cursor-pointer hover:opacity-10"
            size="lg"
          />
        </div>
      </div>
    );
  }