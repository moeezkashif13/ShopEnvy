import { useSelector } from "react-redux"

export default function SecondCart(){

    const cartArray = useSelector(state=>state.usercart.cart)

    console.log(cartArray);


    const subTotal = cartArray.map(eachItem=>{
        return eachItem.price*eachItem.quantity
    }).reduce(function (accumulator, curValue) {

        return accumulator + curValue
      
      }, 0)
      
      

    console.log(subTotal);


return <div className="w-1/2  px-20 py-12 space-y-12 linearBG text-white relative z-20">


    <div className="w-full h-full absolute left-0 top-0 -z-10">
    
    <svg id='patternId' width='100%' height='100%' xmlns='http://www.w3.org/2000/svg'><defs><pattern id='a' patternUnits='userSpaceOnUse' width='70' height='8' patternTransform='scale(2) rotate(135)'><rect x='0' y='0' width='100%' height='100%' fill='hsla(0, 0%, 100%, 0)'/><path d='M-.02 22c8.373 0 11.938-4.695 16.32-9.662C20.785 7.258 25.728 2 35 2c9.272 0 14.215 5.258 18.7 10.338C58.082 17.305 61.647 22 70.02 22M-.02 14.002C8.353 14 11.918 9.306 16.3 4.339 20.785-.742 25.728-6 35-6 44.272-6 49.215-.742 53.7 4.339c4.382 4.967 7.947 9.661 16.32 9.664M70 6.004c-8.373-.001-11.918-4.698-16.3-9.665C49.215-8.742 44.272-14 35-14c-9.272 0-14.215 5.258-18.7 10.339C11.918 1.306 8.353 6-.02 6.002'  stroke-width='0.5' stroke='hsla(163, 69%, 16%, 1)' fill='none'/></pattern></defs><rect width='800%' height='800%' transform='translate(0,0)' fill='url(#a)'/></svg>
    
    </div>
    
    
    
    
    <div className="  flex gap-x-5">
        <div>ic</div>
        <p>logo</p>
    </div>
    
    
     <div className=" space-y-2.5 ">
    
        <p>Continue your checkout process</p>
    
        <p className="text-5xl font-semibold">US ${subTotal}.00</p>
    
    
    </div>
    
    
    
    <div className="space-y-6">
    
    
    {cartArray.map((eachItemFromCart)=>{
        return   <div className="rounded-lg  px-5 py-3 bg-[#39514A] flex">
    
        <div className="space-y-2">
            <p>{eachItemFromCart.name}</p>
            
            <div className="flex gap-x-5">
            <p className="text-sm">Quantity: {eachItemFromCart.quantity}</p>
            <p className="text-sm">Size: {eachItemFromCart.sizes}</p>
            </div>

        </div>

        
    
        <div className="ml-auto text-right space-y-2">
            <p>US ${eachItemFromCart.price}</p>
            <p>Total: ${eachItemFromCart.price*eachItemFromCart.quantity}.00</p>
        </div>
    
            </div>
    })}
    
    
    
    </div>
    
    
    <div className="space-y-5">
    
    
    <div className="flex">
        <p>Subtotal</p>
        <p className="ml-auto">US ${subTotal}.00</p>
    </div>
    
    <div className="bg-[#183028] h-1"></div>
    
    
    <div className="space-y-3 ">
    
        <p>Add promotion code</p>
    
    <div className="flex">
        <p>Tax</p>
        <p className="ml-auto">US $0.00</p>
    </div>
    
    </div>
    
    
    <div className="bg-[#183028] h-1"></div>
    
    
    <div className="flex">
    <p>Total due today</p>
    <p className="ml-auto">US $19.99</p>
    </div>
    
    
    
    </div> 
    
    
    
    
    
    
    </div>
}