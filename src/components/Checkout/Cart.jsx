

const cartItems = [2321,312,312,3123123]
export const Cart  = props=>{


//   ------------------------







// ---------------------------
    // const {subtotal} = cartDetails;

    // const {data} = useData();
    // const {innerText} = data;


    return(
        <>
        <div className='flex justify-between'>
            <h1 className='text-gray-500 bold'>Your Cart</h1>
            {/* <a href="#!" className='underline'>Edit</a> */}
        </div>



{cartItems.map((eachCartItem,index)=>{


return(

            <div  key={eachCartItem.id}  
            
            >

            <div className='flex font-bold mt-6 mb-3   xs:text-sm'>
            <div className="bg-orange-500" style={{width:'70px',height:'70px'}} >
                {/* <img src="dasdsadsd" tyle={{width:'100%',height:'100%'}} alt=""/> */}
            </div>
            
            <div className='flex flex-grow xs:flex-col xs:pl-2 xs:pr-0'>
            <div className=' flex-grow   w-3/5  ml-3 xs:w-full xs:ml-0'>
                <h4>name</h4>
                <h4 >Quantity: 3213123</h4>



            </div>
            
            <div className='w-4/12  flex flex-col items-end  xs:w-full  xs:flex-row xs:items-start  '>
                <h2 >total</h2>
                <h2 className='xs:ml-3'><span> Total:</span> <span className="totalPrice">total</span></h2>
    
            </div>
            </div>
    
                    </div>  
    
    
    <div className='text-center' >
        <a href="#!" className='text-red-700 font-semibold text-xs '>REMOVE ITEM</a>
    </div>
    
    
    </div>
    
)

})}

<div  className="mt-8">
        <div className='flex justify-between'>
            <h1  className='text-gray-700 font-medium '>Subtotal</h1>
            {/* <p className='font-bold subTotal'>{cartDetails.subtotal.formatted_with_symbol}</p> */}
            
            <p  className='font-bold subTotal'>subtotal formatted with symbol</p>
        </div>
        <div className='flex justify-between my-3'>
            <h1 className='text-gray-700 font-medium'>Shipping</h1>

            <p className='text-gray-500 font-medium '>

Dependent upon country

           

            </p>

        </div>
        <div className='flex justify-between'>
            <h1 className='text-gray-700 font-medium'>Taxes (estimated)</h1>

            {/* <p className='font-bold'>{taxRate?taxRate.formatted_with_symbol:<>Dependent upon country</>}</p> */}
            
<p className='font-bold xs:text-xs' >Tax Rate Dependent upon country</p>
        </div>
        {/* <div className='flex justify-between my-3'>
            <h1 className='text-gray-700 font-medium'>Tokens</h1>
            <p className='font-bold'>4</p>
        </div> */}
        <div className='flex  justify-between mt-5 items-center'>
           <div className='flex items-center'> <h1 className='text-gray-700 font-medium '>Total</h1>
            <p className='font-bold text-3xl ml-5'>formatted with symbol </p>
            </div>
          <p className='font-semibold xs:text-sm'>(Only Items Total)</p>
        </div>
</div>


        </>
    )

}