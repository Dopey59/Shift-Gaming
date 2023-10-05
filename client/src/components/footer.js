
export default function Footer(){

    return(
     <footer className=" mt-auto w-full bg-gradient-to-tr from-zinc-900 to-slate-900 py-10 px-4 sm:px-6 lg:px-8 mx-auto">
      {/* <!-- Grid --> */}
      <div className="text-center">
        <div className="flex justify-center">
          <a className="flex-none text-xl font-semibold text-black dark:text-white" href="/" aria-label="Brand">
            <img height="auto" width="full"  id="logo" className="w-48 h-auto sm:w-54" src={require('../assets/shift3-removebg-preview.png')}  alt="logo shift gaming"></img>
          </a>
        </div>
        {/* <!-- End Col --> */} 
    
        <div className="mt-3 text-sm">
          <p className="text-gray-500">Nous faisons partie de la 
            <span className="font-semibold text-blue-600 hover:text-blue-700 dark:text-blue-500 dark:hover:text-blue-400"> Shift family</span>.
          </p>
          <p className="text-gray-500">© 2023 Shift Gaming. Tous droits réservés.</p>
        </div>
    
      </div>
      {/* <!-- End Grid --> */}
    </footer>
    )
}