import { useParams, usePathname, useRouter } from "next/navigation"
import { useEffect, useState } from "react";

export default function DemoAccount({demoAccount,setUsingDemoAccount}){

const params = usePathname()

console.log(params);

console.log(demoAccount);

const [btn,setBTN] = useState(false)

// const [fromRegisterPage,setFromRegisterPage] = useState(false);

useEffect(()=>{

    if(params.includes('register')){
        // setFromRegisterPage(true)
        window.localStorage.setItem('setFromRegisterPage',true)
    }


},[params,demoAccount])

useEffect(()=>{
    const hello =  <div className="bg-black text-white mx-auto font-semibold w-[250px]  text-center py-3 rounded-md cursor-pointer" onClick={()=>setUsingDemoAccount(true)} >Use Demo Account  {JSON.parse(window.localStorage.getItem('setFromRegisterPage'))&&params.includes('login')&&'Click again'} </div>

    setBTN(hello)
},[])


return (
        <div className="mt-3 space-y-3 text-center text-red-500 font-semibold">

        <p>If you don't want to register a new account, you can use this demo account by clicking on the button</p>

   {btn}

        </div>
    )

}