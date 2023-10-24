import { setUser } from "@/app/globalredux/features/userslice/userslice";
import axios from "axios";

import { useRouter } from "next/navigation";

import { useState } from "react"
import { useDispatch } from "react-redux";

export default function Logout (){

    const [showWarning,setShowWarning] = useState(false);


const router = useRouter();

const dispatch = useDispatch()

    return(
        
        <>
{showWarning&&
<div className="w-full h-full bg-[rgba(0,0,0,0.95)] flex justify-center items-center fixed top-0 left-0">

        <div className="w-1/2 bg-white  text-red-500 font-medium text-center text-2xl py-8 flex items-center flex-col gap-y-4">

        <p>Do you want to logout your account?</p>

<div className="flex gap-x-5">

<div onClick={()=>{

    axios.get('/api/logout').then(resp=>{
        
        router.push('/login')
        dispatch(setUser({}))
        

        
    })

}} className="cursor-pointer text-lg bg-red-500 text-white px-4 py-3 rounded-lg">Yes Logout</div>

<div onClick={()=>setShowWarning(false)} className="cursor-pointer text-lg bg-red-500 text-white px-4 py-3 rounded-lg">Don't Logout</div>


</div>


        </div>
</div>

}


        <div className="text-center text-xl font-semibold text-red-500 h-[250px] flex justify-center items-center bg-white">


<div onClick={()=>setShowWarning(true)} className="cursor-pointer bg-red-500 text-white px-4 py-3 rounded-lg">Logout</div>


        </div>

        </>



    )
}