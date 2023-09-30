import { Fade } from "react-awesome-reveal";

export default function FeaturesBoulanger(){
    return(
        //  <!-- Features -->

        <>
        
        <Fade>
        <div id="part">
          <div className='flex flex-col sm:flex-row items-center justify-around p-4 md:p-12 '>
            <div className='p-6'>
              <img src='https://singledayfrance.com/asiadeal/uploads/2019/10/singleday-boulanger-740x370.png' alt="logo steelseries partenaire" className='w-60 rounded-xl h-auto'/>
            </div>
            <div className='sm:w-1/2 flex flex-col items-center gap-4'>
              <h1 className='text-xl sm:text-3xl md:text-4xl lg:text-4xl xl:text-4xl '>
                La boulangerie de l'high-tech
              </h1>              
              <a href='https://www.instant-gaming.com/?igr=gamer-7232d0' className="mr-2 inline-block text-white text-sm">
                <div className="group w-96 h-auto flex justify-center bg-white/[.05] hover:bg-white/[.1] border border-white/[.05] p-2 pl-4 rounded-full shadow-md">
                    En profiter
                </div>
            </a>  
            </div>
          </div>
        </div>
    <div className="max-w-[85rem] px-4 py-10 sm:px-6 lg:px-8 lg:py-14 mx-auto">
    {/* <!-- Tab Nav --> */}
    <nav className="max-w-6xl mx-auto grid grid-cols-2 sm:grid-cols-3 gap-2 sm:gap-4" aria-label="Tabs" role="tablist">
        <button type="button" className="hs-tab-active:bg-gray-100 hs-tab-active:hover:border-transparent text-center md:text-left hover:bg-gray-100 p-3 md:p-5 rounded-xl dark:hs-tab-active:bg-white/[.05] dark:hover:bg-gray-700 active" id="tabs-with-card-item-1" data-hs-tab="#tabs-with-card-1" aria-controls="tabs-with-card-1" role="tab">
        <span className="md:flex">
            <svg className="hidden md:block flex-shrink-0 md:mt-2 h-6 w-6 hs-tab-active:text-blue-600 text-gray-500 dark:hs-tab-active:text-blue-500 dark:text-gray-500" xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
            <path d="M5.5 2A3.5 3.5 0 0 0 2 5.5v5A3.5 3.5 0 0 0 5.5 14h5a3.5 3.5 0 0 0 3.5-3.5V8a.5.5 0 0 1 1 0v2.5a4.5 4.5 0 0 1-4.5 4.5h-5A4.5 4.5 0 0 1 1 10.5v-5A4.5 4.5 0 0 1 5.5 1H8a.5.5 0 0 1 0 1H5.5z"/>
            <path d="M16 3a3 3 0 1 1-6 0 3 3 0 0 1 6 0z"/>
            </svg>
            <span className="md:grow md:ml-5">
            <span className="hs-tab-active:text-blue-600 block font-semibold  dark:hs-tab-active:text-blue-500 dark:text-gray-200">Large Gamme d'Ordinateurs et de Périphériques</span>
            <span className="hidden lg:block mt-2 text-gray-200">Trouve ton stuff rare avec leurs large catalogue de produits informatique.
             Que ce soit pour le gaming, le travail ou le divertissement. 
           </span>
            </span>
        </span>
        </button>

        <button type="button" className="hs-tab-active:bg-gray-100 hs-tab-active:hover:border-transparent text-center md:text-left hover:bg-gray-100 p-3 md:p-5 rounded-xl dark:hs-tab-active:bg-white/[.05] dark:hover:bg-gray-700" id="tabs-with-card-item-2" data-hs-tab="#tabs-with-card-2" aria-controls="tabs-with-card-2" role="tab">
        <span className="md:flex">
            <svg className="hidden md:block flex-shrink-0 md:mt-2 h-6 w-6 hs-tab-active:text-blue-600 text-gray-500 dark:hs-tab-active:text-blue-500 dark:text-gray-500" xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
            <path fillRule="evenodd" d="M0 0h1v15h15v1H0V0Zm14.817 3.113a.5.5 0 0 1 .07.704l-4.5 5.5a.5.5 0 0 1-.74.037L7.06 6.767l-3.656 5.027a.5.5 0 0 1-.808-.588l4-5.5a.5.5 0 0 1 .758-.06l2.609 2.61 4.15-5.073a.5.5 0 0 1 .704-.07Z"/>
            </svg>
            <span className="md:grow md:ml-5">
            <span className="hs-tab-active:text-blue-600 block font-semibold  dark:hs-tab-active:text-blue-500 dark:text-gray-200">Service de Conseil et d'Assistance</span>
                <span className="hidden lg:block mt-2 text-gray-200">
                Boulanger offre un service de conseil expert pour aider les clients à choisir les produits informatiques qui correspondent le mieux à leurs besoins.
                </span>
            </span>
        </span>
        </button>

        <button type="button" className="hs-tab-active:bg-gray-100 hs-tab-active:hover:border-transparent text-center md:text-left hover:bg-gray-100 p-3 md:p-5 rounded-xl dark:hs-tab-active:bg-white/[.05] dark:hover:bg-gray-700" id="tabs-with-card-item-3" data-hs-tab="#tabs-with-card-3" aria-controls="tabs-with-card-3" role="tab">
        <span className="md:flex">
            <svg className="hidden md:block flex-shrink-0 md:mt-2 h-6 w-6 hs-tab-active:text-blue-600 text-gray-500 dark:hs-tab-active:text-blue-500 dark:text-gray-500" xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
            <path d="M5.52.359A.5.5 0 0 1 6 0h4a.5.5 0 0 1 .474.658L8.694 6H12.5a.5.5 0 0 1 .395.807l-7 9a.5.5 0 0 1-.873-.454L6.823 9.5H3.5a.5.5 0 0 1-.48-.641l2.5-8.5zM6.374 1 4.168 8.5H7.5a.5.5 0 0 1 .478.647L6.78 13.04 11.478 7H8a.5.5 0 0 1-.474-.658L9.306 1H6.374z"/>
            </svg>
            <span className="md:grow md:ml-5">
            <span className="hs-tab-active:text-blue-600 block font-semibold  dark:hs-tab-active:text-blue-500 dark:text-gray-200">Livraison et Installation à Domicile</span>
            <span className="hidden lg:block mt-2 text-gray-200">
            Boulanger propose des services de livraison et d'installation à domicile, ce qui facilite la mise en service de nouveaux équipements informatiques.
            </span>
            </span>
        </span>
        </button>
    </nav>
    {/* <!-- End Tab Nav --> */}

    {/* <!-- Tab Content --> */}
    <div className="mt-12 md:mt-16">
        <div id="tabs-with-card-1" role="tabpanel" aria-labelledby="tabs-with-card-item-1">
        {/* <!-- Devices --> */}
        <div className="max-w-[1140px] lg:pb-32 relative">
            {/* <!-- Mobile Device --> */}
            <figure className="hidden absolute bottom-0 left-0 z-[2] max-w-full w-60 h-auto mb-20 ml-20 lg:block">
            <div className="p-1.5 bg-gray-100 rounded-3xl shadow-[0_2.75rem_5.5rem_-3.5rem_rgb(45_55_75_/_20%),_0_2rem_4rem_-2rem_rgb(45_55_75_/_30%),_inset_0_-0.1875rem_0.3125rem_0_rgb(45_55_75_/_20%)] dark:bg-gray-700 dark:shadow-[0_2.75rem_5.5rem_-3.5rem_rgb(0_0_0_/_20%),_0_2rem_4rem_-2rem_rgb(0_0_0_/_30%),_inset_0_-0.1875rem_0.3125rem_0_rgb(0_0_0_/_20%)]">
                <img className="max-w-full h-auto rounded-[1.25rem]" src="https://images.unsplash.com/photo-1537498425277-c283d32ef9db?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2078&q=80" alt="z"/>
            </div>
            </figure>
            {/* <!-- End Mobile Device --> */}

            {/* <!-- Browser Device --> */}
            <figure className="ml-auto mr-20 relative z-[1] max-w-full w-[50rem] h-auto rounded-b-lg shadow-[0_2.75rem_3.5rem_-2rem_rgb(45_55_75_/_20%),_0_0_5rem_-2rem_rgb(45_55_75_/_15%)] dark:shadow-[0_2.75rem_3.5rem_-2rem_rgb(0_0_0_/_20%),_0_0_5rem_-2rem_rgb(0_0_0_/_15%)]">
            <div className="relative flex items-center max-w-[50rem] bg-white border-b border-gray-100 rounded-t-lg py-2 px-24 dark:bg-gray-800 dark:border-gray-700">
                <div className="flex space-x-1 absolute top-2/4 left-4 -translate-y-1">
                <span className="w-2 h-2 bg-gray-200 rounded-full dark:bg-gray-700"></span>
                <span className="w-2 h-2 bg-gray-200 rounded-full dark:bg-gray-700"></span>
                <span className="w-2 h-2 bg-gray-200 rounded-full dark:bg-gray-700"></span>
                </div>
                <div className="flex justify-center items-center w-full h-full bg-gray-200 text-[.25rem]  rounded-sm sm:text-[.5rem] dark:bg-gray-700 dark:text-gray-200">www.game-n-tech.fr</div>
            </div>

            <div className="bg-gray-800 rounded-b-lg">
                <img className="max-w-full h-auto rounded-b-lg" src="https://images.unsplash.com/photo-1537498425277-c283d32ef9db?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2078&q=80" alt="y"/>
            </div>
            </figure>
            {/* <!-- End Browser Device --> */}
        </div>
        {/* <!-- End Devices --> */}
        </div>

        <div id="tabs-with-card-2" className="hidden" role="tabpanel" aria-labelledby="tabs-with-card-item-2">
        {/* <!-- Devices --> */}
        <div className="max-w-[1140px] lg:pb-32 relative">
            {/* <!-- Mobile Device --> */}
            <figure className="hidden absolute bottom-0 left-0 z-[2] max-w-full w-60 h-auto mb-20 ml-20 lg:block">
            <div className="p-1.5 bg-gray-700 rounded-3xl shadow-[0_2.75rem_5.5rem_-3.5rem_rgb(0_0_0_/_20%),_0_2rem_4rem_-2rem_rgb(0_0_0_/_30%),_inset_0_-0.1875rem_0.3125rem_0_rgb(0_0_0_/_20%)]">
                <img className="max-w-full h-auto rounded-[1.25rem]" src="https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2072&q=80" alt="w"/>
            </div>
            </figure>
            {/* <!-- End Mobile Device --> */}

            {/* <!-- Browser Device --> */}
            <figure className="ml-auto mr-20 relative z-[1] max-w-full w-[50rem] h-auto rounded-b-lg shadow-shadow-[0_2.75rem_3.5rem_-2rem_rgb(0_0_0_/_20%),_0_0_5rem_-2rem_rgb(0_0_0_/_15%)]">
            <div className="relative flex items-center max-w-[50rem] bg-gray-800 border-b border-gray-700 rounded-t-lg py-2 px-24">
                <div className="flex space-x-1 absolute top-2/4 left-4 -translate-y-1">
                <span className="w-2 h-2 bg-gray-700 rounded-full"></span>
                <span className="w-2 h-2 bg-gray-700 rounded-full"></span>
                <span className="w-2 h-2 bg-gray-700 rounded-full"></span>
                </div>
                <div className="flex justify-center items-center w-full h-full bg-gray-700 text-[.25rem] text-gray-200 rounded-sm sm:text-[.5rem]">www.game-n-tech.fr</div>
            </div>

            <div className="bg-gray-800 rounded-b-lg">
                <img className="max-w-full h-auto rounded-b-lg" src="https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2072&q=80" alt="12"/>
            </div>
            </figure>
            {/* <!-- End Browser Device --> */}
        </div>
        {/* <!-- End Devices --> */}
        </div>

        <div id="tabs-with-card-3" className="hidden" role="tabpanel" aria-labelledby="tabs-with-card-item-3">
           
        {/* <!-- Devices --> */}
        <div className="max-w-[1140px] lg:pb-32 relative">
            {/* <!-- Mobile Device --> */}
            <figure className="hidden absolute bottom-0 left-0 z-[2] max-w-full w-60 h-auto mb-20 ml-20 lg:block">
            <div className="p-1.5 bg-gray-100 rounded-3xl shadow-[0_2.75rem_5.5rem_-3.5rem_rgb(45_55_75_/_20%),_0_2rem_4rem_-2rem_rgb(45_55_75_/_30%),_inset_0_-0.1875rem_0.3125rem_0_rgb(45_55_75_/_20%)] dark:bg-gray-700 dark:shadow-[0_2.75rem_5.5rem_-3.5rem_rgb(0_0_0_/_20%),_0_2rem_4rem_-2rem_rgb(0_0_0_/_30%),_inset_0_-0.1875rem_0.3125rem_0_rgb(0_0_0_/_20%)]">
                <img className="max-w-full h-auto rounded-[1.25rem]" src="https://images.unsplash.com/photo-1551825687-f9de1603ed8b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2069&q=80" alt="douze"/>
            </div>
            </figure>
            {/* <!-- End Mobile Device --> */}

            {/* <!-- Browser Device --> */}
            <figure className="ml-auto mr-20 relative z-[1] max-w-full w-[50rem] h-auto rounded-b-lg shadow-[0_2.75rem_3.5rem_-2rem_rgb(45_55_75_/_20%),_0_0_5rem_-2rem_rgb(45_55_75_/_15%)] dark:shadow-[0_2.75rem_3.5rem_-2rem_rgb(0_0_0_/_20%),_0_0_5rem_-2rem_rgb(0_0_0_/_15%)]">
            <div className="relative flex items-center max-w-[50rem] bg-white border-b border-gray-100 rounded-t-lg py-2 px-24 dark:bg-gray-800 dark:border-gray-700">
                <div className="flex space-x-1 absolute top-2/4 left-4 -translate-y-1">
                <span className="w-2 h-2 bg-gray-200 rounded-full dark:bg-gray-700"></span>
                <span className="w-2 h-2 bg-gray-200 rounded-full dark:bg-gray-700"></span>
                <span className="w-2 h-2 bg-gray-200 rounded-full dark:bg-gray-700"></span>
                </div>
                <div className="flex justify-center items-center w-full h-full bg-gray-200 text-[.25rem]  rounded-sm sm:text-[.5rem] dark:bg-gray-700 dark:text-gray-200">www.game-n-tech.fr</div>
            </div>

            <div className="bg-gray-800 rounded-b-lg">
                <img className="max-w-full h-auto rounded-b-lg" src="https://images.unsplash.com/photo-1551825687-f9de1603ed8b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2069&q=80" alt="d"/>
            </div>
            </figure>
            {/* <!-- End Browser Device --> */}
        </div>
        {/* <!-- End Devices --> */}
        </div>
    </div>
    {/* <!-- End Tab Content --> */}
    </div>
  </Fade>
 </>
    )
    

}