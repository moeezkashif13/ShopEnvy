

"use client"

import { refreshCart } from "@/app/globalredux/features/cart/cartSlice";
import { finalSelection, setChanges } from "@/app/globalredux/features/productslice/productslice";
import { clearCartAndItsRelated } from "@/utils/reduxrelated";
import Link from "next/link";
import { useEffect } from "react";
import { AiOutlineCheck } from "react-icons/ai";
import { useDispatch, useSelector } from "react-redux";

export default function OrderPlaced(){

    const userInfo = useSelector(state=>state.userRelated.userDataObj);
    const dispatch = useDispatch();


    useEffect(()=>{

        clearCartAndItsRelated(dispatch)

    
    },[])


    return <div className="flex justify-center items-center bg-[#F2F2F2]  h-screen">
        
        <div className="bg-white rounded-lg w-[600px] h-[430px]  flex flex-col items-center gap-y-4 justify-center">


<div className="text-[#EC2D89] border-[#EC2D89] min-w-[80px] min-h-[80px] border-2 text-5xl rounded-full flex items-center justify-center">
    <AiOutlineCheck/>
</div>



<p className="font-semibold text-lg capitalize">Hey {userInfo.name}</p>

<p className="text-3xl font-semibold">Your Order Has Been Received</p>

<p className="px-8 text-center">We'll send you a confirmation email as soon we dispatch your order. We will also set the order status to Dispatch. You can view status in your orders history by visiting your profile.</p>


<Link href={`/profile?visit=orders-history`} className="rounded-lg px-9 py-2.5 cursor-pointer bg-pink-500 text-center text-lg text-white font-medium">
    Check Status
</Link>



        </div>





    </div>

}