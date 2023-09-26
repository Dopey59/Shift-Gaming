
export default function Footer(){

    return(
        <footer id="contact" className="w-screen relative h-auto text-white bg-gradient-to-tr from-zinc-900 to-slate-900 p-12 ">
        <div className="footerElements sm:flex items-center justify-around">

          <div className="firstBlock flex flex-col sm:items-center text-center">
            <h1 className="contact text-md sm:text-xl font-semibold py-2 text-orange-600">Contact</h1>
            <div className="flex flex-col sm:items-center">
                <a className="duration-0 transition hover:duration-500 hover:text-zinc-300" href="Contact">gamentech.contact@gmail.com</a>
                <a className="duration-0 transition hover:duration-500 hover:text-zinc-300" href="Contact">Nous contacter</a>
            </div>
          </div>

          <div className="firstBlock flex flex-col sm:items-center text-center py-6">
            <h1 className="contact text-md sm:text-xl font-semibold py-2 text-orange-600">Aide</h1>
            <p className="duration-0 transition hover:duration-500 hover:text-zinc-300 hover:cursor-pointer">Qui sommes-nous ?</p>
            <p className="duration-0 transition hover:duration-500 hover:text-zinc-300 hover:cursor-pointer">F.A.Q</p>
          </div>

          <div className="firstBlock flex flex-col sm:items-center text-center py-2">
            <div className='flex justify-center items-center gap-4'>
            <img id="logo" className="w-32 h-auto" src="./gnt-logo.png" alt="logo game-n-tech">
            </img>
            </div>
          <div className="firstBlock flex flex-col sm:items-start text-center py-2">
            <h3>Tous drois réservés &copy;2023</h3>
          </div>
        </div>
          </div>
    </footer>
    )
}