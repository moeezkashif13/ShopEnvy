"use client"

import Link from "next/link"
import { AiOutlineShoppingCart, AiOutlineUser } from "react-icons/ai"
import { useSelector } from "react-redux"

export const Navbar = ()=>{

    const cartArray = useSelector(state=>state.usercart.cart)


    return <div className="absolute w-full  px-12 py-5 flex justify-between h-[100px] text-white ">

<div></div>

<div>
    
    <img src="/logo.png"   className='w-[250px] h-full object-cover max-w-full' alt="" />

</div>


<div className="flex gap-x-4 text-2xl items-center ">


<Link href='/profile'><AiOutlineUser/></Link>


<Link href='/checkout' className='flex relative'>

<AiOutlineShoppingCart/>

<div className='w-6 h-6 absolute flex justify-center items-center font-semibold -right-3 -bottom-3 rounded-full bg-red-500 text-base'>{cartArray.length}</div>


</Link>



</div>




    </div>
}