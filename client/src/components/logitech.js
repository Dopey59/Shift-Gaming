import { faPlaystation } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import '@fortawesome/fontawesome-svg-core/styles.css';

import { Fade } from "react-awesome-reveal";

export default function Logitech(){
    return(

        <main className=''>
            {/* Logitech */}
            <Fade direction='down'>
                <div className='flex items-center justify-around'>
                    <div className='flex flex-col items-start gap-4'>
                        <h1 className='text-3xl font-bold'>Plutôt bureautique ou gaming ? |</h1>
                        <h2 className='text-xl'>Professionnel - confort - Robustesse.</h2>
                        <p className='text-md'>
                            Adopte une nouvelle attitude au bureau avec les souris ergonomiques confortables pour ton poignet
                            ou <br></br> encore la chaise ergonomique de chez Logitech. Le géant de la tech est aussi spécialisé
                            dans le gaming <br></br> où de nombreux joueurs professionnels se fournissent et sont sponsorisés.
                        </p>
                        <a  className="bg-blue-500 font-bold text-white p-2 w-1/2 text-center text-xl rounded-md
                            hover:duration-500 transition duration-0 hover:bg-blue-600"
                            href='https://www.logitech.com/fr-fr'>
                            Voir
                        </a>
                    </div>
                    <img src='./logitech.png' className='w-60 h-30'/>
                </div>
            </Fade>
        </main>
    )
}