"use client"

import SecondCart from "@/components/Checkout/SecondCart"
import { useRouter } from "next/navigation"


export const InputField = ({text,placeholder})=>{
    return <div className="space-y-1 ">
        <p>{text}</p>
        <input type="text" className="border-2 border-[#EAEAEA] outline-none px-4 py-2.5 rounded-lg w-full " placeholder={placeholder} />
    </div>
}



export default function SecondCheckout(){

    const router = useRouter()


    return <div className="flex">


<SecondCart/>



        <div className="w-1/2  px-20 py-12 space-y-5">

        <p className="text-2xl font-semibold">Your Details</p>


<div className="space-y-5">


<InputField  text='Email' placeholder='example@gmail.com' />

<InputField  text='Name on card' placeholder='John Smith' />


<InputField  text='Name' placeholder='Your name' />
<InputField  text='Address 1' placeholder='Your Address' />
<InputField  text='Zip Code' placeholder='Your Zip Code' />
<InputField  text='City' placeholder='Your City' />

</div>

 
<div onClick={()=>router.push('/secondcheckout/payment')} className="py-3.5 rounded-lg bg-[#093125] text-white font-semibold cursor-pointer text-center">Continue to payment</div>



<p className="text-center ">By confirming your payment, you allow to charge your card for this and future payment in accordance with terms.</p>




        </div>



    </div>
}