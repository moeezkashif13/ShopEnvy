"use client"

import { Splide, SplideSlide,SplideTrack } from '@splidejs/react-splide';
import '@splidejs/react-splide/css';
import Navbar from '../Navbar';
import Image from 'next/image';

import {AiFillStar, AiOutlineShoppingCart} from 'react-icons/ai'
import { useEffect, useRef, useState } from 'react';
import { useSelector } from 'react-redux';
import Link from 'next/link';


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

const testimonials = [
    {
      name: "John S.",
      message: "Shop Envy has become my go-to for men's fashion. Their clothing quality is top-notch, and the style is always on point. I get compliments every time I wear something from them!"
    },
    {
      name: "Mark R.",
      message: "I've never been a fan of online shopping until I discovered Shop Envy. The hassle-free experience, fast shipping, and incredible range of clothing make it a winner in my book."
    },
    {
      name: "James W.",
      message: "Shop Envy is a game-changer for men's fashion. I can easily find trendy and classic pieces to suit my style. The website is user-friendly, and the prices are unbeatable!"
    },
    {
      name: "Brian M.",
      message: "I'm a discerning shopper, and Shop Envy has exceeded my expectations. The clothes fit perfectly, and the customer service is excellent. I'm a loyal customer for life!"
    },
    {
      name: "Kevin H.",
      message: "Shop Envy is the real deal when it comes to men's fashion. From casual to formal, their collection is diverse, and the quality is outstanding. I've never been disappointed."
    },
    {
      name: "Alex T.",
      message: "Shop Envy's clothing is not only stylish but also comfortable. I've ordered multiple items, and they've all become staples in my wardrobe. The value for money is exceptional."
    },
    {
      name: "Daniel L.",
      message: "As a fashion-conscious man, I appreciate Shop Envy's commitment to quality and style. The ease of browsing and ordering makes it a breeze to revamp your wardrobe."
    },
    {
      name: "Michael P.",
      message: "I've recommended Shop Envy to all my friends. The variety of men's clothing options is impressive, and the shopping experience is a pleasure. Shop Envy has raised the bar!"
    },
    {
      name: "William C.",
      message: "Shop Envy has made dressing well effortless. The clothing choices are outstanding, and the quick deliveries are a bonus. I can't imagine shopping anywhere else."
    },
    {
      name: "Andrew B.",
      message: "Shop Envy is a style savior for men. Their fashion range is on-trend, and the quality is unmatched. I've transformed my wardrobe with their amazing selection!"
    }
  ];
  

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
        {testimonials.map((eachElem,key)=>{
            return <SplideSlide key={key} className='px-3 flex items-center flex-col gap-y-2 '>
                
                <div className='-mt-16 w-28 h-28  rounded-full'>
                    <img src="https://images.pexels.com/photos/7562185/pexels-photo-7562185.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" className='w-full h-full max-w-full object-cover rounded-full' alt="" />
                </div>

                <p className='font-semibold text-lg'>{eachElem.name}</p>
                
                <p>{eachElem.message} </p>
                
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



export const NavbarCartIcon = ()=>{

    const cartArray = useSelector(state=>state.usercart.cart)

    console.log(cartArray);

    return <Link href='/checkout'  className='relative cursor-pointer'>
    <AiOutlineShoppingCart/>
    <div className='absolute text-xs font-semibold flex justify-center items-center -right-1 -bottom-1 w-4 h-4 rounded-full bg-yellow-500'>{cartArray.length}</div>
    
    </Link>
}