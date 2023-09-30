import '../index.css';
import React from 'react';
import Banner from '../components/banniere';
import Perf from '../components/performances';
import Footer from '../components/footer';
import Navbar from '../components/navbar';
import FeaturesLogitech from '../components/featuresLogitech';
import InstantFeature from '../components/instant-gaming';
import Categorie from '../components/categorie';
import FeaturesBoulanger from './featuresBoulanger';

export default function Homepage(){
    
    return(
        <main className='overflow-x-hidden'>
            <Navbar/>
            <div>
                <Banner/>
            </div>
            <div className='flex py-16 flex-col justify-center items-center
                sm:text-3xl text-xl text-center  bg-blue-900 bg-gradient-to-b from-zinc-900/[.15] via-transparent text-white'>
                <h1 >Des partenaires puissants pour toi.</h1>
            </div>
            <div className='bg-gradient-to-tr from-zinc-800 to-slate-900 text-white
                sm:p-12'>
                <FeaturesBoulanger />
                <FeaturesLogitech />
            </div>
            <div className='bg-gradient-to-tr from-zinc-900 to-slate-900 text-white'>
                <InstantFeature/>
            </div>
            <div className='flex py-16 flex-col justify-center items-center
                sm:text-3xl text-xl text-center  bg-blue-900 bg-gradient-to-b from-zinc-900/[.15] via-transparent text-white'>
                <h1>Catégories des meilleurs sites  pour économiser.</h1>
            </div>
            <div className='bg-gradient-to-tr from-zinc-900 to-slate-900'>
                <Categorie/>
            </div>
                
            <div className='bg-gradient-to-tr from-zinc-900 to-slate-900'>
                <Perf />
            </div>
                <Footer/>
        </main>
    );
}