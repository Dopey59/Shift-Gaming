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
      {/* <video autoPlay loop muted className="w-full h-full object-cover absolute inset-0">
        <source src='./stars.mp4' type='video/mp4' />
      </video> */}
      <img className='w-full h-full object-cover absolute inset-0"' src='./wallpaper3.jpg'></img>

      <div className="absolute inset-0 p-6 w-screen gap-12 flex flex-col justify-center sm:items-center  text-white">
        <h1 className="text-4xl font-bold">
          Une aventure <span className=''> immersive </span> où le meilleur matériel rencontre <span className=''> la victoire </span> ultime.
        </h1>
        <p className='text-2xl text-center '>
          Améliore ton expérience de jeu dès maintenant !
        </p>
      </div>

      <div className="absolute bottom-12 left-1/2 transform -translate-x-1/2">
        <FontAwesomeIcon
          onClick={scrolltoId}
          icon={faCircleArrowDown}
          className="text-black bg-white rounded-full p-1 hover:cursor-pointer"
          size="xl"
        />
      </div>
    </div>
  );
}
