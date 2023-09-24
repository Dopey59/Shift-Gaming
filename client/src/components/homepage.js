import '../index.css';
import React from 'react';
import Banner from '../components/banniere'
import Perf from '../components/performances'
import Steelseries from '../components/steelseries'
import Logitech from '../components/logitech'
import Banniere2 from './banniere2';
import Carousel from '../components/react-carousel-resonsive';




export default function Homepage(){
    
    return(
        <main className=''>
            <div className=''>
                <Banner/>
            </div>

            <div className='h-screen'>
                <Steelseries />
                <Logitech />
            </div>
            
            <div className='bg-black'>
                <Perf />
            </div>

            {/* <div className='py-14'>
                <Banniere2 />
            </div> */}

            <div>
                <Carousel/>
            </div>

        </main>
    );
}