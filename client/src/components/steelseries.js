import '@fortawesome/fontawesome-svg-core/styles.css';

import { Fade } from "react-awesome-reveal";

export default function Steelseries() {
  return (
    <main className="w-full pb-14">
      {/* Steelseries */}
      <Fade direction='down'>
        <div id="part">

          <div className='flex flex-col sm:flex-row items-center justify-around p-4 md:p-12 '>
            <div className='p-6'>
              <img src='./steelseries.png' alt="logo steelseries partenaire" className='w-60 h-auto'/>
            </div>
            <div className='sm:w-1/2 flex flex-col items-start gap-4'>
              <h1 className='text-xl sm:text-3xl md:text-4xl lg:text-4xl xl:text-4xl '>
                Découvre la puissance avec Steelseries
              </h1>
              <h2 className='text-xl text-blue-500'>Hardware - style - immersif.</h2>
              <p className='text-md'>
                Plonge dans l'empire du gaming et teste leurs dernières technologies "Sonar"
                pour rendre les jeux encore plus immersifs et entendre vos ennemis de loin. Boostez
                les basses de votre casque ou améliorez le son de votre micro pour une qualité de streaming.
              </p>
              <a
                className="bg-orange-500 font-bold text-white p-2 text-center text-xl rounded-md hover:duration-500 transition duration-0 hover:bg-orange-600 w-full sm:w-1/2"
                href='https://fr.steelseries.com/?gclid=Cj0KCQjwvL-oBhCxARIsAHkOiu36g0FuJkNzBpOemRS6W_elngPs_gVqi5mzo1JIVyUgHH3wQm2EQPkaAi15EALw_wcB'>
                Voir
              </a>
            </div>
          </div>
        </div>
      </Fade>
    </main>
  );
}
