export const  ProductCard = ({small})=>{

    const randomNumb = Math.floor(Math.random()*10);

    const isOnSale = randomNumb>5 ? true : false


    return (
        <div className={`${small?'w-[250px] flex flex-col items-center' : 'w-[300px]'}  space-y-2`}>
            


            <div className={`w-full ${small?'h-[365px]' : 'h-[450px]'} bg-green-500`}>

<img src="https://diners.com.pk/cdn/shop/files/FAP031MAROONRS3790-03_1370x.webp?v=1695453527" className="w-full h-full max-w-full " alt="" />


            </div>

<p >Basic Full Sleeves T-Shirt</p>

{isOnSale ? 


<div className="flex items-center">
    
    <div className={` font-bold w-full flex ${small&&'flex-col text-center'}`}>
<p>Rs 2,090</p>
<p className="line-through ml-auto">Rs 4,090.00</p>
</div>


{/* <div className="ml-auto bg-red-700 font-semibold text-sm text-white px-2 py-1">25% OFF</div> */}


</div>

:


<p className=" font-bold ">Rs 2,090</p>

}


<div className={`flex gap-x-2 font-semibold `}>



{['s','m','l','xl'].map(elem=>{
    return <div className="cursor-pointer w-8 h-8 rounded-full bg-pink-500 flex justify-center items-center">{elem}</div>
})}



</div>




        </div>
    )
}



export const DifferentProductsPreview = ({heading})=>{

    return (


        <div className="space-y-10">


<div className="text-4xl text-center font-semibold pb-2 border-b-4  border-b-red-500">
    <p>{heading}</p>
</div>


<div className="flex gap-7 justify-center flex-wrap">

<ProductCard/>
<ProductCard/>
<ProductCard/>
<ProductCard/>
<ProductCard/>


</div>



        </div>


    )


}