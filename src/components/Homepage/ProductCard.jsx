export const  ProductCard = ({small})=>{

    const randomNumb = Math.floor(Math.random()*10);

    const isOnSale = randomNumb>5 ? true : false


    return (

        <div className="w-[330px]   text-center space-y-2">

            <div className="h-[430px] ">
                <img src="https://www.almirah.com.pk/cdn/shop/files/al-ks-2965_2_600x.jpg?v=1694523376" className="w-full h-full object-cover max-w-full" alt="" />
            </div>

<p className="text-sm pt-1">BROWN BLENDED KAMEEZ SHALWAR - AL-KS-2967</p>

<div className="flex gap-x-7 w-full justify-center">
    <p>Rs.8,170.00 </p>
    <p>Rs.6,120.00 </p>

</div>


<div className="flex justify-between font-medium">


        <div className="px-6 py-2.5 rounded-lg bg-red-500">Visit Product</div>
        <div className="px-6 py-2.5 rounded-lg bg-red-500">Add to cart</div>


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


<div className="flex gap-5 justify-center flex-wrap">


{[1,2,3,4,5,6,7,8].map((elem)=>{
    return <ProductCard/>
})}


</div>



        </div>


    )


}