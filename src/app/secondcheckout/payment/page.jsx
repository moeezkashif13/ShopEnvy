"use client"

import SecondCart from "@/components/Checkout/SecondCart";
import { InputField } from "../page";

import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";
import { useEffect, useState } from "react";
import axios from "axios";
import TempStripeCheckoutForm from "@/components/TempStripeCheckoutForm";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useSelector } from "react-redux";
import { createOrderInStrapi } from "@/utils/createOrderInStrapi";


// Make sure to call loadStripe outside of a component’s render to avoid
// recreating the Stripe object on every render.
// This is your test publishable API key.
const stripePromise = loadStripe(process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY);




export default function SecondPaymentPage(){


useEffect(async ()=>{
        

    // const createdOrder = await createOrderInStrapi();

    // console.log(createdOrder);
    


},[])


        


    return <div className="flex">


    {/* <SecondCart/> */}



    <div className="w-1/2  px-20 py-12 space-y-5">

<p className="text-2xl font-semibold">Your Payment Details</p>



<div className="py-3.5 rounded-lg bg-[#093125] text-white font-semibold cursor-pointer text-center">Continue to confirmation</div>



<p className="text-center ">By confirming your payment, you allow to charge your card for this and future payment in accordance with terms.</p>




</div>



    </div>

}