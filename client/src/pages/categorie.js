export default function Categorie() {   
    return(
        <>
         <div className="flex flex-col py-12 gap-4 mx-6">
            <h1 className='sm:text-3xl text-2xl font-semibold'> | Nos partenaires</h1>
        </div>
        {/* <!-- Card Blog --> */}
        <div className="max-w-[90rem] px-4 py-10 sm:px-6 lg:px-8 lg:py-14 mx-auto">
          {/* <!-- Grid --> */}
          <div className="grid lg:grid-cols-2 lg:gap-y-16 gap-10">
            {/* <!-- Card --> */}
            <a className="group rounded-xl overflow-hidden" href="https://www.amazon.fr/b?_encoding=UTF8&tag=shiftgaming-21&linkCode=ur2&linkId=6aa02ea3b6cb53ade1411543a096f7ef&camp=1642&creative=6746&node=340858031">
              <div className="sm:flex">
                <div className="flex-shrink-0 relative rounded-xl overflow-hidden w-full sm:w-56 h-44">
                  <img height="auto" width="full"  className="group-hover:scale-105 transition-transform duration-500 ease-in-out w-full h-full absolute top-0 left-0 object-cover rounded-xl" src="https://cdn.worldvectorlogo.com/logos/amazon-dark.svg" alt="Amazon site web"/>
                </div>

                <div className="flex flex-col mt-4 sm:mt-0 sm:ml-6 px-4 sm:px-0">
                  <h3 className="text-xl font-bold text-black">
                    Amazon
                  </h3>
                  <p className="mt-3 text-black">
                    Si tu recherches des pc gamer pas cher ou d'autres composants informatique tu es à la bonne adresse. 
                  </p>
                  <p className="mt-3 text-gray-500">
                    #PC #Cartes Graphiques #SSD #NVME #Ecrans #Consoles #Jeux..
                  </p>
                  <p className="mt-4 inline-flex items-center gap-x-1.5 text-blue-600 decoration-2 hover:underline font-medium">
                    Voir
                    <svg className="w-2.5 h-2.5" width="16" height="16" viewBox="0 0 16 16" fill="none">
                      <path d="M5.27921 2L10.9257 7.64645C11.1209 7.84171 11.1209 8.15829 10.9257 8.35355L5.27921 14" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
                    </svg>
                  </p>
                </div>
              </div>
            </a>
            {/* <!-- End Card --> */}

            {/* <!-- Card --> */}
            <a className="group rounded-xl overflow-hidden" href="https://fr.shopping.rakuten.com/">
              <div className="sm:flex">
                <div className="flex-shrink-0 relative rounded-xl overflow-hidden sm:w-56 h-44">
                  <img height="auto" width="full"  className="group-hover:scale-105 transition-transform duration-500 ease-in-out w-full h-full absolute top-0 left-0 object-cover rounded-xl" src="https://www.leparisien.fr/resizer/n9CXyU6DxxTB-P2ZvdX2kOBwEng=/arc-photo-lpguideshopping/eu-central-1-prod/public/RUQL4F7KCWA7PG2LA6Q2OHGRGA.jpg" alt="Rakuten logo"/>
                </div>

                <div className="flex-col mt-4 sm:mt-0 sm:ml-6 px-4 sm:px-0">
                  <h3 className="text-xl font-bold text-black">
                    Rakuten
                  </h3>
                  <p className="mt-3 text-black">
                    Rakuten est une entreprise Japonaise rassemblant un vaste catalogue high tech avec des prix compétitifs et un programme de fidélité pour ses clients.
                  </p>
                  <p className="mt-3 text-gray-400 ">
                    #Reconditionné #High-Tech #Gaming #Ecrans #Consoles #Jeux vidéos..
                  </p>
                  <p className="mt-4 inline-flex items-center gap-x-1.5 text-blue-600 decoration-2 hover:underline font-medium">
                    Voir
                    <svg className="w-2.5 h-2.5" width="16" height="16" viewBox="0 0 16 16" fill="none">
                      <path d="M5.27921 2L10.9257 7.64645C11.1209 7.84171 11.1209 8.15829 10.9257 8.35355L5.27921 14" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
                    </svg>
                  </p>
                </div>
              </div>
            </a>
            {/* <!-- End Card --> */}

            {/* <!-- Card --> */}
            <a className="group rounded-xl overflow-hidden" href="https://www.g2a.com/fr/">
              <div className="sm:flex">
                <div className="flex-shrink-0 relative rounded-xl overflow-hidden w-full sm:w-56 h-44">
                  <img height="auto" width="full"  className="group-hover:scale-105 transition-transform duration-500 ease-in-out w-full h-full absolute top-0 left-0 object-cover rounded-xl" src="https://upload.wikimedia.org/wikipedia/commons/9/95/G2A_Limited_company_logo.jpg" alt="G2a gaming"/>
                </div>

                <div className="flex-col mt-4 sm:mt-0 sm:ml-6 px-4 sm:px-0">
                  <h3 className="text-xl font-bold text-black">
                    G2A
                  </h3>
                  <p className="mt-3 text-black">
                    Tu trouves les jeux trop chers ? G2A à la solution ! Vous pourez également y trouver des abonnements Xbox & PSN moins chers.
                  </p>
                  <p className="mt-3 text-gray-400 ">
                    #Cartes cadeaux #PSN #Xbox live #DLC #Jeux..
                  </p>
                  <p className="mt-4 inline-flex items-center gap-x-1.5 text-blue-600 decoration-2 hover:underline font-medium">
                    Voir
                    <svg className="w-2.5 h-2.5" width="16" height="16" viewBox="0 0 16 16" fill="none">
                      <path d="M5.27921 2L10.9257 7.64645C11.1209 7.84171 11.1209 8.15829 10.9257 8.35355L5.27921 14" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
                    </svg>
                  </p>
                </div>
              </div>
            </a>
            {/* <!-- End Card --> */}

            {/* <!-- Card --> */}
            <a className="group rounded-xl overflow-hidden" href="https://www.kinguin.net/?gclid=Cj0KCQjw1OmoBhDXARIsAAAYGSEUfxOrFI4bJAJbrS76xW2K_YdbhaIpBPFvy3hrzcw0HsepEu4xuDMaAgISEALw_wcB">
              <div className="sm:flex">
                <div className="flex-shrink-0 relative rounded-xl overflow-hidden w-full sm:w-56 sm:h-44 h-96">
                  <img height="auto" width="full" className="group-hover:scale-105 transition-transform duration-500 ease-in-out sm:w-full sm:h-full absolute top-0 left-0 object-cover rounded-xl" src="https://static.kinguin.net/media/images/products/_kinguin-logo-800.jpg"/>
                </div>

                <div className="flex-col mt-4 sm:mt-0 sm:ml-6 px-4 sm:px-0">
                  <h3 className="text-xl font-bold text-black">
                    KINGUIN
                  </h3>
                  <p className="mt-3 text-black">
                    Comme ses 2 cousins : Instant Gaming et G2A, Kinguin propose des clés de jeux en réductions permanentes, mais aussi des clés windows, steam et bien d'autres.
                  </p>
                  <p className="mt-3 text-gray-400 ">
                    #Europe #Clés #Logiciels #Pré-commandes #DLC #Jeux..
                  </p>
                  <p className="mt-4 inline-flex items-center gap-x-1.5 text-blue-600 decoration-2 hover:underline font-medium">
                    Voir
                    <svg className="w-2.5 h-2.5" width="16" height="16" viewBox="0 0 16 16" fill="none">
                      <path d="M5.27921 2L10.9257 7.64645C11.1209 7.84171 11.1209 8.15829 10.9257 8.35355L5.27921 14" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
                    </svg>
                  </p>
                </div>
              </div>
            </a>
            {/* <!-- End Card --> */}
          </div>
          {/* <!-- End Grid --> */}
        </div>
        {/* <!-- End Card Blog --> */}
        </>
    )
}