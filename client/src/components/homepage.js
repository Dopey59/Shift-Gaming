import '../index.css';
import '../App.css'
import React from 'react';
import Banner from '../components/banniere';
import Footer from '../components/footer';
import NavbarHome from '../components/navbarHome';
import InstantFeature from '../components/instant-gaming';
import Categorie from '../pages/categorie';
import CategorieSection from '../components/categorieSection';
import Stats from '../components/stats';
import Testimonials from '../components/testimonials';
import APropos from '../pages/aPropos';
import Recommandation from '../pages/recommandation';
import APIData from '../pages/apidata';



export default function Homepage(){
    
    return(
        <>
        <main className='overflow-x-hidden'>

            <div id='announce' className='bg-zinc-900 p-4 text-white items-center gap-3 flex justify-center sm:text-sm text-xs'>
                <h1>Offres informatiques, consoles & jeux en un clic</h1>
                <svg xmlns="http://www.w3.org/2000/svg" fill='white' width="24" height="24" viewBox="0 0 24 24"><path d="M21 5H3a1 1 0 0 0-1 1v4h.893c.996 0 1.92.681 2.08 1.664A2.001 2.001 0 0 1 3 14H2v4a1 1 0 0 0 1 1h18a1 1 0 0 0 1-1v-4h-1a2.001 2.001 0 0 1-1.973-2.336c.16-.983 1.084-1.664 2.08-1.664H22V6a1 1 0 0 0-1-1zM9 9a1 1 0 1 1 0 2 1 1 0 1 1 0-2zm-.8 6.4 6-8 1.6 1.2-6 8-1.6-1.2zM15 15a1 1 0 1 1 0-2 1 1 0 1 1 0 2z"></path></svg>
            </div>

            <NavbarHome/>

            <Banner/>
            <div className="bg-gray-100">
                <APIData/>
            </div>

            <Recommandation/>

            <CategorieSection/>

            <Stats/>
            <div className='bg-gradient-to-r from-slate-900 to-slate-700 text-white'>
                <InstantFeature/>
            </div>

            <APropos/>


            <Testimonials/>

            <Footer/>
        </main>
        </>
    );
}