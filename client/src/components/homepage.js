import '../index.css';
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




export default function Homepage(){
    
    return(
        <main className='overflow-x-hidden'>
            <NavbarHome/>

            <Banner/>
     

            <CategorieSection/>

            <div className='bg-gradient-to-r from-slate-900 to-slate-700 text-white'>
                <InstantFeature/>
            </div>

            <APropos/>

            <Stats/>

            <div className='bg-gray-100 '>
            <Categorie/>
            </div>

            <Testimonials/>

            <Footer/>
        </main>
    );
}