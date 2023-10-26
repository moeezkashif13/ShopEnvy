"use client"

import SecondCart from "@/components/Checkout/SecondCart"
import axios from "axios"
import Link from "next/link"
import { usePathname, useRouter, useSearchParams } from "next/navigation"
import { useEffect, useState } from "react"
import { useForm } from "react-hook-form"

import { yupResolver } from "@hookform/resolvers/yup"
import * as yup from "yup"
import { useDispatch, useSelector } from "react-redux"
import Loader from "@/components/Loader"
import { toBase64 } from "@/utils/toBase64"
import { setUser } from "../globalredux/features/userslice/userslice"
import Head from "next/head"

const schema = yup
  .object({

    address: yup.string().required('Address is required'),

zipCode: yup.string()
.min(3, "Please enter more than 2 characters").max(5,'Maximum 5 characters allowed')
.required("Zip Code is required"),

city:yup.string().required('City Name is Required'),

country:yup.string().required('Country is Required'),

    


  })
  .required()


 const InputField = ({text,placeholder,userLoggedIn,prefilled,register,valueFromSchema,errors})=>{
  
    return <div className="space-y-1 ">
        <p>{text}</p>
        <input {...register(valueFromSchema)} type="text" disabled={!userLoggedIn}  className="border-2 border-[#EAEAEA]  outline-none px-4 py-2.5 rounded-lg w-full disabled:bg-gray-200  " 
        
        onKeyDown={(event)=>{
            if(!userLoggedIn){      //!userLoggedIn means IF USER IS NOT LOGGED IN
                event.preventDefault()
                return false
            }

            return true


        } } placeholder={placeholder} value={prefilled} />

{errors[valueFromSchema]?.message&&<p className="font-medium text-red-500">{errors[valueFromSchema]?.message}</p>}


    </div>
}


  


export default function SecondCheckout(){

    const router = useRouter()

    const [userLoggedIn,setUserLoggedIn] = useState({
        status:false,
        // message:'Logged in status'
    message:'You are not logged in, please login or register on Shop Envy to continue the checkout process'
    })

    const userDetails = useSelector(state=>state.userRelated.userDataObj);

    const {
        register,
        handleSubmit,
        formState: { errors },
      } = useForm({

        values: {
            address:userDetails.address,
            city:userDetails.city,
            zipCode:userDetails.zipCode,
            country:userDetails.country,
        },
        
        resolver: yupResolver(schema),
      })
    
    //   useEffect(() => {
    //     // Check to see if this is a redirect back from Checkout
    //     const query = new URLSearchParams(window.location.search);
    
    //     if (query.get("success")) {
    //       setMessage("Order placed! You will receive an email confirmation.");
    //     }
    
    //     if (query.get("canceled")) {
    //       setMessage(
    //         "Order canceled -- continue to shop around and checkout when you're ready."
    //       );
    //     }
    //   }, []);
    
    const cartArray = useSelector(state=>state.usercart.cart)
    const [convertedPreview,setConvertedPreview] = useState([])
    const dispatch = useDispatch()
    
    // useEffect( ()=>{

    //     const creatingImagePreviews = async ()=>{
    //         const previewImagesForUpload = cartArray.map(eachItem=>{
    //             return {
    //                 id :    eachItem.id,
    //                 url :   `${process.env.NEXT_PUBLIC_STRAPI_URL}${eachItem.ProductPreviewImage.url}`
    //             }
    //         })
    
    // await previewImagesForUpload.map(async eachImage=>{
    
    //              await toBase64(eachImage.url,(async dataUrl=>{
    
    //                 const formData = new FormData();
    
    //                 formData.set("image",dataUrl.split('base64,')[1])
                  
    //                 // console.log(formData.get("image"));
                    
    //               return await axios.post('https://api.imgbb.com/1/upload?key=ecd9aca473a2b9286cda81b8ac68dc53',formData,{
    //                   headers:{
    //                     "Content-Type" : "multipart/form-data"
    //                   }
    //                 }).then(resp=>{
    //                     console.log(resp.data.data);
    //                 //   return resp.data.data.thumb
    //                 // check.push(resp.data.data.thumb)
    //             //     setConvertedPreview(
    //             //          [...convertedPreview,{id:eachImage.id,data:resp.data.data.thumb}]
    //             // )
    
    //             setConvertedPreview(oldVal=>{
    //                 return [...oldVal,{id:eachImage.id,data:resp.data.data.thumb}]
    //             })
    
    
    //                 }).catch(err=>{
    //                   console.log(err);
    //                 })
    
    //             }))
                
    //         })
    //     }

    //     // creatingImagePreviews()


        
    // },[])



    const [submittingForm,setSubmittingForm] = useState(false);
    const [submittingMessage,setSubmittingMessage] = useState('');

      const onSubmit = async (data) => {
        if(!userLoggedIn.status||submittingForm||cartArray.length==0){
            return;
        };

        setSubmittingForm(true);
        setSubmittingMessage('Reaching out to Stripe....')
        console.log(data);
console.log(userDetails);




        try {


    if(userDetails.isOAuth && !userDetails.address){

        try {
        const response = await axios.post('/api/update-user',{userInfo:userDetails,fieldsToUpdate:data})
        
        dispatch(setUser(response.data.updatedUser));
        

        } catch (error) {
          throw new Error('Error while updating shipping details')
        }

}

 
      console.log('i shoulldddd runnnnn');

            const sessionURL = await axios.post('/api/create-checkout-session',{cartArray,convertedPreview,userDetails})

        setSubmittingForm(false);

        setSubmittingMessage('Redirecting you to Stripe....')


        setTimeout(() => {
        router.push(sessionURL.data.session)
        }, 1000);
        


    } catch (error) {
        console.log(error);
        setSubmittingForm(false)  
        setSubmittingMessage('An error occured')

    }

      }
    
    

    useEffect(()=>{

        const isUserLoggedIn = async ()=>{

            try {
                
                const response = await axios.get('/api/getuserdetails');


            setUserLoggedIn({
                message:"You are logged in that's why we can prefill your data",
                status:true
            });

            // setUserDetails(response.data.user)
            dispatch(setUser(response.data.user));




        } catch (error) {
            setUserLoggedIn({
                message: 'You are not logged in, please login or register on Shop Envy to continue the checkout process',
                status:false
            });
        }

        }

        isUserLoggedIn()


    },[])
    

    const pathname = usePathname()
    const searchParams = useSearchParams()
  



    return <>

     <div>
        

{submittingForm&&<Loader/>}

        
        <div className="flex flex-col lg:flex-row">


<SecondCart/>



        <div className="w-full lg:w-1/2  px-4 lg:px-20 py-6 lg:py-12 space-y-3">

        <p className="text-2xl font-semibold">Your Shipping Details</p>

   
        {
        
        
        userLoggedIn.status?<div><span className=" text-green-500">{userLoggedIn.message}</span></div>
        
        :
        
<div className="flex flex-col gap-y-4">
        <span className="text-red-500 w-full ">{userLoggedIn.message}</span>
            <div className="text-center text-xl">Proceed to <Link className="underline" href={`/login?redirect=${pathname.slice(1)}`}> Login </Link> OR <Link className="underline" href={`/register?redirect=${pathname.slice(1)}`}>Register</Link></div>

        </div>
}




<form onSubmit={handleSubmit(onSubmit)} className="space-y-5">


    <InputField errors={errors} register={register} valueFromSchema='address' text='Address' userLoggedIn={userLoggedIn.status} prefilled={userDetails['address']}  placeholder='Your Address' />

    <InputField errors={errors} register={register} valueFromSchema='zipCode' text='Zip Code' userLoggedIn={userLoggedIn.status} prefilled={userDetails['zipCode']}  placeholder='Your Zip Code' />

    <InputField errors={errors} register={register} valueFromSchema='city' text='City' userLoggedIn={userLoggedIn.status} prefilled={userDetails['city']}   placeholder='Your City' />


    <InputField errors={errors} register={register} valueFromSchema='country' text='Country' userLoggedIn={userLoggedIn.status} prefilled={userDetails['country']}   placeholder='Your Country' />







 
<button type="submit" disabled={!userLoggedIn.status||submittingForm||cartArray.length==0}  className="w-full  py-3.5 rounded-lg bg-[#093125] disabled:opacity-70 opacity-100 text-white font-semibold cursor-pointer text-center">Continue to payment</button>

</form>


{submittingMessage&&<p className={`${submittingMessage.startsWith("There")?'text-red-500':'text-green-500'} text-center font-medium text-3xl`}>{submittingMessage}</p>}


<p className="text-center ">By clicking on "Continue to payment" button, you will be redirected to a payment page hosted by Stripe itself to ensure maximum trust and security while charging for your payment</p>




        </div>



    </div>
    </div>

    </>
}