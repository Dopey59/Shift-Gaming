import '../index.css';
import React from 'react';
import Banner from '../components/banniere'
import Perf from '../components/performances'
import Carousel from './react-carousel-resonsive';
import Footer from '../components/footer';
import Navbar from '../components/navbar';
import FeaturesSteelseries from '../components/featuresSteelseries';
import FeaturesLogitech from '../components/featuresLogitech'




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
                <FeaturesSteelseries />
                <FeaturesLogitech />
            </div>

            <div>
                <div className=' flex py-16 flex-col justify-center items-center bg-blue-900 bg-gradient-to-b from-zinc-900/[.15] via-transparent sm:text-3xl text-xl text-center text-white'>
                    <h1 >Obtiens tout tes jeux moins chers et rapidement avec Instant Gaming.</h1>
                </div>
            </div>
                <Carousel/>
                
            <div className='bg-gray-900'>
                <Perf />
            </div>
                <Footer/>
        </main>
    );
}