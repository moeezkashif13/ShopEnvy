"use client"

import Loader from "@/components/Loader"
import axios from "axios"
import { useRouter,useParams } from "next/navigation"
import { useEffect, useState } from "react"



export default function WelcomePage({params}){
// console.log(props);



    const [userConfirmed,setUserConfirmed] = useState(false)

    const [loading,setLoading] = useState(true);

    useEffect(()=>{

        setLoading(true);

        const verifyEmailConfirmationCode = async ()=>{

            try {

const {confirmationcode} = params

const joined = confirmationcode.join('/')

                const response = await axios.get(`/api/confirm/${joined}`)

                setUserConfirmed(true)
                setLoading(false);


            } catch (error) {
                console.log(error);
                setUserConfirmed(false)
        setLoading(false);

            }

        }


        verifyEmailConfirmationCode()




    },[])



    return loading?<Loader/>: <div className="text-center text-lg w-full">


{userConfirmed?'Email Confirmed':'Error in confirming your email'}


    </div>

}