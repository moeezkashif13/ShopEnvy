"use client"

import Navbar from '../Navbar';
import Image from 'next/image';

import {AiFillStar, AiOutlineShoppingCart} from 'react-icons/ai'
import { useEffect, useRef, useState } from 'react';
import { useSelector } from 'react-redux';
import Link from 'next/link';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';

const responsive = {
  superLargeDesktop: {
    // the naming can be any, depends on you.
    breakpoint: { max: 4000, min: 3000 },
    items: 5
  },
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 1
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 1
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1
  }
};


export const FinalSlider = ()=>{


  return <div className='slidesContainer  h-screen  flex flex-nowrap overflow-auto hideScrollbar w-full relative'>

<div className=' z-30 w-full absolute left-0 text-white '>
<Navbar/>
</div>

<div className='z-20 w-full h-full absolute left-0 ' style={{backgroundColor:'rgba(0,0,0,0.4)'}}></div>


    {[
      'https://res.cloudinary.com/dtcwpaba5/image/upload/c_scale,q_100,w_1000/v1698402740/Hero%20Sect%20Images%20Shop%20Envy/rrkif7zf7j5suqpj931m.jpg',
          
          // 'https://res.cloudinary.com/dtcwpaba5/image/upload/q_80,w_1000/v1698402732/Hero%20Sect%20Images%20Shop%20Envy/xff5j4qs4h4shvmp9og0.webp',
          
          
          
          
          // 'https://res.cloudinary.com/dtcwpaba5/image/upload/c_scale,q_80,w_1000/v1698402759/Hero%20Sect%20Images%20Shop%20Envy/yzuqz2afefwinbfxobwh.webp'
        
        
        
        ].map((elem,index)=>{
              return <div className={`${index==0&&'firstDiv'} z-10 w-full min-w-full flex-1`} key={index}>
                  
                  <Image src={elem} fill></Image>
                  
                  </div>
  
          })}


  </div>

}



export const SliderCheck = ()=>{

  const [showSlider,setShowSlider] = useState(false);

  useEffect(()=>{
    setShowSlider(true)
  },[])

  return showSlider&&<div>
    
    <div className=' z-20 w-full absolute left-0 text-white '>
<Navbar/>
</div>

<div className='z-10 w-full h-full absolute left-0 ' style={{backgroundColor:'rgba(0,0,0,0.4)'}}></div>
    
    
     <Carousel
  swipeable={false}
  draggable={false}
  showDots={false}
  arrows={false}
  focusOnSelect={false}
  
  responsive={responsive}
  ssr={true} // means to render carousel on server-side.
  infinite={true}
  autoPlaySpeed={1000}
  keyBoardControl={true}
  customTransition="all .5"
  transitionDuration={500}
  containerClass="carousel-container relative"

  dotListClass="custom-dot-list-style"
  
>


{[
          
          'https://res.cloudinary.com/dtcwpaba5/image/upload/q_80,w_1000/v1698402732/Hero%20Sect%20Images%20Shop%20Envy/xff5j4qs4h4shvmp9og0.webp',
          
          'https://res.cloudinary.com/dtcwpaba5/image/upload/c_scale,q_80,w_1000/v1698402740/Hero%20Sect%20Images%20Shop%20Envy/rrkif7zf7j5suqpj931m.jpg',
          
          
          
          'https://res.cloudinary.com/dtcwpaba5/image/upload/c_scale,q_80,w_1000/v1698402759/Hero%20Sect%20Images%20Shop%20Envy/yzuqz2afefwinbfxobwh.webp'].map((elem,index)=>{
              return <div className='z-10 h-screen' key={index}>
                  
                  <Image src={elem} fill></Image>
                  
                  </div>
  
          })}


</Carousel>

</div>


}



export const HeroSect = ()=>{

    const heroSectSliderRef = useRef();

    const [showSlider,setShowSlider] = useState(true);

   
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
        {[
          
        'https://res.cloudinary.com/dtcwpaba5/image/upload/q_80,w_1000/v1698402732/Hero%20Sect%20Images%20Shop%20Envy/xff5j4qs4h4shvmp9og0.webp',
        
        'https://res.cloudinary.com/dtcwpaba5/image/upload/c_scale,q_80,w_1000/v1698402740/Hero%20Sect%20Images%20Shop%20Envy/rrkif7zf7j5suqpj931m.jpg',
        
        
        
        'https://res.cloudinary.com/dtcwpaba5/image/upload/c_scale,q_80,w_1000/v1698402759/Hero%20Sect%20Images%20Shop%20Envy/yzuqz2afefwinbfxobwh.webp'].map((elem,index)=>{
            return <SplideSlide key={index}>
                
                <Image src={elem} fill></Image>
                
                {/* <img src={elem} className='w-full h-full max-w-full object-cover' alt="" /> */}
                
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

    const testimonialsResponsive = {
      superLargeDesktop: {
        // the naming can be any, depends on you.
        breakpoint: { max: 4000, min: 3000 },
        items: 3
      },
      desktop: {
        breakpoint: { max: 3000, min: 1024 },
        items: 3
      },
      tablet: {
        breakpoint: { max: 1024, min: 464 },
        items: 1
      },
      mobile: {
        breakpoint: { max: 464, min: 0 },
        items: 1
      }
    }

    useEffect(()=>{
      setShowSlider(true)
    },[])


    return(

        <div className='space-y-0 lg:space-y-7  '>

<div className='text-center text-3xl lg:text-5xl font-semibold'>
    What They Say
</div>



        {showSlider?      <Carousel
  swipeable={true}
  draggable={true}
  showDots={false}
  arrows={false}
  focusOnSelect={false}
  
  responsive={testimonialsResponsive}
  ssr={true} // means to render carousel on server-side.
  infinite={true}
  autoPlay={true}
  autoPlaySpeed={5000}
  
  pauseOnHover={false}
  keyBoardControl={true}
  customTransition="all .5"
  transitionDuration={5000}
  containerClass="carousel-container w-[90%] mx-auto pt-16"

  dotListClass="custom-dot-list-style"
  
>


        {testimonials.map((eachElem,key)=>{
            return <div key={key} className='px-3 pointer-events-none  flex items-center flex-col gap-y-2 '>
                
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


                </div>

        })}

  </Carousel>

    :null}

  </div>


    )


}



export const NavbarCartIcon = ()=>{

    const cartArray = useSelector(state=>state.usercart.cart)

    

    return <Link href='/checkout'  className='relative cursor-pointer'>
    <AiOutlineShoppingCart/>


    <div className='absolute text-xs font-semibold flex justify-center items-center -right-1 -bottom-1 w-4 h-4 rounded-full bg-yellow-500'>{cartArray.length}</div>

    </Link>



}