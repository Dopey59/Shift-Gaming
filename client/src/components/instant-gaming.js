import { Fade } from "react-awesome-reveal";
import Carousel from "./carousel"

export default function InstantFeature() {
    return(
      // <!-- Features -->
    <div className="max-w px-4 py-10 sm:px-6 lg:px-8 lg:py-14 mx-auto bg-gradient-to-t from-zinc-900 via-zinc-900 to-zinc-900 ">
      {/* <!-- Title --> */}
      <div className="mx-auto max-w-2xl gap-y-3 flex flex-col mb-8 lg:mb-14 text-center">
        <h2 className="text-3xl lg:text-4xl font-bold ">
          Les jeux aux plus <span className="text-rose-500 ">bas prix</span> du marché
        </h2>
        <p className="mt-3 dark:text-gray-200">
          Jusqu'à 90% de réductions sur tes jeux préférés avec Instant Gaming!</p>     
      </div>
      {/* <!-- End Title --> */}
     
      <Fade direction="right">
        <Carousel/>
      <Fade/>

      <Fade direction="up">
      {/* <!-- Grid --> */}
      <div className="mx-auto max-w-3xl grid grid-cols-12 gap-6 mt-14 lg:gap-8">
        {/* <!-- Icon Block --> */}
        <div className="col-span-6 sm:col-span-4 text-center">
          <svg className="mx-auto h-auto w-7 md:w-9 text-gray-800 dark:text-gray-200" xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="text-white bi bi-people-fill" viewBox="0 0 16 16">
            <path d="M7 14s-1 0-1-1 1-4 5-4 5 3 5 4-1 1-1 1H7Zm4-6a3 3 0 1 0 0-6 3 3 0 0 0 0 6Zm-5.784 6A2.238 2.238 0 0 1 5 13c0-1.355.68-2.75 1.936-3.72A6.325 6.325 0 0 0 5 9c-4 0-5 3-5 4s1 1 1 1h4.216ZM4.5 8a2.5 2.5 0 1 0 0-5 2.5 2.5 0 0 0 0 5Z"/>
            </svg>
          </svg>
          <div className="mt-2 sm:mt-6">
            <h3 className="text-lg font-semibold">
              Multi-Plateforme
            </h3>
          </div>
        </div>
        {/* <!-- End Icon Block --> */}

        {/* <!-- Icon Block --> */}
        <div className="col-span-6 sm:col-span-4 text-center">
          <svg className="mx-auto h-auto w-7 md:w-9 text-gray-800 dark:text-gray-200" xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="text-white bi bi-clock-history" viewBox="0 0 16 16">
            <path d="M8.515 1.019A7 7 0 0 0 8 1V0a8 8 0 0 1 .589.022l-.074.997zm2.004.45a7.003 7.003 0 0 0-.985-.299l.219-.976c.383.086.76.2 1.126.342l-.36.933zm1.37.71a7.01 7.01 0 0 0-.439-.27l.493-.87a8.025 8.025 0 0 1 .979.654l-.615.789a6.996 6.996 0 0 0-.418-.302zm1.834 1.79a6.99 6.99 0 0 0-.653-.796l.724-.69c.27.285.52.59.747.91l-.818.576zm.744 1.352a7.08 7.08 0 0 0-.214-.468l.893-.45a7.976 7.976 0 0 1 .45 1.088l-.95.313a7.023 7.023 0 0 0-.179-.483zm.53 2.507a6.991 6.991 0 0 0-.1-1.025l.985-.17c.067.386.106.778.116 1.17l-1 .025zm-.131 1.538c.033-.17.06-.339.081-.51l.993.123a7.957 7.957 0 0 1-.23 1.155l-.964-.267c.046-.165.086-.332.12-.501zm-.952 2.379c.184-.29.346-.594.486-.908l.914.405c-.16.36-.345.706-.555 1.038l-.845-.535zm-.964 1.205c.122-.122.239-.248.35-.378l.758.653a8.073 8.073 0 0 1-.401.432l-.707-.707z"/>
            <path d="M8 1a7 7 0 1 0 4.95 11.95l.707.707A8.001 8.001 0 1 1 8 0v1z"/>
            <path d="M7.5 3a.5.5 0 0 1 .5.5v5.21l3.248 1.856a.5.5 0 0 1-.496.868l-3.5-2A.5.5 0 0 1 7 9V3.5a.5.5 0 0 1 .5-.5z"/>
          </svg>
          </svg>
          <div className="mt-2 sm:mt-6">
            <h3 className="text-lg font-semibold">
              Livraison Instantanée
            </h3>
          </div>
        </div>
        {/* <!-- End Icon Block --> */}

        {/* <!-- Icon Block --> */}
        <div className="col-span-6 col-start-4 sm:col-span-4 text-center">
          <svg className="mx-auto h-auto w-7 md:w-9 text-gray-800 dark:text-gray-200" xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className=" text-white bi bi-lock" viewBox="0 0 16 16">
            <path d="M8 1a2 2 0 0 1 2 2v4H6V3a2 2 0 0 1 2-2zm3 6V3a3 3 0 0 0-6 0v4a2 2 0 0 0-2 2v5a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2V9a2 2 0 0 0-2-2zM5 8h6a1 1 0 0 1 1 1v5a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1V9a1 1 0 0 1 1-1z"/>
          </svg>
          </svg>
          <div className="mt-2 sm:mt-6">
            <h3 className="text-lg font-semibold">
              Sécurité Garantie
            </h3>
          </div>
        </div>
        {/* <!-- End Icon Block --> */}
      </div>
      {/* <!-- End Grid --> */}
      </Fade>

      {/* <!-- Card Section --> */}
<div class="max-w-[85rem] px-4 py-12 sm:py-12 sm:px-6 lg:px-8 lg:py-12 mx-auto">
  {/* <!-- Grid --> */}
</div>
{/* <!-- End Card Section --> */}
      </Fade>
    </div>
  )
}