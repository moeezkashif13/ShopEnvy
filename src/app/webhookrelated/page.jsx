"use client"

import axios from "axios"
import { useEffect } from "react"

export default function WebhookRelated(){


    useEffect(()=>{

        const check = async()=>{
            await axios.post('/api/webhook',{hello:'helloo'}).then(resp=>{
                console.log(resp.data);
            }).catch(err=>{
                console.log(err);
            })
        }

        check()


    },[])


    return(
        <div>Webhook Related</div>
    )
}