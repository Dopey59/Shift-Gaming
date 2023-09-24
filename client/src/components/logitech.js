import '@fortawesome/fontawesome-svg-core/styles.css';

import { Fade } from "react-awesome-reveal";

export default function Logitech() {
  return (
    <main className=''>
      {/* Logitech */}
      <Fade direction='down'>
        <div className='flex flex-col items-center justify-around sm:flex-row'>
          <div className='sm:w-1/2 flex flex-col items-start gap-4 p-4'>
            <h1 className='text-xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold'>
              Plutôt bureautique ou gaming ?
            </h1>
            <h2 className='text-md sm:text-xl lg:text-2xl'>
              Professionnel - confort - Robustesse.
            </h2>
            <p className='text-sm sm:text-md md:text-lg lg:text-xl xl:text-2xl'>
              Adopte une nouvelle attitude au bureau avec les souris ergonomiques confortables pour ton poignet
              ou encore la chaise ergonomique de chez Logitech. Le géant de la tech est aussi spécialisé
              dans le gaming où de nombreux joueurs professionnels se fournissent et sont sponsorisés.
            </p>
            <a
              className="bg-blue-500 font-bold text-white p-2 text-center text-xl rounded-md hover:duration-500 transition duration-0 hover:bg-blue-600 w-full sm:w-1/2"
              href='https://www.logitech.com/fr-fr'>
              Voir
            </a>
          </div>
          <div className='p-6'>
            <img src='./logitech.png' alt="logo Logitech" className='w-40 sm:w-60 h-auto'/>
          </div>
        </div>
      </Fade>
    </main>
  );
}
