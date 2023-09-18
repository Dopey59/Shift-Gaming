import React from 'react';
import '../index.css';
import Banner from '../components/banniere'
import Perf from '../components/performances'
import Partenaire from '../components/partenaires'


import { Fade } from "react-awesome-reveal";
import Banniere2 from './banniere2';


export default function Homepage(){
    
    return(
        <main className=''>
            <div className=''>
                <Banner/>
            </div>

            <div className='py-24'>
                <Partenaire />
            </div>
            
            <div className='p-12 bg-slate-800'>
                <Perf />
            </div>

            <div className='py-24'>
                <Banniere2 />
            </div>


            {/* <div className='flex justify-around'>

            </div> */}

        </main>
    );
}