import { faChartLine, faCircleCheck, faComputer, faPercent } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import '@fortawesome/fontawesome-svg-core/styles.css';

import { Fade } from "react-awesome-reveal";

export default function Perf(){
    return(
            <div className='flex flex-col-4 items-center justify-between p-6 text-white'>
                <Fade duration={1000} direction='up'>
                    <div className='flex flex-col items-center gap-2'>
                        <FontAwesomeIcon icon={faComputer} size='2xl'/>
                        <h1 className='text-2xl w-2/3 text-center'>Upgrade ton setup pour améliorer ton niveau sur tes jeux préférés.</h1>
                    </div>

                    <div className='flex flex-col items-center gap-2'>
                        <FontAwesomeIcon icon={faChartLine} size='2xl'/>
                        <h1 className='text-2xl w-2/3 text-center'>Optimise tes performances avec du matériel professionnel.</h1>
                    </div>

                    <div className='flex flex-col items-center gap-2'>
                        <FontAwesomeIcon icon={faPercent} size='2xl'/>
                        <h1 className='text-2xl w-2/3 text-center'>Profite des promotions du moment sur les plateformes de ton choix.</h1>
                    </div>

                    <div className='flex flex-col items-center gap-2'>
                        <FontAwesomeIcon icon={faCircleCheck} size='2xl'/>
                        <h1 className='text-2xl w-2/3 text-center'>Accède aux meilleurs sites de gaming et découvre les dernières nouveautés.</h1>
                    </div>

                </Fade>
            </div>
    )
}