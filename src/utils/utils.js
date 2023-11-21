import { useParams, usePathname, useRouter, useSearchParams } from "next/navigation";
import toast from "react-hot-toast";

export const setRedirectRoute = ()=>{

    const params = window.location.pathname+window?.location?.search;

    sessionStorage.setItem('redirectURL',params)

}


export const goToRedirectRoute = (router)=>{


    const checkRedirectURL = sessionStorage.getItem('redirectURL')

    const gotValue = checkRedirectURL
    
    if(checkRedirectURL){
        sessionStorage.removeItem('redirectURL')
        
            router.push(gotValue)
            
    }else{
        sessionStorage.removeItem('redirectURL')
        router.push('/profile')
    }

    
}