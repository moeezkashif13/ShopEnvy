"use client"


import axios from "axios"
import { useSearchParams } from "next/navigation"

import { useEffect } from "react"

export const startGoogleOAuth =  async (router)=>{

    try {
    
      const response = await axios.post('/api/startgoogleoauth',{
        startprocess:true,
    
      })
    console.log(response.data);
    
    
    router.push(response.data.url)
    
    
    } catch (error) {
      
        console.log(error);
    
    }
    
      }


export const startTwitterOAuth =  async (router)=>{

          try {
          console.log('hellloooooo');
          const response = await axios.post('/api/starttwitteroauth',{
          startprocess:true,
          })
          console.log(response.data);

    router.push(response.data.twitterAuthorizeURL)

          // router.push(response.data.url)


          } catch (error) {

          console.log(error);

          }

}



export const afterGettingAuthCode = ()=>{

    const searchParams = useSearchParams()
    const googleoauthError = searchParams.get('error')
    const googleoauthCode = searchParams.get('code')
    const oauth_token = searchParams.get('oauth_token')
    const oauth_verifier = searchParams.get('oauth_verifier')
  
    useEffect(()=>{
  
  
  if(googleoauthError){          //GOOGLE AUTH RELATED 
    console.log('heellloooo');
    redirect('https://google.com')
  
  }else if(googleoauthCode){     //GOOGLE AUTH RELATED 
    console.log('codeeee');

    const state = searchParams.get('state')

    axios.post('http://localhost:3000/api/startgoogleoauth',{
      afterredirection:true,
      authcode: googleoauthCode,
      state
    }).then(resp=>{
      console.log(resp.data);
    }).catch(err=>{
      console.log(err,'errrrrrr');
    })
  
  }else if(oauth_token&&oauth_verifier){    //TWITTER AUTH RELATED 

    axios.post('http://localhost:3000/api/starttwitteroauth',{
      afterredirection:true,
      oauth_token,
      oauth_verifier
    }).then(resp=>{
      console.log(resp.data,'resp.data resp.data resp.data');
    }).catch(err=>{
      console.log(err,'errrrrrr');
    })


  }
  
  
    },[googleoauthError,googleoauthCode,oauth_token,oauth_verifier])




}




