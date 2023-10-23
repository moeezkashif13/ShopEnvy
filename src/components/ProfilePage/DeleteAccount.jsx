import { useState } from "react"

export default function DeleteAccount (){

    const [showWarning,setShowWarning] = useState(false);

    const confirmDeleteAccount = ()=>{

        setShowWarning(true)

setTimeout(() => {
    setShowWarning(false)
    
}, 4000);


    }


    return(
        
        <>
{showWarning&&
<div className="w-full h-full bg-[rgba(0,0,0,0.95)] flex justify-center items-center fixed top-0 left-0">

        <div className="w-1/2 bg-white  text-red-500 font-medium text-center text-2xl py-8 flex items-center flex-col gap-y-4">

        <p>Are you sure? This action is irreversible</p>

<div  className="cursor-pointer text-lg bg-red-500 text-white px-4 py-3 rounded-lg">Delete Account</div>

        </div>
</div>

}


        <div className="text-center text-xl font-semibold text-red-500 h-[250px] flex justify-center items-center">


<div onClick={confirmDeleteAccount} className="cursor-pointer bg-red-500 text-white px-4 py-3 rounded-lg">Delete Account</div>


        </div>

        </>



    )
}