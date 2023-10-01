export default function Navbar(){
    return (
        <>
        <header className="flex flex-wrap sm:justify-start sm:flex-nowrap z-50 w-full bg-slate-800 bg-gradient-to-b from-violet-900/[.15] via-transparent  text-sm py-4">
          <nav className="max-w-[85rem] w-full mx-auto px-4 sm:flex sm:items-center sm:justify-between" aria-label="Global">
            <div className="flex items-center justify-between">
              <a className="flex-none text-xl font-semibold text-white" href="/">
                Accueil
              </a>
              <div className="sm:hidden">
                <button type="button" className="hs-collapse-toggle text-white p-2 inline-flex justify-center items-center gap-2  font-medium  shadow-sm align-middle  focus:outline-none  focus:ring-blue-600 transition-all text-sm " data-hs-collapse="#navbar-with-collapse" aria-controls="navbar-with-collapse" aria-label="Toggle navigation">
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
              <div className="flex flex-col gap-5 mt-5 sm:flex-row sm:items-center sm:justify-end sm:mt-0 sm:pl-5">
                <a className="font-small text-blue-500" href="Contact" aria-current="page">Contact</a>
                <a className="font-small text-gray-600 hover:text-gray-400 dark:text-gray-400 dark:hover:text-gray-500" href="About">A propos</a>
                <a className="font-small text-gray-600 hover:text-gray-400 dark:text-gray-400 dark:hover:text-gray-500" href="/GuidePc">Guide PC</a>
                <a className="font-small text-gray-600 hover:text-gray-400 dark:text-gray-400 dark:hover:text-gray-500" href="/Faq">FAQ</a>
                {/* Search Bar */}
              {/* <div className="containerSearchBar flex items-center">
                <input id="searchBar" className="outline-none bg-slate-800 border-b-2 border-slate-700 text-gray-400" 
                  placeholder="Recherche"
                  />
                  <div class="my-4 shadow rounded-lg overflow-hidden">
                    <table class="items min-w-full leading-normal"></table>
                  </div>
              </div> */}
              </div>
            </div>
          </nav>
        </header>
        </>
    )
}   