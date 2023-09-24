import { faPlaystation } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import '@fortawesome/fontawesome-svg-core/styles.css';

import { Fade } from "react-awesome-reveal";

export default function Steelseries(){
    return(
<main className="w-full py-14">
            {/* Steelseries */}
            <Fade direction='down'>
                <div id="part" className=''>
                    <div className='flex justify-center'>
                        <h1 className='text-4xl'>Des partenaires puissants rien que pour toi.</h1>
                    </div>
                    
                    <div className='flex items-center justify-around p-12 py-24'>
                        <div>
                            <img src='./steelseries.png' alt="logo steelseries partenaire" className='w-80 h-auto'/>
                        </div>
                        <div className='flex flex-col items-start gap-4'>
                            <h1 className='text-3xl font-bold'>Découvre la puissance avec Steelseries</h1>
                            <h2 className='text-xl'>Hardware - style - immersif.</h2>
                            <p className='text-md'>Plonge dans l'empire du gaming et test leurs dernières technologie "Sonar"
                                pour rendre les jeux <br></br>encore plus immersif et entendre vos ennemies de loin. Boostez 
                                les basses de votre casque <br></br> ou améliorer le son de votre micro pour une qualité streaming.
                            </p>
                            <a  className="bg-orange-500 font-bold text-white p-2  text-center text-xl rounded-md
                                hover:duration-500 transition duration-0 hover:bg-orange-600 w-1/2"
                                href='https://fr.steelseries.com/?gclid=Cj0KCQjwvL-oBhCxARIsAHkOiu36g0FuJkNzBpOemRS6W_elngPs_gVqi5mzo1JIVyUgHH3wQm2EQPkaAi15EALw_wcB'>
                                Voir
                            </a>
                        </div>
                    </div>
                </div>
            </Fade>
        </main>

    )
}