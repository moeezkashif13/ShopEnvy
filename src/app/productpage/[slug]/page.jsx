import toast, { Toaster } from 'react-hot-toast';


import {AiFillHeart } from "react-icons/ai"
// import { useRouter } from 'next/navigation';
import axios from 'axios';
import { AddToCartButton, SelectQuantity, SelectSize } from '@/components/ProductPage/InteractiveElems';
import { useDispatch } from 'react-redux';




export async function getSpecificProductData(searchParams) {
    const res = await fetch(`http://127.0.0.1:1337/api/products/${searchParams.id}?populate[0]=ProductPreviewImage&populate[1]=ProductImages`)
    // The return value is *not* serialized
    // You can return Date, Map, Set, etc.
   
    if (!res.ok) {
      // This will activate the closest `error.js` Error Boundary
      throw new Error('Failed to fetch data')
    }
   
    const toJSON = await res.json()


    return toJSON.data;

    
  }
  


export default async function Product(props){

    const data = await getSpecificProductData(props.searchParams)
// console.log(data);
    // console.log(data,'data data data data');
    const {Name,Description,SKU,Price,DiscountedPrice,LeftInStock,ProductSizes,ProductImages} = data.attributes;

    

    // const [likedProduct,setLikedProduct] = useState(false)

    // const [productDetails,setProductDetails] = useState({});
    // const [color,setColor] = useState('');
    // const [disableAddToCart,setDisableAddToCart] = useState(false);
    // const [dontAllowToAdd,setDontAllowToAdd] = useState(false);



// const dispatch = useDispatch();
// const cartArray = useSelector(state=>state.usercart.cart);

console.log(ProductImages);
    

    
    return <div>
        

<div className="flex">


<div className="relative pl-16 py-8 pr-8 productpagebg w-[65%] space-y-8">
    

    <div className="font-semibold text-3xl">
        <p>Shop Envy</p>

    </div>



    <div className="  relative flex justify-between px-32">

    <div className="flex  flex-row-reverse  absolute left-0 bottom-0 text-6xl font-bold tracking-wider gap-x-2  rotate-180" style={{writingMode:'vertical-rl',textOrientation:'mixed',}}>
        {/* <p>lanosaeS </p>
        <p>sucof</p> */}
        <p>focus</p>
        <p>Seasonal</p>
    </div>


    <div className="w-[420px] h-[570px] bg-[#DAD3CF] ">

        <img src={`http://localhost:1337${ProductImages.data[0].attributes.formats.large.url}`} className='w-full h-full max-w-full object-cover' alt="" />


    </div>



    <div className="border-2 shadow-2xl w-[320px] h-[430px] bg-[#DAD3CF]  absolute bottom-8 right-0"> 
    
    <img src={`http://localhost:1337${ProductImages.data[1].attributes.formats.large.url}`} className='w-full h-full max-w-full object-cover' alt="" />

    
    </div>


    </div>

<div className='pl-32  flex flex-wrap justify-between gap-y-4'>
    
        {ProductImages.data.map((elem,index)=>{
            console.log(elem.attributes);
            return  index>1&& <div style={{transition:'all 0.4s'}} className='hover:scale-110 h-[300px] w-[200px] rounded-lg '>
                <img src={`http://127.0.0.1:1337${elem.attributes.formats.large.url}`} alt="" className='w-full h-full max-w-full object-cover rounded-lg' srcset="" />
            </div>
        })}


</div>



</div>


<div className="px-16 py-8 bg-[#F7F7F7] w-[35%] space-y-7">
    

<div className="space-y-2">
<p className="font-semibold  text-[#FF6C19]">NEW</p>


<div >

<div className="flex font-semibold text-lg">
    <p className="max-w-[240px]">{Name} </p>
    <p className="ml-auto">{Price}.00</p>

</div>




<div className="text-sm text-[#323232] font-medium flex items-center">
    
    
    <p>Cropped turtleneck</p>

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

<SelectQuantity/>


<SelectSize/>

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






<AddToCartButton/>


<div   className="cursor-pointer bg-black font-semibold text-white text-center py-3 text-lg ">
    Proceed to checkout
</div>



<p className="text-[#424242] font-medium text-sm leading-6">{Description}</p>



<div className="text-[#2D2D2D] font-medium">


{[1,2,3,4].map(()=>{
    return <div className="border-t-2 last:border-b-2 border-[#E3E3E3]">

    <div className="flex py-3.5">
    <p>Details</p>
    <div className="ml-auto">ic</div>
    </div>


    </div>
})}



</div>





</div>



</div>




<Toaster />




    </div>
}