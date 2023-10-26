"use client"

import { Splide, SplideSlide,SplideTrack } from '@splidejs/react-splide';
import '@splidejs/react-splide/css';
import Navbar from '../Navbar';
import Image from 'next/image';

import {AiFillStar} from 'react-icons/ai'
import { useEffect, useRef, useState } from 'react';


export const HeroSect = ()=>{

    const heroSectSliderRef = useRef();

    const [showSlider,setShowSlider] = useState(false);

    useEffect(()=>{

        setTimeout(() => {
        setShowSlider(true);
            
        }, 100);
        
    },[])


    return showSlider?<Splide  ref={heroSectSliderRef} className='relative  h-screen' hasTrack={ false } options={{
        arrows:false,
        pagination:false,
        autoplay:true,
        pauseOnHover:false,
        interval:4000,
        speed:2000,
        type:'loop'
    }} >




<div className=' z-20 w-full absolute left-0 text-white '>
<Navbar/>
</div>

<div className=' z-10 w-full h-full absolute left-0 ' style={{backgroundColor:'rgba(0,0,0,0.4)'}}></div>

    <SplideTrack className='h-full '>
        {['https://plus.unsplash.com/premium_photo-1676225680209-19a398a9b38a?auto=format&fit=crop&q=80&w=1469&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D','https://images.unsplash.com/photo-1550246140-480ae9bf13c6?auto=format&fit=crop&q=80&w=1470&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D','https://images.unsplash.com/photo-1496346530827-534816eed3be?auto=format&fit=crop&q=80&w=1470&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D','https://plus.unsplash.com/premium_photo-1661281366900-88b41445a004?auto=format&fit=crop&q=80&w=1470&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'].map((elem,index)=>{
            return <SplideSlide key={index}>
                
                {/* <Image src={elem} fill></Image> */}
                
                <img src={elem} className='w-full h-full max-w-full object-cover' alt="" />
                
                </SplideSlide>

        })}
    </SplideTrack>
  </Splide>:<div className='h-screen'></div>
  

}


export const Testimonials = ()=>{

    const [showSlider,setShowSlider] = useState(false);

    useEffect(()=>{

        setTimeout(() => {
            setShowSlider(true)
        }, 100);

    },[])

    return(

        <div className='space-y-0 lg:space-y-7  '>

<div className='text-center text-3xl lg:text-5xl font-semibold'>
    What They Say
</div>



        {showSlider?<Splide className='relative  ' hasTrack={ false }  options={{perPage:3,gap:'1.5rem',padding:'45px',arrows:false,pagination:false,breakpoints:{
            1000:{
                perPage:1,
                padding:'0'
            }
        }}} >



        <SplideTrack className=' pt-24 h-full text-center '>
        {[1,2,3,4,5,6,7,8,9,10,11].map((elem,key)=>{
            return <SplideSlide key={key} className='px-3 flex items-center flex-col gap-y-4 '>
                
                <div className='-mt-16 w-28 h-28  rounded-full'>
                    <img src="https://images.pexels.com/photos/7562185/pexels-photo-7562185.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" className='w-full h-full max-w-full object-cover rounded-full' alt="" />
                </div>
                
                <p>I absolutely love the fabric of Shop Envy Products. I received my parcel and the product is same as the model picture. Thank you I will order again </p>
                
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

    :null}

  </div>


    )


}