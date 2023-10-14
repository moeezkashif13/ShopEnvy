"use client"

import { Splide, SplideSlide,SplideTrack } from '@splidejs/react-splide';
import '@splidejs/react-splide/css';
import Navbar from '../Navbar';
import Image from 'next/image';

import {AiFillStar} from 'react-icons/ai'


export const HeroSect = ()=>{

    return <Splide className='relative bg-red-500 h-screen' hasTrack={ false } options={{
        arrows:false,
        pagination:false,
        autoplay:true,
        interval:4000,
        speed:2000
    }} >

<div className=' z-20 w-full absolute left-0 text-white '>
<Navbar/>
</div>

<div className=' z-10 w-full h-full absolute left-0 ' style={{backgroundColor:'rgba(0,0,0,0.4)'}}></div>

    <SplideTrack className='h-full bg-pink-500'>
        {[1,2,3,4,5].map((elem)=>{
            return <SplideSlide >
                
                <Image src='/sampleimages/herosect.jpg' fill></Image>
                
                
                </SplideSlide>

        })}
    </SplideTrack>
  </Splide>
  

}


export const Testimonials = ()=>{


    return(

        <div >

<div className='text-center text-5xl font-semibold'>
    What They Say
</div>



        <Splide className='relative bg-red-500 pb-12' hasTrack={ false }  options={{perPage:3,gap:'1.5rem',padding:'45px',arrows:false,pagination:false}} >

        <SplideTrack className=' pt-24 h-full text-center bg-pink-500'>
        {[1,2,3,4,5,6,7,8,9,10,11].map((elem)=>{
            return <SplideSlide className='px-3 flex items-center flex-col gap-y-4 '>
                
                <div className='-mt-16 w-32 h-32 bg-yellow-500 rounded-full'></div>
                
                <p>I absolutely love the fabric of GulAhmed lawn. I received my parcel and the product is same as the model picture. Thank you I will order again </p>
                
                <div className='flex gap-x-1.5 text-2xl' style={{color:'gold'}}>

<AiFillStar/>
<AiFillStar/>
<AiFillStar/>
<AiFillStar/>
<AiFillStar/>

                </div>


                </SplideSlide>

        })}
    </SplideTrack>
  </Splide>
  </div>


    )


}