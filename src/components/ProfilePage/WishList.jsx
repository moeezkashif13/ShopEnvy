import { DivContainer, FirstContainer } from "./Container";

export default function WishList (){


    return(
        
        <FirstContainer heading='Wishlist'>

        <DivContainer >



<div className="wishlist flex flex-wrap justify-between gap-y-4">
    
            {[1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19].map((elem,index)=>{
                return <div className={`py-3 px-3 bg-orange-500 w-[calc(50%-10px)] flex`}>
                    
            <div className="flex gap-x-3 items-center">

                <div className="w-[100px] h-[100px] bg-pink-500"></div>

                <div className="space-y-1.5">
                    
                    <p className="font-semibold">Wireless Headphones </p>
                    <div className="flex gap-x-1 ">
                        <p>st</p>
                        <p>st</p>
                        <p>st</p>
                        <p>st</p>
                        <p>st</p>
                    <p>(3 reviews)</p>

                    </div>
                    
                    <div className="bg-black px-7 inline-block py-2 text-white text-center rounded-lg cursor-pointer">Add to cart</div>
                    
                </div>


            </div>



                </div>
            })}

</div>


        </DivContainer>
        

</FirstContainer>
    )
}