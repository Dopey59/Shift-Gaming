import { faChartLine, faCircleCheck, faComputer, faPercent } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import '@fortawesome/fontawesome-svg-core/styles.css';

import { Fade } from "react-awesome-reveal";

export default function Perf(){
    return(
        <main className='sm:py-12 p-6 dark:bg-gray-900'>
            <div className='grid grid-cols-1 sm:grid-cols-4 text-white'>
                <Fade direction='down'>
                    <div className='flex flex-col sm:grid sm:grid-cols-4 sm:w-screen gap-12'>
                        <div className='flex flex-col items-center gap-4'>
                            <FontAwesomeIcon icon={faComputer} className="text-green-600" size='2xl'/>
                            <h1 className='text-lg sm:w-2/3  text-center'>Upgrade ton setup pour améliorer ton niveau sur tes jeux préférés.</h1>
                        </div>
                        <div className='flex flex-col items-center gap-4'>
                            <FontAwesomeIcon icon={faChartLine}className="text-green-600"  size='2xl'/>
                            <h1 className='text-lg sm:w-2/3 text-center '>Optimise tes performances avec du matériel professionnel.</h1>
                        </div>


                        <div className='flex flex-col items-center gap-4'>
                            <FontAwesomeIcon icon={faPercent} className="text-green-600" size='2xl'/>
                            <h1 className='text-lg sm:w-2/3 text-center '>Profite des promotions du moment sur les plateformes de ton choix.</h1>
                        </div>


                        <div className='flex flex-col items-center gap-4'>
                            <FontAwesomeIcon icon={faCircleCheck} className="text-green-600" size='2xl'/>
                            <h1 className='text-lg sm:w-2/3 text-center '>Accède aux meilleurs sites de gaming et découvre les dernières nouveautés.</h1>
                        </div>
                    </div>
                </Fade>
            </div>
        </main>
    )
}