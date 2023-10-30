import toast, { Toaster } from 'react-hot-toast';


import {AiFillHeart } from "react-icons/ai"
// import { useRouter } from 'next/navigation';
import axios from 'axios';
import { AddToCartButton, JSONPlaceHolder, ProceedToCheckout, SelectQuantity, SelectSize } from '@/components/ProductPage/InteractiveElems';

import { Suspense } from 'react';
import Image from 'next/image';


export async function generateStaticParams() {
    console.log("->RUN 1");
    const posts = await fetch(`${process.env.NEXT_PUBLIC_STRAPI_URL}/api/products`).then((res) => res.json())

   const productsName =   posts.data.map((post) => ({
     sku: post.attributes.SKU
    }))

    return productsName

  } 
  

export async function getSpecificProductData(neededData) {


    const res = await fetch(`${process.env.NEXT_PUBLIC_STRAPI_URL}/api/products?filters[SKU][$eqi]=${neededData.sku}`)


    // The return value is *not* serialized
    // You can return Date, Map, Set, etc.
   
    if (!res.ok) {
      // This will activate the closest `error.js` Error Boundary
      throw new Error('Failed to fetch data')
    }
   
    const toJSON = await res.json()


    return toJSON.data[0];

    
  }
  




export default async function Product({params,searchParams}){


    
    const data = await getSpecificProductData(params)

    // console.log(data);
    // console.log(data,'data data data data');
    const {Name,Description,SKU,Price,DiscountedPrice,LeftInStock,ProductSizes,ProductImages} = data.attributes;

    const ProductImagesToArray = ProductImages.split(',')


    // const [likedProduct,setLikedProduct] = useState(false)

    // const [productDetails,setProductDetails] = useState({});
    // const [color,setColor] = useState('');
    // const [disableAddToCart,setDisableAddToCart] = useState(false);
    // const [dontAllowToAdd,setDontAllowToAdd] = useState(false);



// const dispatch = useDispatch();
// const cartArray = useSelector(state=>state.usercart.cart);



    
    return <div>
        

<div className="flex flex-col lg:flex-row bg-pink-500">


<div className="relative pl-4 lg:pl-16 py-8 pr-4 lg:pr-8 productpagebg w-full lg:w-[65%]  space-y-8">
    

    <div className="font-semibold text-3xl">
        <p>Shop Envy</p>

    </div>



    <div className="  relative flex justify-between px-0 lg:px-32 ">

    <div className=" hidden lg:flex  flex-row-reverse  absolute left-0 bottom-0 text-6xl font-bold tracking-wider gap-x-2  rotate-180" style={{writingMode:'vertical-rl',textOrientation:'mixed',}}>
        {/* <p>lanosaeS </p>
        <p>sucof</p> */}
        <p>focus</p>
        <p>Seasonal</p>
    </div>


    <div className="w-[420px] h-[570px] relative bg-[#DAD3CF] ">

        {/* <img src={`${ProductImagesToArray[0]}`}  className='w-full h-full max-w-full object-cover' alt="" /> */}

<Image src={ProductImagesToArray[0]} fill />

    </div>



    <div className="border-2 shadow-2xl  w-[320px] h-[430px] bg-[#DAD3CF]  absolute -bottom-[450px] lg:bottom-8 right-0"> 
    
    {/* <img src={`${ProductImagesToArray[1]}`} className='w-full h-full max-w-full object-cover' alt="" /> */}

<Image src={ProductImagesToArray[1]} fill />

    
    </div>


    </div>

<div className={` pl-4 lg:pl-32 pt-[450px] lg:pt-0  flex flex-wrap  gap-y-4 ${ProductImagesToArray.length==4?'gap-x-8':'justify-center lg:justify-between'} `}>
    
        {ProductImagesToArray.map((elem,index)=>{
            return  index>1&& <div key={index} style={{transition:'all 0.4s'}} className='hover:scale-105 hover:lg:scale-110 h-[300px] w-[200px] rounded-lg '>
                <Image fill src={`${elem}`} alt="" className='w-full h-full max-w-full object-cover rounded-lg' srcset="" />
            </div>
        })}


</div>





</div>


<div className="px-4 lg:px-16 py-8 bg-[#F7F7F7] w-full lg:w-[35%] space-y-7">
    

<div className="space-y-2">
<p className="font-semibold  text-[#FF6C19]">NEW</p>


<div >

<div className="flex font-semibold text-lg ">
    <p className="max-w-[200px]">{Name} </p>
    <p className="ml-auto">PKR {Price}.00</p>

</div>




<div className="text-sm text-[#323232] font-medium flex items-center">
    
    
    <p className='mt-2 text-base'>Left In Stock: {LeftInStock}</p>

        {/* <button onClick={()=>setLikedProduct(oldVal=>!oldVal)}  
        
        className='cursor-pointer ml-auto text-4xl '>
            
            
<AiFillHeart    style={{transition:'all 0.4s'}}

className={`${likedProduct?'text-red-500':'text-inherit'}`} /></button> */}


</div>



</div>

</div>


{/* <div className="space-y-3">


<p className="font-semibold ">Select a color</p>


<div className="flex gap-x-3  text-xs font-semibold gap-y-4 flex-wrap">
    {productDetails?.colors?.map((eachColor)=>{
        return <button   className="opacity-50 focus:opacity-100 flex justify-center items-center w-10 h-10 bg-white  cursor-pointer rounded-full" style={{backgroundColor:eachColor,transition:'all 0.5s'}}></button>


    })}
</div>


</div> */}



<SelectQuantity productData={data} />


<SelectSize  productData={data} />




{/* <div className="space-y-3 ">


<p className="font-semibold ">Select Quantity</p>


<div className="flex items-center justify-between font-semibold text-[#595757]">
   
<button onClick={()=>changeQuantity('minus')} className="text-3xl flex justify-center items-center w-14 h-14 bg-white 

active:bg-black active:text-white


border-2 border-[#E3E3E3] cursor-pointer rounded-full" style={{transition:'all 0.3s'}}>

    <AiOutlineMinus/>

</button>

<p className="text-5xl font-bold ">{quantity}</p>

<button onClick={()=>changeQuantity('plus')}  className="text-3xl flex justify-center items-center w-14 h-14 bg-white 

active:bg-black active:text-white

border-2 border-[#E3E3E3] cursor-pointer rounded-full" style={{transition:'all 0.3s'}}>

    <AiOutlinePlus/>

</button>


   
</div>


</div> */}






<AddToCartButton  productData={data} />


<ProceedToCheckout/>



<p className="text-[#424242] font-medium text-sm leading-6">{Description}</p>



<div className="text-[#2D2D2D] font-medium">


{/* {[1,2,3,4].map(()=>{
    return <div className="border-t-2 last:border-b-2 border-[#E3E3E3]">

    <div className="flex py-3.5">
    <p>Details</p>
    <div className="ml-auto">ic</div>
    </div>


    </div>
})} */}



</div>





</div>



</div>




<Toaster />




    </div>
}