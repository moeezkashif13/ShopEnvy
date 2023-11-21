"use client"


import axios from "axios"
import { useRouter, useSearchParams } from "next/navigation"

import { useEffect } from "react"

export const startGoogleOAuth =  async (router,setFormSubmitting)=>{

  setFormSubmitting({
    message:'',
    status:'submitting'
  })

    try {
    
      const response = await axios.post('/api/startgoogleoauth',{
        startprocess:true,
    
      })
    
      setFormSubmitting({
        message:'Redirecting to Google',
        status:'successfull'
      })
      
      router.push(response.data.url)
      
    
    
    } catch (error) {
      
        

        setFormSubmitting({
          message:'An error occured',
          status:'error'
        })


    
    }
    
      }


export const startTwitterOAuth =  async (router,setFormSubmitting)=>{

  setFormSubmitting({
    message:'',
    status:'submitting'
  })

          try {
          
          const response = await axios.post('/api/starttwitteroauth',{
          startprocess:true,
          })
          

          setFormSubmitting({
            message:'Redirecting to Twitter',
            status:'successfull'
          })

    router.push(response.data.twitterAuthorizeURL)

          // router.push(response.data.url)


          } catch (error) {

          

          setFormSubmitting({
            message:'An error occured',
            status:'error'
          })

          }

}



export const afterGettingAuthCode = (setFormSubmitting)=>{

    const searchParams = useSearchParams()
    const googleoauthError = searchParams.get('error')
    const googleoauthCode = searchParams.get('code')
    const oauth_token = searchParams.get('oauth_token')
    const oauth_verifier = searchParams.get('oauth_verifier')
  
    const router = useRouter()


    useEffect(()=>{
  
  
  if(googleoauthError){          //GOOGLE AUTH RELATED 
    
    redirect('https://google.com')
  
  }else if(googleoauthCode){     //GOOGLE AUTH RELATED 
    

    const state = searchParams.get('state')

    

    setFormSubmitting({message:'',status:'submitting'})

    axios.post(`${process.env.NEXT_PUBLIC_WEBSITE}/api/startgoogleoauth`,{
      afterredirection:true,
      authcode: googleoauthCode,
      state
    }).then(resp=>{

      
      setFormSubmitting({
        message:'Logged in successfully',
        status:'successfull'
      })

      router.push('/profile')


    }).catch(err=>{
      
      setFormSubmitting({message:err.message,status:'error'})

    })
  
  }else if(oauth_token&&oauth_verifier){    //TWITTER AUTH RELATED 

    setFormSubmitting({message:'',status:'submitting'})


    axios.post(`${process.env.NEXT_PUBLIC_WEBSITE}/api/starttwitteroauth`,{
      afterredirection:true,
      oauth_token,
      oauth_verifier
    }).then(resp=>{
      
      
      setFormSubmitting({
        message:'Logged in successfully',
        status:'successfull'
      })

      router.push('/profile')


    }).catch(err=>{
      

      setFormSubmitting({message:err.message,status:'error'})


    })


  }
  
  
    },[googleoauthError,googleoauthCode,oauth_token,oauth_verifier])




}




