import { AiFillHeart, AiOutlinePlus } from 'react-icons/ai'
import {BsFillAlarmFill} from 'react-icons/bs'

export default function ProductPage(){
    return (
        <div className="">
            

        <div>breadcrumbs</div>

<div className="flex px-10 relative">

<div className="w-[55%] bg-green-500 flex flex-wrap justify-between">
    

{[1,2,3,4,5,6,7].map(()=>{

return <div className="w-[calc(50%-5px)] mb-2 h-[550px] bg-orange-500">

</div>

})}




</div>


<div className="w-[45%] bg-yellow-500 pl-6  ">
    

    <p>product name</p>

<div>

<p>Rs.3,495.00</p>

<p> Rs.2,446.50</p>

<p>Shipping calculated at checkout.</p>

<p>SKU: 23TS075-0MD-GRN</p>


<div className='rise-shake text-4xl'>
<BsFillAlarmFill/>

</div>


<p >Only 5 left in stock</p>


<div className='flex items-center gap-x-4 font-semibold'>

<div className='flex justify-center items-center w-8 h-8 rounded-full bg-red-500'>S</div>

<div className='flex justify-center items-center w-10 h-10 rounded-full bg-red-500'>M</div>


<div className='flex justify-center items-center w-12 h-12 rounded-full bg-red-500'>L</div>


<div className='flex justify-center items-center w-14 h-14 rounded-full bg-red-500'>XL</div>


<div className='flex justify-center items-center w-16 h-16 rounded-full bg-red-500'>2XL</div>





</div>



<div className=''>

<div className='flex justify-between items-center text-3xl'>

<div className='w-14 h-14 bg-purple-500 rounded-full flex justify-center items-center'>
    <AiOutlinePlus/>
</div>


<div className=''>1</div>

<div className='w-14 h-14 bg-purple-500 rounded-full flex justify-center items-center'>
    <AiOutlinePlus/>
</div>


</div>


<div className='flex justify-between items-center font-semibold'>
    
    <div className='w-[85%] bg-orange-500 rounded-lg text-center py-3 '>
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




        </div>
    )
}