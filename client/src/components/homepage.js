import '../index.css';
import React from 'react';
import Banner from '../components/banniere';
import Perf from '../components/performances';
import Footer from '../components/footer';
import NavbarHome from '../components/navbarHome';
import InstantFeature from '../components/instant-gaming';
import Categorie from '../components/categorie';
import FeaturesBoulanger from './featuresBoulanger';
import FeaturesAmazon from '../components/featuresAmazon';
import Carousel from '../components/carousel';

export default function Homepage(){
    
    return(
        <main className='overflow-x-hidden'>
            <div className=''>
                <NavbarHome/>
            </div>
            <div className=''>
                <Banner/>
            </div>
            <div className='flex py-16 flex-col justify-center items-center
                sm:text-3xl text-xl text-center bg-gray-100 font-bold text-black
                sm:p-12'>
                <h1>Des partenaires puissants pour toi.</h1>
            </div>
            <div className=' bg-gray-100 text-white
                sm:p-12'>
                <FeaturesAmazon />
            </div>
            <div className='bg-gray-100 text-white
                sm:p-12'>
                <FeaturesBoulanger />
            </div>
            <div className='bg-slate-900 text-white'>
                <InstantFeature/>
            </div>
            <div className='flex py-16 flex-col justify-center items-center font-bold
                sm:text-3xl text-xl text-center bg-gray-100 text-black
                sm:p-12'>
                <h1>Catégories des meilleurs sites  pour économiser.</h1>
            </div>
            <div className='bg-gray-100 p-3 md:p-5 rounded-xl'>
                <Categorie/>
            </div>
            {/* <div className=''>
                <CategoriePc/>
            </div> */}
            <div>
                <Carousel/>
            </div>
            <div className='bg-gradient-to-tr from-zinc-900 to-slate-900'>
                <Perf />
            </div>
            <div>
                <Footer/>
            </div>
        </main>
    );
}