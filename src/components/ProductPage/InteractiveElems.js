"use client"

import toast from 'react-hot-toast';

import { finalSelection, setChanges } from "@/app/globalredux/features/productslice/productslice";


import {  useEffect, useState } from "react";

import { AiOutlineMinus, AiOutlinePlus,AiFillHeart } from "react-icons/ai"
import { useDispatch, useSelector } from "react-redux";
import { increaseCart } from '@/app/globalredux/features/cart/cartSlice';
import { useRouter } from 'next/navigation';
import axios from 'axios';
import { getSpecificProductData } from '@/app/productpage/[sku]/page';


const selectionNotification = (type)=>{

    toast.success(`${type} has been selected`,{
        duration:3000,
        position:'top-center',
    
    });

}



const Checking = async()=>{
    const searchParams = new URLSearchParams(window.location.search).get('id')

    const hello =   await getSpecificProductData({id:searchParams})

    return hello
}




export const SelectQuantity =  ({productData})=>{

    const [quantity,setQuantity] = useState(1);

    const dispatch = useDispatch();

   
    


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
    
                if(quantity == productData.attributes.LeftInStock){
                    return quantity;
                }  
                return oldVal+1
                })
        }
    
        selectionNotification('Quantity')
    
        dispatch(setChanges({changeInQuantity:'changed'}))
    
        // setDontAllowToAdd(false);
    }

    useEffect(()=>{

        dispatch(finalSelection({selectedQuantity:quantity}))

    },[quantity])


    return <div className="space-y-3 ">


    <p className="font-semibold ">Select Quantity</p>
    
    
    <div className="flex items-center justify-between font-semibold text-[#595757]">
       
    <button onClick={()=>changeQuantity('minus')} className="text-3xl flex justify-center items-center w-12 h-12 bg-white 
    
    active:bg-black active:text-white
    
    
    border-2 border-[#E3E3E3] cursor-pointer rounded-full" style={{transition:'all 0.3s'}}>
    
        <AiOutlineMinus/>
    
    </button>
    
    <p className="text-5xl font-bold ">{quantity}</p>
    
    <button onClick={()=>changeQuantity('plus')}  className="text-3xl flex justify-center items-center w-12 h-12 bg-white 
    
    active:bg-black active:text-white
    
    border-2 border-[#E3E3E3] cursor-pointer rounded-full" style={{transition:'all 0.3s'}}>
    
        <AiOutlinePlus/>
    
    </button>
    
    
       
    </div>
    
    
    </div>

}



export const AddToCartButton = ({productData})=>{

        // const broadcast = new BroadcastChannel('productRelated')
    
        const changes = useSelector(state=>state.productRelated.changes)

        const userSelections = useSelector(state=>state.productRelated.productRelated);
        const cartArray = useSelector(state=>state.usercart.cart)

        const dispatch = useDispatch()


        
    const addToCart = async ()=>{
        
        const finalDataToSend = {
            id:productData.id,
            ...productData.attributes,
            ProductImages : 0,
            ProductPreviewImage : productData.attributes.ProductPreviewImage,
            selectedSize : userSelections.selectedSize,
            selectedQuantity : userSelections.selectedQuantity
        
        }
    
    
        // const gatherQuantity = cartArray.map(eachItem=>{
        //     return eachItem.quantity
        // })
    
        
        const ifItemExist = cartArray.filter(eachItem=>{
            return eachItem.id == finalDataToSend.id
          })

    
    
          if(ifItemExist.length>0){
    

    if(changes.changeInQuantity == 'initial'&& changes.changeInSize=='initial'){
        toast.error(`This item already exists in your cart. Change quantity or size to update the product`);

    }
    
            if(changes.changeInQuantity == 'changed' || changes.changeInSize == 'changed'  ){
    
                toast.success(`Updated! Size: ${userSelections.selectedSize} Quantity: ${userSelections.selectedQuantity} `);
    
                dispatch(increaseCart({finalDataToSend,type:'update',
            
                updatedQuantity:userSelections.selectedQuantity,updatedSize:userSelections.selectedSize
            
            }))
    
            }
    
    
          }else{
            
    
            if((changes.changeInQuantity == 'changed' && changes.changeInSize == 'changed') || changes.changeInQuantity == 'initial' && changes.changeInSize == 'initial'  ){
            
    
            toast.success(`Added to cart! Size: ${userSelections.selectedSize} Quantity: ${userSelections.selectedQuantity} `);


    dispatch(increaseCart({finalDataToSend,type:'add'}))
    
            }
    
    }
    
    
    dispatch(
    setChanges({
    changeInQuantity:'initial',
    changeInSize:'initial'
    })
    
    )
    }
    
    


    
    return <div  onClick={addToCart} className="cursor-pointer bg-black font-semibold text-white text-center py-3 text-lg ">
    Add to Cart
</div>
}



export const SelectSize = ({productData})=>{


    const [size,setSize] = useState('S');
    const dispatch = useDispatch();

    
const changeSize = (productSize)=>{

    selectionNotification('Size')

        setSize(productSize)


dispatch(setChanges({changeInSize:'changed'}))

    // setDontAllowToAdd(false);


}


useEffect(()=>{
    dispatch(finalSelection({selectedSize:size}))

},[size])





    return <div className="space-y-3">


    <p className="font-semibold ">Select a size</p>
    
    <div className="flex gap-x-3   text-xs font-semibold gap-y-4 flex-wrap">
        {productData.attributes?.ProductSizes?.split(',').map((eachSize)=>{
            return <button onClick={()=>changeSize(eachSize)}  className="opacity-60 focus:opacity-100 flex justify-center items-center w-12 h-12 bg-white border-2 border-[#E3E3E3] cursor-pointer rounded-full" style={{transition:'all 0.3s'}}>{eachSize}</button>
        })}
    </div>

    
    </div>
}


export const ProceedToCheckout = ()=>{

    const router = useRouter();


    return <div onClick={()=>router.push('/checkout')}  className="cursor-pointer bg-black font-semibold text-white text-center py-3 text-lg ">
    Proceed to checkout
</div>
}




export const JSONPlaceHolder = async ()=>{

        await new Promise(resolve=>setTimeout(()=>resolve(),4000))
const posts =         await axios.get('https://jsonplaceholder.typicode.com/posts')

    return <div className='space-y-5'>

        {posts.data.map(eachPost=>{
            return <p>{eachPost.id}: {eachPost.title}</p>
        })}


    </div>
}