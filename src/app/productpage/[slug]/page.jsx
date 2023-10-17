"use client"

import { AiFillHeart, AiOutlineMinus, AiOutlinePlus } from 'react-icons/ai'
import {BsFillAlarmFill} from 'react-icons/bs'

import toast, { Toaster } from 'react-hot-toast';
import { useState } from 'react';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { increaseCart,updateSingleItemInCart } from '@/app/globalredux/features/cart/cartSlice';

const notify = () => toast.success('Here is your toast.',{
    duration:3000,
    position:'top-center',

});



export default function ProductPage(props){

    const [productDetails,setProductDetails] = useState({});
    const [quantity,setQuantity] = useState(1);
    const [size,setSize] = useState('32');
    const [disableAddToCart,setDisableAddToCart] = useState(false);
    const [dontAllowToAdd,setDontAllowToAdd] = useState(false);

    const [changes,setChanges] = useState({
        changeInQuantity:'initial',
        changeInSize:'initial',
    })


    useEffect(()=>{

            setProductDetails({

            id: `${Math.floor(Math.random()*3000)}`,
                
                name : props.params.slug,
                sku : props.searchParams.sku,
                description : "description description description description",

                price : `${Math.floor(Math.random()*8+1)},${Math.floor(Math.random()*998+1)}.00`,

                discountedprice : `${Math.floor(Math.random()*8+1)},${Math.floor(Math.random()*998+1)}.00`,

                leftinstock  : `${Math.floor(Math.random()*15)}`,

                sizes: ['32','34','36','38']



            })



    },[])

    const dispatch = useDispatch();
    const cartArray = useSelector(state=>state.usercart.cart);
    
    
    const addToCart = async ()=>{

        const finalDataToSend = {
            
            ...productDetails,
            sizes : size,
            
            quantity : quantity
        }

        

        // const gatherQuantity = cartArray.map(eachItem=>{
        //     return eachItem.quantity
        // })

console.log(finalDataToSend);

        const ifItemExist = cartArray.map(eachItem=>{
            return eachItem.id == finalDataToSend.id
          })

          console.log(ifItemExist);
    
          if(ifItemExist.length>0&&ifItemExist[0]==true){

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


        setChanges({changeInQuantity:'changed'})

        // setDontAllowToAdd(false);


    }

    const changeSize = (productSize)=>{

        setSize(productSize)

        setChanges({changeInSize:'changed'})

        // setDontAllowToAdd(false);


    }




    return (
        <div className="">

        <div onClick={notify}>breadcrumbs</div>

<div className="flex px-10 relative">

<div className="w-[55%] bg-green-500 flex flex-wrap justify-between">
    

{[1,2,3,4,5,6,7].map(()=>{

return <div className="w-[calc(50%-5px)] mb-2 h-[550px] bg-orange-500">

</div>

})}




</div>


<div className="w-[45%] bg-yellow-500 pl-6  ">
    

    <p className='text-5xl font-semibold'>{productDetails.name}</p>

<div>

<p>Rs.{productDetails.price}</p>

<p> Rs.{productDetails.discountedprice}</p>

<p>Shipping calculated at checkout.</p>

<p>SKU: {productDetails.sku}</p>


<div className='rise-shake text-4xl'>
<BsFillAlarmFill/>

</div>


<p >Only {productDetails.leftinstock} left in stock</p>


<div className='flex items-center gap-x-4 font-semibold'>

{productDetails?.sizes?.map(eachSize=>{
    return <div onClick={()=>changeSize(eachSize)} className='flex justify-center items-center w-12 h-12 rounded-full bg-red-500'>{eachSize}</div>
})}





</div>



<div className=''>

<div className='flex justify-between items-center text-3xl'>

<div 

onClick={ ()=>changeQuantity('minus')}



className='cursor-pointer w-14 h-14 bg-purple-500 rounded-full flex justify-center items-center'>
    <AiOutlineMinus/>
</div>


<div className=''>{quantity}</div>

<div onClick={()=>changeQuantity('plus')}


 className='cursor-pointer w-14 h-14 bg-purple-500 rounded-full flex justify-center items-center'>
    <AiOutlinePlus/>
</div>


</div>


<div className='flex justify-between items-center font-semibold'>
    
    <div onClick={addToCart} className='w-[85%] bg-orange-500 rounded-lg text-center py-3 '>
Add to cart
    </div>

<div className=' ml-auto border w-12 h-12 rounded-lg flex justify-center items-center text-3xl'>

    <AiFillHeart/>

</div>

</div>


</div>



<div className='space-y-3'>


{[1,2,3,4].map((elem)=>{

return <div className=''>


<div className='flex items-center w-full  pl-5 bg-primary'>

<p>Description</p>

<div className='ml-auto h-full px-5 py-2 bg-black text-white text-2xl '>ic</div>


</div>



</div>

})}



</div>





</div>






</div>


</div>





<Toaster />




        </div>
    )
}