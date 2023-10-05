import React from 'react';
import { Link } from 'react-router-dom';

export default function NavbarHome(){
    return (
        <>
        <header className="mt-1 mb-6 flex flex-wrap md:justify-start md:flex-nowrap z-50 w-full text-sm">
          <nav className="mt-6 relative max-w-7xl w-full bg-white border border-gray-300 rounded-[36px] mx-2 py-3 px-4 md:flex md:items-center md:justify-between md:py-0 md:px-6 lg:px-8 xl:mx-auto bg-white/[.05] hover:bg-white/[.1] border-white/[.05] p-2 pl-4 shadow-md" aria-label="Global">
            <div className="flex items-center justify-between">
              <h1 className="flex-none text-xl font-semibold text-blue-700"aria-label="Brand">Shift Gaming</h1>
              <div className="md:hidden">
                <button type="button" className="hs-collapse-toggle p-2 inline-flex justify-center items-center gap-2 rounded-full border font-medium bg-white text-gray-700 shadow-sm align-middle hover:bg-gray-50 " data-hs-collapse="#navbar-collapse-with-animation" aria-controls="navbar-collapse-with-animation" aria-label="Toggle navigation">
                  <svg className="hs-collapse-open:hidden w-4 h-4" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
                    <path fill-rule="evenodd" d="M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5z"/>
                  </svg>
                  <svg className="hs-collapse-open:block hidden w-4 h-4" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
                    <path d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708z"/>
                  </svg>
                </button>
              </div>
            </div>
            <div id="navbar-collapse-with-animation" className="hs-collapse hidden overflow-hidden transition-all duration-300 basis-full grow md:block">
              <div className="flex flex-col gap-y-4 gap-x-0 mt-1 md:flex-row md:items-center md:justify-end md:gap-y-0 md:gap-x-7 md:mt-0 md:pl-7">
                <ul  className="flex flex-col gap-y-4 gap-x-0 mt-5 md:flex-row md:items-center md:justify-end md:gap-y-0 md:gap-x-7 md:mt-0 md:pl-7">
                  <li className="font-medium text-blue-600 md:py-6 " aria-current="page"><Link to="/">Accueil</Link></li>
                  <li className="font-medium text-gray-500 hover:text-gray-400 md:py-6text-gray-400hover:text-gray-500"><Link to="/About"> A propos </Link></li>
                  <li className="font-medium text-gray-500 hover:text-gray-400 md:py-6text-gray-400hover:text-gray-500"><Link to="/Contact"> Contact </Link></li>
                </ul>

                <div className="hs-dropdown [--strategy:static] md:[--strategy:fixed] [--adaptive:none] md:[--trigger:hover] md:py-4">
                  <button type="button" className="flex items-center w-full text-gray-500 hover:text-gray-400 font-mediumtext-gray-400hover:text-gray-500 ">
                    Catégories
                    <svg className="ml-2 w-2.5 h-2.5 text-gray-600" width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M2 5L8.16086 10.6869C8.35239 10.8637 8.64761 10.8637 8.83914 10.6869L15 5" stroke="currentColor" stroke-width="2" stroke-linecap="round"></path>
                    </svg>
                  </button>

                  <div className="hs-dropdown-menu transition-[opacity,margin] duration-[0.1ms] md:duration-[150ms] hs-dropdown-open:opacity-100 opacity-0 md:w-48 hidden z-10 bg-white md:shadow-md rounded-lg p-2bg-gray-800 mdborderborder-gray-700divide-gray-700 before:absolute top-full md:border before:-top-5 before:left-0 before:w-full before:h-5">
                    <ul className=''>
                      <li className="flex items-center gap-x-3.5 py-2 px-3 rounded-md text-sm text-gray-800 hover:bg-gray-100 focus:ring-2 focus:ring-blue-500text-gray-400hover:bg-gray-700hover:text-gray-300">
                        <Link to="/ComposantPc"> Composants PC </Link>
                      </li>
                    </ul>

                    <div className="hs-dropdown relative [--strategy:static] md:[--strategy:absolute] [--adaptive:none] md:[--trigger:hover]">
                      <button type="button" className="w-full flex justify-between items-center text-sm text-gray-800 rounded-md py-2 px-3 hover:bg-gray-100">
                        Guides
                        <svg className="md:-rotate-90 ml-2 w-2.5 h-2.5 text-gray-600" width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <path d="M2 5L8.16086 10.6869C8.35239 10.8637 8.64761 10.8637 8.83914 10.6869L15 5" stroke="currentColor" stroke-width="2" stroke-linecap="round"></path>
                        </svg>
                      </button>

                      <div className="hs-dropdown-menu transition-[opacity,margin] duration-[0.1ms] md:duration-[150ms] hs-dropdown-open:opacity-100 opacity-0 md:w-48 hidden z-10 md:mt-2 bg-white md:shadow-md rounded-lg p-2bg-gray-800 mdborderborder-gray-700divide-gray-700 before:absolute md:border before:-right-5 before:top-0 before:h-full before:w-5 top-0 right-full !mx-[10px]">
                       <ul>
                        <li className="flex items-center gap-x-3.5 py-2 px-3 rounded-md text-sm text-gray-800 hover:bg-gray-100 focus:ring-2 focus:ring-blue-500text-gray-400hover:bg-gray-700hover:text-gray-300">
                          <Link to="/GuidePc"> Guide Pc </Link>
                        </li>
                       </ul>
                      </div>
                    </div>
                    <ul>
                      <li className="flex items-center gap-x-3.5 py-2 px-3 rounded-md text-sm text-gray-800 hover:bg-gray-100 focus:ring-2 focus:ring-blue-500text-gray-400hover:bg-gray-700hover:text-gray-300">
                        <Link to="/Faq">FAQ</Link> 
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </nav>
        </header>
        </>
    )
}
