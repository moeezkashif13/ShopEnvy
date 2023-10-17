"use client"

import toast, { Toaster } from 'react-hot-toast';


import { AiOutlineMinus, AiOutlinePlus,AiFillHeart } from "react-icons/ai"


const selectionNotification = (type)=>{

    toast.success(`${type} has been selected`,{
        duration:3000,
        position:'top-center',
    
    });

}


export default function Product(){
    return <div>
        


<div className="flex">


<div className="relative pl-16 py-8 pr-8 productpagebg w-[65%] space-y-8">
    

    <div className="font-semibold text-3xl">
        <p>Shop Envy</p>
    </div>



    <div className="  relative flex justify-between px-32">

    <div className="flex  flex-row-reverse  absolute left-0 bottom-0 text-6xl font-bold tracking-wider gap-x-2  rotate-180" style={{writingMode:'vertical-rl',textOrientation:'mixed',}}>
        {/* <p>lanosaeS </p>
        <p>sucof</p> */}
        <p>focus</p>
        <p>Seasonal</p>
    </div>


    <div className="w-[420px] h-[570px] bg-[#DAD3CF] ">

        <img src="/sampleimages/men-suit.png" className='w-full h-full max-w-full object-cover' alt="" />


    </div>



    <div className="border-2 shadow-2xl w-[320px] h-[430px] bg-[#DAD3CF]  absolute bottom-8 right-0"> 
    
    <img src="/sampleimages/men-suit.png" className='w-full h-full max-w-full object-cover' alt="" />

    
    </div>


    </div>





</div>


<div className="px-16 py-8 bg-[#F7F7F7] w-[35%] space-y-7">
    

<div className="space-y-2">
<p className="font-semibold  text-[#FF6C19]">NEW</p>


<div >

<div className="flex font-semibold text-lg">
    <p className="max-w-[240px]">Banton Sweater </p>
    <p className="ml-auto">$180.00</p>
</div>


<div className="text-sm text-[#323232] font-medium flex items-center">
    
    
    <p>Cropped turtleneck</p>

        <button   className='cursor-pointer ml-auto text-4xl '><AiFillHeart

className='text-black' /></button>


</div>

</div>

</div>


<div className="space-y-3">


<p className="font-semibold ">Select a color</p>


<div className="flex gap-x-3  text-xs font-semibold gap-y-4 flex-wrap">
    {['#000000',"#f8523f","#40E0D0","#DA70D6","#6495ED","#FF007F","#EE82EE","#FFD700","#43ddc9",].map((eachColor)=>{
        return <button   onClick={()=>selectionNotification('Color')} className="opacity-50 focus:opacity-100 flex justify-center items-center w-10 h-10 bg-white  cursor-pointer rounded-full" style={{backgroundColor:eachColor,transition:'all 0.5s'}}></button>


    })}
</div>


</div>

<div className="space-y-3 ">


<p className="font-semibold ">Select Quantity</p>


<div className="flex items-center justify-between font-semibold text-[#595757]">
   
<button  className="text-3xl flex justify-center items-center w-14 h-14 bg-white 

active:bg-black active:text-white


border-2 border-[#E3E3E3] cursor-pointer rounded-full" style={{transition:'all 0.3s'}}>

    <AiOutlineMinus/>

</button>

<p className="text-5xl font-bold ">1</p>

<button  className="text-3xl flex justify-center items-center w-14 h-14 bg-white 

active:bg-black active:text-white

border-2 border-[#E3E3E3] cursor-pointer rounded-full" style={{transition:'all 0.3s'}}>

    <AiOutlinePlus/>

</button>


   
</div>


</div>


<div className="space-y-3">


<p className="font-semibold ">Select a size</p>


<div className="flex gap-x-3   text-xs font-semibold gap-y-4 flex-wrap">
    {['2XS','XS','S','M','L','XL'].map((eachSize)=>{
        return <button onClick={()=>selectionNotification('Size')}  className="opacity-60 focus:opacity-100 flex justify-center items-center w-12 h-12 bg-white border-2 border-[#E3E3E3] cursor-pointer rounded-full" style={{transition:'all 0.3s'}}>{eachSize}</button>
    })}
</div>


</div>



{/* <div className="bg-black font-semibold text-white text-center py-3 text-lg ">
    Add to Cart - $180
</div> */}



<p className="text-[#424242] font-medium text-sm">Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo eos rem quod delectus reiciendis molestias fugiat nostrum voluptatum maiores quisquam.</p>



<div className="text-[#2D2D2D] font-medium">


{[1,2,3,4].map(()=>{
    return <div className="border-t-2 last:border-b-2 border-[#E3E3E3]">

    <div className="flex py-3.5">
    <p>Details</p>
    <div className="ml-auto">ic</div>
    </div>


    </div>
})}



</div>





</div>



</div>




<Toaster />




    </div>
}