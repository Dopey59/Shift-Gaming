import { Fade } from "react-awesome-reveal";
import { Link } from 'react-router-dom';

export default function CategoriePc(){
    return(
      <>
        <div className="flex flex-col">
            <div id="part" className="bannerOne relative">
                <img 
                    id="gamesPartner"
                    className="w-full h-auto"
                    src="https://images.unsplash.com/photo-1598550473359-433795503a0f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
                    alt="Votre image"
                />
                <div className="max-w-2xl mx-auto ">
                    <div className="hs-accordion-group flex">
                        <div className="sm:absolute sm:top-1/4 sm:bg-zinc-900 sm:p-12 rounded-xl left-2/4 opacity-90 mx-6 sm:transform sm:-translate-x-1/5 sm:-translate-y-1/2 ">
                            <div className="hs-accordion rounded-xl p-6 sm:hs-accordion-active:bg-rose-500" id="hs-basic-with-title-and-arrow-stretched-heading-two">
                                <button className="hs-accordion-toggle hs-accordion-active:text-black duration-0  group pb-3 inline-flex items-center justify-between gap-x-3 w-full sm:text-3xl font-semibold text-left transition sm:text-white" aria-controls="hs-basic-with-title-and-arrow-stretched-collapse-two">
                                    Chaises Gaming | Joue sur un petit nuage 
                                    <svg className="hs-accordion-active:hidden block w-3 h-3 text-gray-600 group-hover:text-blue-500" width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M2 5L8.16086 10.6869C8.35239 10.8637 8.64761 10.8637 8.83914 10.6869L15 5" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
                                    </svg>
                                    <svg className="hs-accordion-active:block hidden w-3 h-3 text-gray-600 group-hover:text-blue-500" width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M2 11L8.16086 5.31305C8.35239 5.13625 8.64761 5.13625 8.83914 5.31305L15 11" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
                                    </svg>
                                </button>
                                <div id="hs-basic-with-title-and-arrow-stretched-collapse-two" className="hs-accordion-content hidden w-full overflow-hidden transition-[height] duration-300" aria-labelledby="hs-basic-with-title-and-arrow-stretched-heading-two">
                                    <p className="sm:text-white">
                                    Améliore ta posture avec des chaises spécialement conçues pour ton confort sur de longues sessions de try hard sans mal de dos.
                                    Rekt propose également de personnaliser ta chaise avec ton pseudo ou la couleur de ton choix.
                                    </p>
                                    <div className="flex items-center  justify-start gap-5 mt-4">
                                        <a className="bg-zinc-900 font-bold text-white rounded p-2" target="_blank" href="https://track.effiliation.com/servlet/effi.click?id_compteur=22917775">Acheter</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="bannerTwo relative">
                <img 
                    id="gamesPartner"
                    className="w-full h-auto"
                    src="https://images3.alphacoders.com/589/589031.jpg"
                    alt="Votre image"
                />
                <div className="max-w-2xl mx-auto">
                    <div className="hs-accordion-group">
                        <div className="sm:absolute sm:top-1/4 sm:bg-zinc-900 sm:p-12 rounded-xl left-2/4 opacity-90 mx-6 sm:transform sm:-translate-x-1/5 sm:-translate-y-1/2 ">
                            <div className="hs-accordion rounded-xl p-6 sm:hs-accordion-active:bg-rose-500" id="hs-basic-with-title-and-arrow-stretched-heading-two">
                                <button className="hs-accordion-toggle hs-accordion-active:text-black duration-0  group pb-3 inline-flex items-center justify-between gap-x-3 w-full sm:text-3xl font-semibold text-left transition sm:text-white" aria-controls="hs-basic-with-title-and-arrow-stretched-collapse-two">
                                    Jeux-vidéos | Des promotions épiques
                                    <svg className="hs-accordion-active:hidden block w-3 h-3 text-gray-600 group-hover:text-blue-500" width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M2 5L8.16086 10.6869C8.35239 10.8637 8.64761 10.8637 8.83914 10.6869L15 5" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
                                    </svg>
                                    <svg className="hs-accordion-active:block hidden w-3 h-3 text-gray-600 group-hover:text-blue-500" width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M2 11L8.16086 5.31305C8.35239 5.13625 8.64761 5.13625 8.83914 5.31305L15 11" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
                                    </svg>
                                </button>
                                <div id="hs-basic-with-title-and-arrow-stretched-collapse-two" className="hs-accordion-content hidden w-full overflow-hidden transition-[height] duration-300" aria-labelledby="hs-basic-with-title-and-arrow-stretched-heading-two">
                                    <p className="sm:text-white" >
                                       Découvre nos 3 partenaires puissants pour te procurer les derniers jeux avec de grosses réductions (consoles & pc) toute l'année :
                                    </p>
                                    <div className="flex items-center  justify-start gap-5 mt-4">
                                        <a className="bg-zinc-900 font-bold text-white rounded p-2" target="_blank" href="https://www.instant-gaming.com/?igr=gamer-7232d0">Instant Gaming</a>
                                        <a className="bg-zinc-900 font-bold text-white rounded p-2" target="_blank" href="https://www.g2a.com/n/reflink-73d9e7b4d0">G2A</a>
                                        <a className="bg-zinc-900 font-bold text-white rounded p-2" target="_blank" href="https://www.kinguin.net/?gclid=Cj0KCQjw1OmoBhDXARIsAAAYGSEUfxOrFI4bJAJbrS76xW2K_YdbhaIpBPFvy3hrzcw0HsepEu4xuDMaAgISEALw_wcB">Kinguin</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="bannerOne relative">
                <img 
                    id="gamesPartner"
                    className="w-full h-auto"
                    src="https://images.unsplash.com/photo-1667380649409-0ba925fbaa9a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
                    alt="Votre image"
                />
                <div className="max-w-2xl mx-auto">
                    <div className="hs-accordion-group">
                        <div className="sm:absolute sm:top-1/4 sm:bg-zinc-900 sm:p-12 rounded-xl left-2/4 opacity-90 mx-6 sm:transform sm:-translate-x-1/5 sm:-translate-y-1/2 ">
                            <div className="hs-accordion rounded-xl p-6 sm:hs-accordion-active:bg-rose-500" id="hs-basic-with-title-and-arrow-stretched-heading-two">
                                <button className="hs-accordion-toggle hs-accordion-active:text-black duration-0  group pb-3 inline-flex items-center justify-between gap-x-3 w-full sm:text-3xl font-semibold text-left transition sm:text-white" aria-controls="hs-basic-with-title-and-arrow-stretched-collapse-two">
                                    High-Tech | Du reconditionné au neuf 
                                    <svg className="hs-accordion-active:hidden block w-3 h-3 text-gray-600 group-hover:text-blue-500" width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M2 5L8.16086 10.6869C8.35239 10.8637 8.64761 10.8637 8.83914 10.6869L15 5" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
                                    </svg>
                                    <svg className="hs-accordion-active:block hidden w-3 h-3 text-gray-600 group-hover:text-blue-500" width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M2 11L8.16086 5.31305C8.35239 5.13625 8.64761 5.13625 8.83914 5.31305L15 11" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
                                    </svg>
                                </button>
                                <div id="hs-basic-with-title-and-arrow-stretched-collapse-two" className="hs-accordion-content hidden w-full overflow-hidden transition-[height] duration-300" aria-labelledby="hs-basic-with-title-and-arrow-stretched-heading-two">
                                    <p className="sm:text-white">
                                        Les deux géants d'internet réunit au même endroit pour vous proposer encore plus d'économies sur vos achats.
                                        Rakuten & Amazon, disponibles dès maintenant pour vous servir. </p>
                                        <div className="flex items-center  justify-start gap-5 mt-4">
                                        <a className="bg-zinc-900 font-bold text-white rounded p-2" target="_blank" href="https://www.amazon.fr/?&_encoding=UTF8&tag=shiftgaming-21&linkCode=ur2&linkId=c4220a631f5c8848435c511e1eb593a3&camp=1642&creative=6746">Amazon</a>
                                        <a className="bg-zinc-900 font-bold text-white rounded p-2" target="_blank" href="https://fr.shopping.rakuten.com/?t=7051&gclid=Cj0KCQjwsp6pBhCfARIsAD3GZubqxGpQwnar6-xCeCzAao061yXf8f6ZqoKWecnlQ9b3q9LMF0CYBJ4aAmvQEALw_wcB">Rakuten</a>
                                    </div>
                                    
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
      </>
    )
}