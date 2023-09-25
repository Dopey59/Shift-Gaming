import '../index.css';
import React from 'react';
import Banner from '../components/banniere'
import Perf from '../components/performances'
import Steelseries from '../components/steelseries'
import Logitech from '../components/logitech'
import Carousel from './react-carousel-resonsive';





export default function Homepage(){
    
    return(
        <main className='overflow-x-hidden'>
            <div>
                <Banner/>
            </div>

            <div className='bg-gradient-to-tr from-zinc-900 to-slate-900 text-white
                sm:p-12'>
                <Steelseries />
                <Logitech />
            </div>

            <div className='bg-gradient-to-tr from-zinc-900 to-slate-900'>
                <Perf />
            </div>
            
            <div>
                <div className='flex py-16 flex-col justify-center items-center
                sm:text-2xl text-xl text-center bg-gradient-to-tr from-zinc-800 to-slate-900 text-white'>
                    <h1 >Obtiens tout tes jeux moins chers et rapidement avec Instant Gaming.</h1>
                </div>
            </div>
                <Carousel/>
            
        </main>
    );
}