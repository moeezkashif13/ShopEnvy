"use client"

import SecondCart from "@/components/Checkout/SecondCart"
import axios from "axios"
import Link from "next/link"
import { useRouter } from "next/navigation"
import { useEffect, useState } from "react"


export const InputField = ({text,placeholder,userLoggedIn,prefilled})=>{
  
    return <div className="space-y-1 ">
        <p>{text}</p>
        <input type="text" disabled={!userLoggedIn}  className="border-2 border-[#EAEAEA] outline-none px-4 py-2.5 rounded-lg w-full disabled:bg-gray-200  " 
        
        onKeyDown={(event)=>{
            if(!userLoggedIn){      //!userLoggedIn means IF USER IS NOT LOGGED IN
                event.preventDefault()
                return false
            }

            return true


        } } placeholder={placeholder} value={prefilled} />
    </div>
}



export default function SecondCheckout(){

    const router = useRouter()

    const [userLoggedIn,setUserLoggedIn] = useState({
        status:false,
        // message:'Logged in status'
    message:'You are not logged in so please login or register on ShopEnvy to continue the checkout process'
    })

    const [userDetails,setUserDetails] = useState({});


    useEffect(()=>{

        const isUserLoggedIn = async ()=>{

            try {
                
                const response = await axios.get('/api/getuserdetails');

                

            setUserLoggedIn({
                message:"You are logged in that's why we can prefill your data",
                status:true
            });

            setUserDetails(response.data.user)




        } catch (error) {
            setUserLoggedIn({
                message: 'You are not logged in so please login or register on ShopEnvy to continue the checkout process',
                status:false
            });
        }

        }

        // isUserLoggedIn()


    },[])
    



    return <div className="flex">


<SecondCart/>



        <div className="w-1/2  px-20 py-12 space-y-3">

        <p className="text-2xl font-semibold">Your Details</p>

   
        {
        
        
        userLoggedIn.status?<div><span className=" text-green-500">{userLoggedIn.message}</span></div>
        
        :
        
<div className="flex flex-col gap-y-4">
        <span className="text-red-500 w-full ">{userLoggedIn.message}</span>
            <div className="text-center text-xl">Proceed to <Link className="underline" href='/login'> Login </Link> OR <Link className="underline" href='/register'>Register</Link></div>

        </div>
}




<div className="space-y-5">


<InputField prefilled={userDetails.email} userLoggedIn={userLoggedIn.status}  text='Email' placeholder='example@gmail.com' />

<InputField  userLoggedIn={userLoggedIn.status}  text='Name on card' placeholder='John Smith' />


<InputField prefilled={userDetails.name} userLoggedIn={userLoggedIn.status}  text='Name' placeholder='Your name' />
<InputField userLoggedIn={userLoggedIn.status}  text='Address 1' placeholder='Your Address' />
<InputField userLoggedIn={userLoggedIn.status}  text='Zip Code' placeholder='Your Zip Code' />
<InputField userLoggedIn={userLoggedIn.status}  text='City' placeholder='Your City' />

</div>

 
<div onClick={()=>router.push('/secondcheckout/payment')} className="py-3.5 rounded-lg bg-[#093125] text-white font-semibold cursor-pointer text-center">Continue to payment</div>



<p className="text-center ">By confirming your payment, you allow to charge your card for this and future payment in accordance with terms.</p>




        </div>



    </div>
}