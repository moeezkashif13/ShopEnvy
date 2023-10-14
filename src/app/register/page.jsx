"use client"

import Link from "next/link"
import axios from 'axios'
import { redirect, useSearchParams,useRouter } from 'next/navigation'
import { useEffect } from "react"
import { afterGettingAuthCode, startGoogleOAuth, startTwitterOAuth } from "@/utils/authrelated"
import { useForm } from "react-hook-form"

import { yupResolver } from "@hookform/resolvers/yup"
import * as yup from "yup"

const schema = yup.object({

    name: yup.string().required('Name is required'),
  
    email: yup.string()
    .email('Invalid email address')
    .required('Email is required'),
  
    password : yup.string()
    .required('Password is required')
    .min(8, 'Password must be at least 8 characters')
    .matches(
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]+$/,
      'Password must contain at least one uppercase letter, one lowercase letter, one digit, and one special character (@$!%*?&)'
    ),

    profileimagefile : yup.mixed()
    // .required('Image is required')
    .test('isFileAttached','Please attach an image',(value)=>{

      if(value.length==0){
        return false
      }

      return true;

    })
    .test('fileType', 'Only image files are allowed', (value) => {
      if (value && value.length) {
        return value[0].type.startsWith('image/');
      }
      return true;
    })
    .test('fileSize', 'File size is too large', (value) => {
      if (value && value.length) {
        return value[0].size <= 5 * 1024 * 1024; // 5 MB
      }
      return true;
    })
    // .required('File is required'),

  
  })
  .required()



const inputFieldsCommonClasses = 'w-full px-8 py-4 rounded-lg font-medium bg-gray-100 border border-gray-200 placeholder-gray-500 text-sm focus:outline-none focus:border-gray-400 focus:bg-white mb-2 '




export default function Register(){

  const router = useRouter()
  
  afterGettingAuthCode()

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  })


  const onSubmit = async (data) => {


    try {
          const response = await axios.post('/api/registerstandarduser',{...data}    )

          console.log(response.data);


  } catch (error) {
  console.log(error);      
  }



  }
  

    return  <div className=" min-h-screen bg-gray-100 text-gray-900 flex justify-center">
      <div className="max-w-screen-xl m-0 sm:m-10 bg-white shadow sm:rounded-lg flex justify-center flex-1">
        <div className="lg:w-1/2 xl:w-5/12 p-6 sm:p-12">
          
          <div className="mt-12 flex flex-col items-center">
            <h1 className="text-2xl xl:text-3xl font-extrabold">Sign up</h1>
            <div className="w-full flex-1 mt-8">
              <div className="flex flex-col items-center">
                <button onClick={()=>startGoogleOAuth(router)} className="w-full max-w-xs font-bold shadow-sm rounded-lg py-3 bg-indigo-100 text-gray-800 flex items-center justify-center transition-all duration-300 ease-in-out focus:outline-none hover:shadow focus:shadow-sm focus:shadow-outline">
                  <div className="bg-white p-2 rounded-full">
                    <svg className="w-4" viewBox="0 0 533.5 544.3">
                      <path
                        d="M533.5 278.4c0-18.5-1.5-37.1-4.7-55.3H272.1v104.8h147c-6.1 33.8-25.7 63.7-54.4 82.7v68h87.7c51.5-47.4 81.1-117.4 81.1-200.2z"
                        fill="#4285f4"
                      />
                      <path
                        d="M272.1 544.3c73.4 0 135.3-24.1 180.4-65.7l-87.7-68c-24.4 16.6-55.9 26-92.6 26-71 0-131.2-47.9-152.8-112.3H28.9v70.1c46.2 91.9 140.3 149.9 243.2 149.9z"
                        fill="#34a853"
                      />
                      <path
                        d="M119.3 324.3c-11.4-33.8-11.4-70.4 0-104.2V150H28.9c-38.6 76.9-38.6 167.5 0 244.4l90.4-70.1z"
                        fill="#fbbc04"
                      />
                      <path
                        d="M272.1 107.7c38.8-.6 76.3 14 104.4 40.8l77.7-77.7C405 24.6 339.7-.8 272.1 0 169.2 0 75.1 58 28.9 150l90.4 70.1c21.5-64.5 81.8-112.4 152.8-112.4z"
                        fill="#ea4335"
                      />
                    </svg>
                  </div>
                  <span className="ml-4">Sign Up with Google</span>
                </button>
                <button onClick={()=>startTwitterOAuth(router)} className="w-full max-w-xs font-bold shadow-sm rounded-lg py-3 bg-indigo-100 text-gray-800 flex items-center justify-center transition-all duration-300 ease-in-out focus:outline-none hover:shadow focus:shadow-sm focus:shadow-outline mt-5">
                  <div className="bg-white w-8 h-8 p-1 rounded-full flex justify-center items-center">
                   <img src="/sampleimages/twitter.svg"  width={20} alt="" />
                  </div>
                  <span className="ml-4">Sign Up with Twitter</span>
                </button>
              </div>
              <div className="my-12 border-b text-center">
                <div className="leading-none px-2 inline-block text-sm text-gray-600 tracking-wide font-medium bg-white transform translate-y-1/2">
                  Or sign up with e-mail
                </div>
              </div>
              <form onSubmit={handleSubmit(onSubmit)} className="mx-auto max-w-xs">

                
              <input
                  {...register("name")}
                  className={inputFieldsCommonClasses}
                  type="text"
                  placeholder="Name"
                />

      <p className="mb-2 text-sm text-red-500 font-semibold">{errors.name?.message}</p>
                <input
                  {...register("email")}

                  className={inputFieldsCommonClasses}
                  type="email"
                  placeholder="Email"
                />
      <p className="mb-2 text-sm text-red-500 font-semibold">{errors.email?.message}</p>

                <input
                  {...register("password")}

                  className={inputFieldsCommonClasses}
                  type="password"
                  placeholder="Password"
                />
      <p className="mb-2 text-sm text-red-500 font-semibold">{errors.password?.message}</p>


                  <input
                  {...register("profileimagefile")}

                  className={inputFieldsCommonClasses}
                  type="file"
                  accept="image/*"
                  placeholder="Profile Picture"
                />
<p className="mb-2 text-sm text-red-500 font-semibold">{errors.profileimagefile?.message}</p>

                
                <button type="submit" className=" tracking-wide font-semibold bg-indigo-500 text-gray-100 w-full py-4 rounded-lg hover:bg-indigo-700 transition-all duration-300 ease-in-out flex items-center justify-center focus:shadow-outline focus:outline-none">
                  <svg
                    className="w-6 h-6 -ml-2"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth={2}
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M16 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2" />
                    <circle cx="8.5" cy={7} r={4} />
                    <path d="M20 8v6M23 11h-6" />
                  </svg>
                  <span className="ml-3">Sign Up</span>
                </button>

 <p className="mt-6 text-xs text-gray-600 text-center">
                  Already a user? <Link className="underline" href='/login'> Go to Login</Link>
                  
                </p>


                <p className="mt-6 text-xs text-gray-600 text-center">
                  I agree to abide by templatana's {" "}
                  <a href="#" className="border-b border-gray-500 border-dotted">
                   Terms of Service
                  </a>
                  {" "} and its {" "}
                  <a href="#" className="border-b border-gray-500 border-dotted">
                    Privacy Policy
                  </a>
                </p>
              </form>
            </div>
          </div>
        </div>
        <div className="flex-1 bg-indigo-100 text-center hidden lg:flex">
          <div
            className="m-12 xl:m-16 w-full bg-contain bg-center bg-no-repeat"
            style={{
              backgroundImage:
                'url("https://storage.googleapis.com/devitary-image-host.appspot.com/15848031292911696601-undraw_designer_life_w96d.svg")'
            }}
          ></div>
        </div>
      </div>
    </div>

  


}