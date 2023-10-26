"use client"

import axios from "axios"
import { useEffect } from "react"


export default function HiddenComp(){

    useEffect(()=>{

        axios.get(`${process.env.NEXT_PUBLIC_STRAPI_URL}/api/products/9`).then(resp=>{

        }).catch(err=>{

        })

    },[])


    return <div className="hidden">I am hidden bro</div>
}