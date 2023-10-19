"use client"

import { useState,useEffect } from 'react';
import toast, { Toaster } from 'react-hot-toast';

import { useDispatch, useSelector } from 'react-redux';
import { increaseCart,updateSingleItemInCart } from '@/app/globalredux/features/cart/cartSlice';


import { AiOutlineMinus, AiOutlinePlus,AiFillHeart } from "react-icons/ai"
import { useRouter } from 'next/navigation';


const selectionNotification = (type)=>{

    toast.success(`${type} has been selected`,{
        duration:3000,
        position:'top-center',
    
    });

}


export default function Product(props){
    
    const router = useRouter();
    
    const [likedProduct,setLikedProduct] = useState(false)

    const [productDetails,setProductDetails] = useState({});
    const [quantity,setQuantity] = useState(1);
    const [color,setColor] = useState('');
    const [size,setSize] = useState('32');
    const [disableAddToCart,setDisableAddToCart] = useState(false);
    const [dontAllowToAdd,setDontAllowToAdd] = useState(false);

    const [changes,setChanges] = useState({
        changeInQuantity:'initial',
        changeInSize:'initial',
    })


    useEffect(()=>{

        setProductDetails({

        id: props.searchParams.id,
            
            name : props.params.slug,
            sku : props.searchParams.sku,
            description : "description description description description",

            price : `${Math.floor(Math.random()*75)}.00`,

            discountedprice : `$${Math.floor(Math.random()*499)}.00`,

            leftinstock  : `${Math.floor(Math.random()*100)}`,

            sizes: ['32','34','36','38'],

            colors : ['#000000',"#f8523f","#40E0D0","#DA70D6","#6495ED","#FF007F","#EE82EE","#FFD700","#43ddc9",],


        })



},[])


const dispatch = useDispatch();
const cartArray = useSelector(state=>state.usercart.cart);


const addToCart = async ()=>{

    // const broadcast = new BroadcastChannel('productRelated')

    const finalDataToSend = {
        
        ...productDetails,
        sizes : size,
        quantity : quantity
    
    }

    

    // const gatherQuantity = cartArray.map(eachItem=>{
    //     return eachItem.quantity
    // })

    
    const ifItemExist = cartArray.filter(eachItem=>{
        console.log(eachItem);
        console.log(finalDataToSend);
        return eachItem.id == finalDataToSend.id
      })

      console.log(ifItemExist);

      if(ifItemExist.length>0){

console.log('i shoulddd nott runnn');

        if(changes.changeInQuantity == 'changed' || changes.changeInSize == 'changed'  ){

            toast.success(`Updated! Size: ${size} Quantity: ${quantity} `);

            dispatch(increaseCart({finalDataToSend,type:'update',
        
            updatedQuantity:quantity,updatedSize:size
        
        }))

        }


      }else{
        

        if((changes.changeInQuantity == 'changed' && changes.changeInSize == 'changed') || changes.changeInQuantity == 'initial' && changes.changeInSize == 'initial'  ){
        

        toast.success(`Added to cart! Size: ${size} Quantity: ${quantity} `);
      
dispatch(increaseCart({finalDataToSend,type:'add'}))

        }

}



setChanges({
changeInQuantity:'initial',
changeInSize:'initial'
})



}





const changeQuantity = (type)=>{


    if(type == 'minus'){
        setQuantity(oldVal=>{

            if(quantity==1){
                return 1;
            }
            return oldVal-1
        })
    }else{
        setQuantity(oldVal=>{

            if(quantity == productDetails.leftinstock){
                return quantity;
            }  
            return oldVal+1
            })
    }

    // selectionNotification('Quantity')


    setChanges({changeInQuantity:'changed'})

    // setDontAllowToAdd(false);


}

const changeSize = (productSize)=>{

    selectionNotification('Size')

    setSize(productSize)

    setChanges({changeInSize:'changed'})

    // setDontAllowToAdd(false);


}


useEffect(()=>{
    console.log(cartArray);
},[cartArray])

    
    
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

        <img src="/sampleimages/men-suit.png" className='w-full h-full max-w-full object-cover' alt="" />


    </div>



    <div className="border-2 shadow-2xl w-[320px] h-[430px] bg-[#DAD3CF]  absolute bottom-8 right-0"> 
    
    <img src="/sampleimages/men-suit.png" className='w-full h-full max-w-full object-cover' alt="" />

    
    </div>


    </div>





</div>


<div className="px-16 py-8 bg-[#F7F7F7] w-[35%] space-y-7">
    

<div className="space-y-2">
<p className="font-semibold  text-[#FF6C19]">NEW</p>


<div >

<div className="flex font-semibold text-lg">
    <p className="max-w-[240px]">{productDetails.name} </p>
    <p className="ml-auto">${productDetails.price}</p>
</div>


<div className="text-sm text-[#323232] font-medium flex items-center">
    
    
    <p>Cropped turtleneck</p>

        <button onClick={()=>setLikedProduct(oldVal=>!oldVal)}  
        
        className='cursor-pointer ml-auto text-4xl '>
            
            
<AiFillHeart    style={{transition:'all 0.4s'}}

className={`${likedProduct?'text-red-500':'text-inherit'}`} /></button>


</div>

</div>

</div>


<div className="space-y-3">


<p className="font-semibold ">Select a color</p>


<div className="flex gap-x-3  text-xs font-semibold gap-y-4 flex-wrap">
    {productDetails?.colors?.map((eachColor)=>{
        return <button   className="opacity-50 focus:opacity-100 flex justify-center items-center w-10 h-10 bg-white  cursor-pointer rounded-full" style={{backgroundColor:eachColor,transition:'all 0.5s'}}></button>


    })}
</div>


</div>

<div className="space-y-3 ">


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


</div>


<div className="space-y-3">


<p className="font-semibold ">Select a size</p>


<div className="flex gap-x-3   text-xs font-semibold gap-y-4 flex-wrap">
    {productDetails?.sizes?.map((eachSize)=>{
        return <button onClick={()=>changeSize(eachSize)}  className="opacity-60 focus:opacity-100 flex justify-center items-center w-12 h-12 bg-white border-2 border-[#E3E3E3] cursor-pointer rounded-full" style={{transition:'all 0.3s'}}>{eachSize}</button>
    })}
</div>


</div>



<div  onClick={addToCart} className="cursor-pointer bg-black font-semibold text-white text-center py-3 text-lg ">
    Add to Cart - ${productDetails.price*quantity}
</div>


<div  onClick={()=>router.push('/secondcheckout')} className="cursor-pointer bg-black font-semibold text-white text-center py-3 text-lg ">
    Proceed to checkout
</div>



<p className="text-[#424242] font-medium text-sm">Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo eos rem quod delectus reiciendis molestias fugiat nostrum voluptatum maiores quisquam.</p>



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