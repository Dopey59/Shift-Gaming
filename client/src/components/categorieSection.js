import { Fade } from "react-awesome-reveal";
import { Link } from 'react-router-dom';

export default function CategoriePc(){
    return(
      <>
      <Fade duration={1500}>
        <div className="flex flex-col py-12 gap-4 mx-6">
            <h1 id="part" className='sm:text-3xl text-2xl font-semibold'> | Catégories</h1>
        </div>
        {/* <!-- Card Blog --> */}
        <div className="max-w-[85rem] px-4 sm:px-6 lg:px-8 lg:py-14 mx-auto pb-6">
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
                <div className="group flex flex-col h-full bg-white border shadow-sm rounded-xl  border-gray-200">
                    <div className="h-52 flex flex-col justify-center items-center rounded-t-xl">
                        <img 
                            height="auto" width="full" 
                            className="rounded-xl h-52 w-full"
                            alt="Composant pc" 
                            src="https://images.unsplash.com/photo-1618209076877-3b577b275eef?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80">
                        </img>
                    </div>
                    <div className="p-4 md:p-6">
                        <span className="block mb-1 text-xs font-semibold uppercase text-green-500">
                            Disponible
                        </span>
                        <h3 className="text-xl text-black font-semibold">
                            Composants
                        </h3>
                        <p className="mt-3 text-gray-500">
                            Personnalise ton pc avec du matériel à un rapport qualité/prix étonnant.
                        </p>
                        <p className="mt-3 text-gray-500">
                            #Amazon
                        </p>
                    </div>
                    <Link to="/ComposantPc">
                        <div className="mt-auto flex border-t divide-x divide-gray-200 border-gray-200 ">
                            <div className="w-full py-3 px-4 hover:bg-blue-600  inline-flex justify-center items-center gap-2 rounded-br-xl font-medium bg-white text-black shadow-sm align-middle focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-white focus:ring-blue-600 transition-all text-sm sm:p-4 hover:border-gray-200 hover:text-white dark:focus:ring-offset-gray-800">
                                Voir
                            </div>
                        </div>
                    </Link>
                </div>

                <div className="group flex flex-col h-full bg-white border shadow-sm rounded-xl  border-gray-200">
                    <div className="h-52 flex flex-col justify-center items-center rounded-t-xl">
                        <img 
                            height="auto" width="full" 
                            className="rounded-xl h-52 w-full"
                            alt="Périphérique pc" 
                            src="https://images.unsplash.com/photo-1646771032500-27b440b2d947?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80">
                        </img>
                    </div>
                    <div className="p-4 md:p-6">
                        <span className="block mb-1 text-xs font-semibold uppercase text-green-500">
                            Disponible
                        </span>
                        <h3 className="text-xl text-black font-semibold">
                            Périphériques
                        </h3>
                        <p className="mt-3 text-gray-500">
                            Des écrans en 240hz pas cher, des souris avec un capteur optique performant et plus !
                        </p>
                        <p className="mt-3 text-gray-500">
                            #Amazon
                        </p>
                    </div>
                    <a href="https://www.amazon.fr/gp/search?ie=UTF8&tag=shiftgaming-21&linkCode=ur2&linkId=3eecbd78c00ed6f37f551beb741fece3&camp=1642&creative=6746&index=computers&keywords=peripherique gaming">
                        <div className="mt-auto flex border-t divide-x divide-gray-200 border-gray-200 ">
                            <div className="w-full py-3 px-4 hover:bg-blue-600  inline-flex justify-center items-center gap-2 rounded-br-xl font-medium bg-white text-black shadow-sm align-middle focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-white focus:ring-blue-600 transition-all text-sm sm:p-4 hover:border-gray-200 hover:text-white dark:focus:ring-offset-gray-800">
                                Voir
                            </div>
                        </div>
                    </a>
                </div>

                <div className="group flex flex-col h-full bg-white border shadow-sm rounded-xl  border-gray-200">
                    <div className="h-52 flex flex-col justify-center items-center rounded-t-xl">
                        <img 
                            height="auto" width="full" 
                            className="rounded-xl h-52 w-full"
                            alt="jeux vidéos pc consoles" 
                            src="https://images7.alphacoders.com/133/1330608.png">
                        </img>
                    </div>
                    <div className="p-4 md:p-6">
                        <span className="block mb-1 text-xs font-semibold uppercase text-green-500">
                            Disponible
                        </span>
                        <h3 className="text-xl text-black font-semibold">
                            Jeux vidéos
                        </h3>
                        <p className="mt-3 text-gray-500">
                            Faites vous plaisir sur pc ou console avec des jeux, xbox live ou carte psn en réduction permanente.
                        </p>
                        <p className="mt-3 text-gray-500">
                            #Instant Gaming
                        </p>
                    </div>
                    <a href="https://www.instant-gaming.com/?igr=gamer-7232d0">
                        <div className="mt-auto flex border-t divide-x divide-gray-200 border-gray-200 ">
                            <div className="w-full py-3 px-4 hover:bg-blue-600  inline-flex justify-center items-center gap-2 rounded-br-xl font-medium bg-white text-black shadow-sm align-middle focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-white focus:ring-blue-600 transition-all text-sm sm:p-4 hover:border-gray-200 hover:text-white dark:focus:ring-offset-gray-800">
                                Voir
                            </div>
                        </div>
                    </a>
                   
                </div>

                <div className="group flex flex-col h-full bg-white border shadow-sm rounded-xl  border-gray-200">
                    <div className="h-52 flex flex-col justify-center items-center rounded-t-xl">
                        <img 
                            height="auto" width="full" 
                            className="rounded-xl h-52 w-full"
                            alt="Chaise gaming ergonomique - personnalisé" 
                            src="https://rekt.fr/wp-content/uploads/2021/10/Chaises-top-1.png">
                        </img>
                    </div>
                    <div className="p-4 md:p-6">
                        <span className="block mb-1 text-xs font-semibold uppercase text-red-500">
                            Bientôt disponible
                        </span>
                        <h3 className="text-xl text-black font-semibold">
                            Chaise gaming
                        </h3>
                        <p className="mt-3 text-gray-500">
                        Plongez dans le confort ultime du gaming avec des chaises conçues pour des heures de jeu.
                        </p>
                        <p className="mt-3 text-gray-500">
                            #Rekt
                        </p>
                    </div>
                        <div className="mt-auto flex border-t divide-x divide-gray-200 border-gray-200 ">
                            <div className="w-full py-3 px-4 inline-flex text-gray-500 justify-center items-center gap-2 rounded-br-xl font-medium bg-white shadow-sm align-middle focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-white focus:ring-blue-600 transition-all text-sm sm:p-4 hover:border-gray-200  dark:focus:ring-offset-gray-800">
                                Indisponible
                            </div>
                        </div>
                </div>
            </div>
        </div>
      </Fade>
      </>
    )
}