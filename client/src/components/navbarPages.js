import React from 'react';
import { Link } from 'react-router-dom';

export default function NavbarPages(){
    return (
        <>
        <header className="flex flex-wrap sm:justify-start sm:flex-nowrap z-50 w-full absolute text-sm py-4">
          <nav className="max-w-[85rem] w-full mx-auto px-4 sm:flex sm:items-center sm:justify-between" aria-label="Global">
            <div className="flex items-center justify-between">
              <a className="flex-none text-xl font-semibold text-slate-600" href="/">
                Accueil
              </a>
              <div className="sm:hidden">
                <button type="button" className="hs-collapse-toggle bg-gray-200 rounded text-slate-600 p-2 inline-flex justify-center items-center gap-2  font-medium  shadow-sm align-middle  focus:outline-none  focus:ring-blue-600 transition-all text-sm " data-hs-collapse="#navbar-with-collapse" aria-controls="navbar-with-collapse" aria-label="Toggle navigation">
                  <svg className="hs-collapse-open:hidden w-4 h-4" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
                    <path fillRule="evenodd" d="M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5z"/>
                  </svg>
                  <svg className="hs-collapse-open:block hidden w-4 h-4" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
                    <path d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708z"/>
                  </svg>
                </button>
              </div>
            </div>
            <div id="navbar-with-collapse" className="hidden basis-full grow sm:block">
              <ul className="flex flex-row gap-5 sm:mt-0 sm:flex-row sm:items-center sm:justify-end sm:pl-5"> {/* Ajouter une marge supérieure uniquement sur mobile */}
                <li className="font-small text-slate-600 " aria-current="page"><Link to="/Contact">Contact</Link></li>
                <li className="font-small text-slate-600 "><Link to="/About">A propos</Link></li>
                <li className="font-small text-slate-600 "><Link to="/GuidePc">Guide Pc</Link></li>
                <li className="font-small text-slate-600 "><Link to="/Faq">FAQ</Link></li>
              </ul>
            </div>
          </nav>
        </header>
        </>
    )
}
