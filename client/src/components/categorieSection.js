import { Fade } from "react-awesome-reveal";
import { Link } from 'react-router-dom';

export default function CategoriePc(){
    return(
      <>
      <div className="flex flex-col">
        <div className="bannerOne">
            <img 
            id="gamingChairPartner"
            className="w-full h-auto relative"
            src="https://images.unsplash.com/photo-1633545495735-25df17fb9f31?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2072&q=80">
            </img>
        </div>
        <div className="bannerTwo relative">
            <img 
                id="gamesPartner"
                className="w-full h-auto"
                src="https://images3.alphacoders.com/589/589031.jpg"
                alt="Votre image"
            />
            <div className="hs-accordion-group">
                <div className="hs-accordion  hs-accordion-active:bg-gray-100 rounded-xl p-6 hs-accordion-active:bg-white/[.05] active" id="hs-basic-with-title-and-arrow-stretched-heading-one">
                    <div className="absolute sm:w-1/2 top-1/4 bg-zinc-900 p-12 rounded-xl left-1/3 mx-6 transform -translate-x-1/2 -translate-y-1/2 ">
                            <button className="hs-accordion-toggle group pb-3 inline-flex items-center justify-between gap-x-3 w-full sm:text-4xl text-sm font-semibold text-left transition text-rose-500 " aria-controls="hs-basic-with-title-and-arrow-stretched-collapse-two">
                                Comment puis-je profiter des offres et des promotions sur Shift Gaming ?
                                <svg className="hs-accordion-active:hidden block w-3 h-3 text-gray-600" width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M2 5L8.16086 10.6869C8.35239 10.8637 8.64761 10.8637 8.83914 10.6869L15 5" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
                                </svg>
                                <svg className="hs-accordion-active:block hidden w-3 h-3 text-gray-600" width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M2 11L8.16086 5.31305C8.35239 5.13625 8.64761 5.13625 8.83914 5.31305L15 11" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
                                </svg>
                            </button>
                            <div id="hs-basic-with-title-and-arrow-stretched-collapse-two" className="hs-accordion-content hidden w-full overflow-hidden transition-[height] duration-300" aria-labelledby="hs-basic-with-title-and-arrow-stretched-heading-two">
                                <p className="text-white">
                                Pour profiter des offres et des promotions de nos sites partenaires, il vous suffit de naviguer sur notre plateforme, de choisir le site qui vous intéresse, et de suivre le lien de redirection. Vous serez alors dirigé vers le site partenaire pour profiter des offres en cours.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
      </>
    )
}