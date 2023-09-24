import { faPlaystation } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import '@fortawesome/fontawesome-svg-core/styles.css';

import { Fade } from "react-awesome-reveal";

export default function Steelseries(){
    return(
<main className="w-full py-14">
            {/* Steelseries */}
            <Fade direction='right'>
                <div id="part" className=''>
                    <div className='flex justify-center'>
                        <h1 className='text-5xl'>Des partenaires puissants rien que pour toi</h1>
                    </div>
                    
                    <div className='flex items-center justify-around p-12 py-24'>
                        <div>
                            <img src='./steelseries.svg' className='w-60 h-60'/>
                        </div>
                        <div className='flex flex-col items-start gap-4'>
                            <h1 className='text-3xl font-bold'>Découvre la puissance avec Steelseries |</h1>
                            <p className='text-xl'>Accèdes à toutes les offres Steelseries du moment.</p>
                            <p className='text-md'>Plonge dans l'empire du gaming et test leurs dernières technologie "Sonar"
                                pour rendre les jeux <br></br>encore plus immersif et entendre vos ennemies de loin. Boostez 
                                les basses de votre casque <br></br> ou améliorer le son de votre micro pour une qualité streaming.
                            </p>
                            <a  className="bg-orange-500 w-full font-bold text-white p-2  text-center text-xl rounded-md
                            hover:duration-500 transition duration-0 hover:bg-orange-600" href='#'>Voir</a>
                        </div>
                    </div>
                </div>
            </Fade>
        </main>

    )
}