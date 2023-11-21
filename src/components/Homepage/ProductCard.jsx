
import Link from "next/link";

const slugify = require('slugify')


export const toSlug = (text)=>{
    return slugify(text, {
        replacement: '-',  // replace spaces with replacement character, defaults to `-`
        remove: undefined, // remove characters that match regex, defaults to `undefined`
        lower: true,    // convert to lower case, defaults to `false`
        strict: false,     // strip special characters except replacement, defaults to `false`
        locale: 'vi',      // language code of the locale to use
        trim: true        // trim leading and trailing replacement chars, defaults to `true`
      })
      
}

export const  ProductCard = ({eachProd})=>{

    const randomNumb = Math.floor(Math.random()*10);

    const isOnSale = randomNumb>5 ? true : false


const {id} = eachProd

    const {Name,DiscountedPrice,Price,SKU,ProductPreviewImage:{data:{attributes:{formats:{large:largePreview}}}}} = eachProd.attributes

    return (

        <Link href={`/productpage/${toSlug(Name)}?sku=${SKU}&id=${id}`} className="w-[330px]   text-center space-y-2">

            <div className="h-[530px] ">
                <img src={`${process.env.NEXT_PUBLIC_STRAPI_URL}${largePreview.url}`} className="w-full h-full object-cover max-w-full" alt="" />
            </div>

<p className="text-sm pt-1">{Name}</p>

<div className="flex gap-x-7 w-full justify-center">
    <p>Rs.{Price}.00   </p>
    <p>Rs.{DiscountedPrice}.00 </p>

</div>


<div className="flex justify-between font-medium">


        <div className="px-6 py-2.5 rounded-lg bg-red-500">Visit Product</div>
        <div className="px-6 py-2.5 rounded-lg bg-red-500">Add to cart</div>


</div>



        </Link>




        )
}



export const DifferentProductsPreview = ({productsData})=>{

    

    return (


        <div className="space-y-10">


<div className="flex gap-5 justify-center flex-wrap">


{productsData.data.map((eachProd)=>{
    return <ProductCard  eachProd={eachProd} />
})}


</div>



        </div>


    )


}