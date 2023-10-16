"use client"

import axios from "axios"
import { useRouter,useParams } from "next/navigation"
import { useEffect, useState } from "react"

export default function WelcomePage({params}){
// console.log(props);



    const [userConfirmed,setUserConfirmed] = useState(false)


    useEffect(()=>{

        const verifyEmailConfirmationCode = async ()=>{

            try {

const {confirmationcode} = params

const joined = confirmationcode.join('/')

                const response = await axios.get(`/api/confirm/${joined}`)

                setUserConfirmed(true)


            } catch (error) {
                console.log(error);
                setUserConfirmed(false)
            }

        }


        verifyEmailConfirmationCode()




    },[])



    return <div>


Welcome Page {userConfirmed?'Confirmed':'Not confirmed'}


    </div>

}