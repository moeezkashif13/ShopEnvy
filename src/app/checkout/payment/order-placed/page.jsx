// "use client"

// import React from "react";
// // import { Checkbox } from "@material-ui/core";
// import { InputField } from "@/components/Checkout/InputFields";
// import { InformationComponentSchema} from '@/components/Checkout/YupSchema/Schema'
// import { useForm } from 'react-hook-form';

// import { yupResolver } from '@hookform/resolvers/yup';
// import { Cart } from "@/components/Checkout/Cart";



// export default function PaymentPage(props){

//     const {
//         register,
//         handleSubmit,
//         formState: { errors },
//       } = useForm({
//         mode:'onChange',
//         resolver: yupResolver(InformationComponentSchema),
//       });
    
    
//       const submitForm = (data) => {
//         console.log({ data });
//       };
    
      
    
//     return(
//         <>

// <div className="flex flex-wrap    bg-white overflow-hidden" >

// <div className="w-7/12 xs:w-full   overflow-hidden pt-12 pb-16 px-12 xs:px-6 xs:pb-0 ">



// <form  onSubmit={handleSubmit(submitForm)}>
// <div className='flex xs:flex-col'>  {/* FIRST ROWW*/}


// <InputField register={register} label="First Name" errors={errors} />

// <InputField register={register} label="Last Name" errors={errors} />



// {/* <InputField register={register}  labelText="First Name" id="FirstName"/> */}

    
// {/* <InputField  labelText="Last Name" id="LastName"/> */}

// </div>  {/* FIRST ROWW*/}

// <div className='flex xs:flex-col my-5 '>  {/* SECOND ROWW*/}

// <InputField register={register} label="Email" errors={errors} />

// <InputField register={register} label="Phone Number" errors={errors} />




// </div>  {/* SECOND ROWW*/}

// <div className='flex xs:flex-col'>  {/* THIRD ROWW STARTT*/}
// {/* <InputField  labelText="Address1" id="Address1"/> */}

// {/* <InputField  labelText="Address2" id="Address2"/> */}

// <InputField register={register} label="Address1" errors={errors} />


// <InputField register={register} label="Address2" errors={errors} />


// </div>  {/* THIRD ROWW ENDDD*/}


// <div className='flex my-5 xs:flex-col'>  {/* FIFTHH ROWW STARTT*/}

// {/* <InputField  labelText="ZipCode" id="ZipCode"/> */}

// {/* <InputField  labelText="City" id="City"/> */}


// <InputField register={register} label="ZipCode" errors={errors} />


// <InputField register={register} label="City" errors={errors} />





// </div>  {/* FIFTHH ROWW ENDDD*/}



// {/* <div className='flex items-center'>
//         <Checkbox

//           id='MyCheckbox'  />
//         <label htmlFor="MyCheckbox" className="xs:text-xs">My billing address is same as my delivery address</label>
      
//         </div> */}


// <div className='flex xs:flex-col-reverse justify-between items-center my-3'>
    
//     {/* <a href='/'>
//         <p className='underline'>Back To Cart</p>
//     </a> */}


// <button  type="submit" className='testBro bg-blue-700 px-16 py-3 font-semibold text-white xs:mb-6'>Continue to payment</button>
  

// </div>

// </form>

// </div>

// <div className="w-5/12 xs:w-full text-sm overflow-hidden py-12 px-8 xs:pt-6" style={{backgroundColor:'#fafafa'}}>


// <Cart/>


// </div>


// </div>



//         </>
//     )

// }




"use client"

import Link from "next/link";
import { AiOutlineCheck } from "react-icons/ai";

export default function OrderPlaced(){

    return <div className="flex justify-center items-center bg-[#F2F2F2]  h-screen">
        
        <div className="bg-white rounded-lg w-[600px] h-[430px]  flex flex-col items-center gap-y-4 justify-center">


<div className="text-[#EC2D89] border-[#EC2D89] min-w-[80px] min-h-[80px] border-2 text-5xl rounded-full flex items-center justify-center">
    <AiOutlineCheck/>
</div>



<p className="font-semibold text-lg ">Hey Anup Srivastva</p>

<p className="text-3xl font-semibold">Your Order Has Been Received</p>

<p className="px-8 text-center">We'll send you a confirmation email as soon we dispatch your order. We will also set the order status to Dispatch. You can view status in your orders history by visiting your profile.</p>


<Link href={`/profile?visit=orders-history`} className="rounded-lg px-9 py-2.5 cursor-pointer bg-pink-500 text-center text-lg text-white font-medium">
    Check Status
</Link>



        </div>





    </div>

}