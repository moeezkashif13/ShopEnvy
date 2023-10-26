
import { useDispatch, useSelector } from "react-redux"

import {useRouter} from 'next/navigation'
import { clearCartAndItsRelated } from "@/utils/reduxrelated";

const Checking = (item)=>{

    
    var number = parseFloat(item?.Price?.toString().replace(/,/g, ''))

    
    
    var result = number * item.selectedQuantity;
    
    // Format the result back to a string with two decimal places and commas
    var resultString = result.toLocaleString('en-US', { style: 'decimal', minimumFractionDigits: 2 });

    return resultString

}


export default function SecondCart(){

    const cartArray = useSelector(state=>state.usercart.cart)

    const router = useRouter()
    
    const subTotal = cartArray?.map(eachItem=>{
       
        return Checking(eachItem)

    })

    const dispatch = useDispatch();
    

// Initialize a variable to store the sum
var sum = 0;

// Iterate through the array and add each element after converting to a number
for (var i = 0; i < subTotal.length; i++) {
    var number = parseFloat(subTotal[i].replace(/,/g, ''));
    sum += number;
}

// Format the sum back to a string with two decimal places and commas
var result = sum.toLocaleString('en-US', { style: 'decimal', minimumFractionDigits: 2 });




return <div className="w-full lg:w-1/2  px-4 lg:px-20 py-3 lg:py-12 space-y-6 lg:space-y-12 linearBG text-white relative z-20">


    <div className="w-full h-full absolute left-0 top-0 -z-10 ">
    
    <svg id='patternId' width='100%' height='100%' xmlns='http://www.w3.org/2000/svg'><defs><pattern id='a' patternUnits='userSpaceOnUse' width='70' height='8' patternTransform='scale(2) rotate(135)'><rect x='0' y='0' width='100%' height='100%' fill='hsla(0, 0%, 100%, 0)'/><path d='M-.02 22c8.373 0 11.938-4.695 16.32-9.662C20.785 7.258 25.728 2 35 2c9.272 0 14.215 5.258 18.7 10.338C58.082 17.305 61.647 22 70.02 22M-.02 14.002C8.353 14 11.918 9.306 16.3 4.339 20.785-.742 25.728-6 35-6 44.272-6 49.215-.742 53.7 4.339c4.382 4.967 7.947 9.661 16.32 9.664M70 6.004c-8.373-.001-11.918-4.698-16.3-9.665C49.215-8.742 44.272-14 35-14c-9.272 0-14.215 5.258-18.7 10.339C11.918 1.306 8.353 6-.02 6.002'  strokeWidth='0.5' stroke='hsla(163, 69%, 16%, 1)' fill='none'/></pattern></defs><rect width='800%' height='800%' transform='translate(0,0)' fill='url(#a)'/></svg>
    
    </div>
    
    
    
    
    <div className="  flex gap-x-5">
        <div>ic</div>
        <p>logo</p>
    </div>
    
    
     <div className=" space-y-2.5 ">
    
        <p>Continue your checkout process</p>
    
        <p className="text-5xl font-semibold">PKR {result} </p>
    </div>


<div onClick={()=>{

    clearCartAndItsRelated(dispatch);
}}
 className="bg-[hsl(160,33%,34%)]  cursor-pointer font-medium text-center py-3 text-xl rounded-md ">
    Clear cart 
</div>

<div onClick={()=>{

router.push('/')

}}
className="bg-[hsl(160,33%,34%)]  cursor-pointer font-medium text-center py-3 text-xl rounded-md ">
Go To Homepage
</div>

    
    <div className="space-y-6">
    
    
    {cartArray.length>0?cartArray.map((eachItemFromCart)=>{

        
        return   <div style={{transition:'all 0.8s'}} className="rounded-lg  px-5 py-3 bg-[#39514A] hover:bg-[hsl(163,17%,5%)] flex flex-col lg:flex-row text-sm lg:text-base">
    
        <div className="space-y-2">
            <p>{eachItemFromCart.Name}</p>  
            
            <div className="flex gap-x-5">
            <p className="text-sm">Quantity: {eachItemFromCart.selectedQuantity}</p>
            <p className="text-sm">Size: {eachItemFromCart.selectedSize}</p>
            </div>

        </div>

        
    
        <div className=" lg:ml-auto lg:text-right flex gap-y-2 justify-between mt-2 lg:block lg:space-y-2 lg:mt-0">
            <p>PKR {new Intl.NumberFormat().format(eachItemFromCart.Price)}.00</p>
            <p>Total: {Checking(eachItemFromCart)}</p>

        </div>
    
            </div>
    }):<div className="space-y-4"><div className="text-center font-semibold text-2xl">No items in cart</div><div onClick={()=>router.push('/')} className="bg-[hsl(160,33%,25%)] cursor-pointer w-full text-center py-3 text-xl rounded-md">Shop Now</div></div>}
    
    
    
    </div>
    
    
    <div className="space-y-5">
    
    
    <div className="flex">
        <p>Subtotal</p>
        <p className="ml-auto">PKR {result}</p>
    </div>
    
    {/* <div className="bg-[#183028] h-1"></div>
    
    
    <div className="space-y-3 ">
    
        <p>Add promotion code</p>
    
    <div className="flex">
        <p>Tax</p>
        <p className="ml-auto">US $0.00</p>
    </div>
    
    </div> */}
    
    
    <div className="bg-[#183028] h-1"></div>
    
    
    {/* <div className="flex">
    <p>Total due today</p>
    <p className="ml-auto">US ${result}</p>
    </div> */}
    
    
    
    </div> 
    
    
    
    
    
    
    </div>
}