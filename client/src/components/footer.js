
export default function Footer(){

    return(
     <footer className=" mt-auto w-full bg-slate-800  py-10 px-4 sm:px-6 lg:px-8 mx-auto">
      {/* <!-- Grid --> */}
      <div className="text-center">
        <div className="flex justify-center">
          <a className="flex-none text-xl font-semibold text-black dark:text-white" href="/" aria-label="Brand">
            <img id="logo" className="w-48 h-auto sm:w-54" src="./shift3-removebg-preview.png" alt="logo brand game n tech"></img>
          </a>
        </div>
        {/* <!-- End Col --> */} 
    
        <div className="mt-3 text-sm">
          <p className="text-gray-500">Nous faisons partie de la <a className="font-semibold text-blue-600 hover:text-blue-700 dark:text-blue-500 dark:hover:text-blue-400" href="#">Game N Tech</a> family.</p>
          <p className="text-gray-500">© 2023 Game N Tech. Tous droits réservés.</p>
        </div>
    
      </div>
      {/* <!-- End Grid --> */}
    </footer>
    )
}