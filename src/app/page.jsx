import Footer from '@/components/Footer';
import Collections from '@/components/Homepage/Collections'
import {HeroSect,Testimonials} from '@/components/Homepage/HeroSect'
import { DifferentProductsPreview, toSlug } from '@/components/Homepage/ProductCard'
import Image from 'next/image';
import Link from 'next/link';
import { Suspense } from 'react';
import { AiOutlineHeart } from 'react-icons/ai';



// const mensClothingCategories = [
//   "T-Shirts",
//   "Shirts",
//   "Pants",
//   "Jeans",
//   "Suits",
//   "Jackets",
//   "Coats",
//   "Sweaters",
//   "Hoodies",
//   "Shorts",
//   "Activewear",
//   "Underwear",
//   "Socks",
//   "Swimwear",
//   "Accessories",
//   "Footwear",
// ];

// // You can customize and expand this array to include more specific men's clothing categories if needed.


async function getData() {

  // const fetchProducts = await fetch(`${process.env.NEXT_PUBLIC_STRAPI_URL}/api/products?populate[0]=categories&populate[1]=ProductPreviewImage&sort[0]=createdAt:desc&pagination[page]=1&pagination[pageSize]=8`)

  
  const fetchProducts = await fetch(`${process.env.NEXT_PUBLIC_WEBSITE}/api/send-products`)

  // console.log(fetchProducts,'fetchProducts fetchProducts fetchProducts');

  // The return value is *not* serialized
  // You can return Date, Map, Set, etc.

  
  // const fetchCategories = await fetch(`${process.env.NEXT_PUBLIC_STRAPI_URL}/api/categories?populate=products`);


  const fetchCategories = await fetch(`${process.env.NEXT_PUBLIC_WEBSITE}/api/send-categs`);


  if (!fetchProducts.ok || !fetchCategories.ok) {
    console.log('herrreeee');

    // This will activate the closest `error.js` Error Boundary
    throw new Error('Failed to fetch data')
  }

  const productsToJSON = await fetchProducts.json();
  const categoriesToJSONFirstStep = await fetchCategories.json();

const categoriesToJSON = categoriesToJSONFirstStep.categs.data.filter(eachCateg=>{
  return eachCateg.attributes.products.data.length>0
})

const findRandomCategory = categoriesToJSON[(Math.floor(Math.random() * categoriesToJSON.length))].attributes
  
  let avienCheck = [];

  const findProductsByRandomCategory = productsToJSON.products.data.map(eachProduct=>{
// console.log(eachProduct);
    const multipleCategoriesOfProduct = eachProduct.attributes.categories.data
    
    const chalCheck =  multipleCategoriesOfProduct.map(check=>{

      if(check.attributes.Name == findRandomCategory.Name){
        return eachProduct
      }
    }).filter(onlyTruthy=>{
      return onlyTruthy
    })

return chalCheck


  }).filter(onlyTruthy=>{
    return onlyTruthy.length>0
  }).forEach(validOnly=>{
    return avienCheck.push(...validOnly)
  })

  return {
    products : productsToJSON.products,
    productsByRandomCategory : {categoryName: findRandomCategory.Name ,products:avienCheck},

    categories : categoriesToJSON


    // categories :  categoriesToJSON
  }
}


export const metadata = {
  title: 'Shop Envy - Your One-Stop E-commerce Destination',
  description: 'Discover a wide range of products at Shop Envy. Find everything you need in one place',
  icons: {
    icon: '/icon.png',
  },
  openGraph: {
    title: 'Next.js',
    description: 'The React Framework for the Web',
    url: 'https://nextjs.org',
    siteName: 'Next.js',
    images: [
      {
        url: 'https://nextjs.org/og.png',
        width: 800,
        height: 600,
      },
      {
        url: 'https://nextjs.org/og-alt.png',
        width: 1800,
        height: 1600,
        alt: 'My custom alt',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },


}

const randomlySelectedArray = [];

function selectRandomElements(originalArray) {
  while (randomlySelectedArray.length < 8) {
    // Generate a random index within the range of originalArray
    const randomIndex = Math.floor(Math.random() * originalArray.length);

    // Get the element at the random index
    const randomElement = originalArray[randomIndex];

    // Add the element to randomlySelectedArray
    randomlySelectedArray.push(randomElement);

    // Remove the selected element from originalArray to avoid duplicates
    originalArray.splice(randomIndex, 1);
  }
}


export default async function Home() {


  const data = await getData();

  selectRandomElements(data.products.data)

  

  return (
   

    <div className='space-y-14'>
      
      <HeroSect/>

{/* <Collections/> */}



{/* <DifferentProductsPreview productsData={productsData} /> */}
{/* <DifferentProductsPreview heading='New Arrivals'/> */}


<div className='space-y-7'>

<p className='text-center text-2xl lg:text-4xl font-bold uppercase'>Shop {data.productsByRandomCategory.categoryName} </p>


<div className='flex flex-wrap gap-x-3 justify-center gap-y-7 '>


{data.productsByRandomCategory.products.map((elem,key)=>{
  return <Link key={key} href={`/productpage/${elem.attributes.SKU}?product=${toSlug(elem.attributes.Name)}&id=${elem.id}`} className='w-[320px] space-y-2  '>
  
  {/* return <Link key={key} href={`/productpage/${elem.id}`} className='w-[320px] space-y-2  '> */}

    <div className='w-full h-[440px]  relative'>
      {/* <img src={`${elem.attributes.ProductPreviewImage}`} className='w-full max-w-full object-cover h-full' alt="" /> */}

      <Image src={`${elem.attributes.ProductPreviewImage}`} fill />

    <div className='w-10 h-10 flex justify-center items-center rounded-full bg-white absolute right-4 bottom-4 text-xl cursor-pointer'>
      <AiOutlineHeart/>
    </div>


    </div>

<p className='pr-4 font-bold  pt-1'>{elem.attributes.Name}</p>


<div className='flex gap-x-16  font-semibold'>

<p className='text-[#002FAC] '>PKR {new Intl.NumberFormat().format(elem.attributes.DiscountedPrice)}</p>


  <p className='text-[#C8C8C8] line-through'>PKR {new Intl.NumberFormat().format(elem.attributes.Price)}</p>


</div>


  </Link>
})}



</div>



</div>


<div className='space-y-7'>


<p className='text-center text-2xl lg:text-4xl font-bold uppercase'>Newest Arrivals </p>

{/* <p className='font-bold text-4xl'>Trending</p> */}


<div className='flex flex-wrap gap-x-3 gap-y-7 justify-center'>



{randomlySelectedArray.map((eachProduct,key)=>{
  
  return <Link key={key} href={`/productpage/${eachProduct.attributes.SKU}?product=${toSlug(eachProduct.attributes.Name)}&id=${eachProduct.id}`} className='w-[320px] space-y-2  '>


  {/* // return <Link key={key} href={`/productpage/${eachProduct.id}`} className='w-[320px] space-y-2  '> */}



    <div className='w-full h-[440px]  relative'>

      <img src={`${eachProduct.attributes.ProductPreviewImage}`} className='w-full max-w-full object-cover h-full' alt="" />

    <div className='w-10 h-10 flex justify-center items-center rounded-full bg-[#ffffff] absolute right-4 bottom-5 text-2xl cursor-pointer'>
      <AiOutlineHeart/>
    </div>


    </div>


<p className='pr-4 font-bold  pt-1'>{eachProduct.attributes.Name}</p>


<div className='flex gap-x-16  font-semibold'>

<p className='text-[#002FAC] '>PKR {new Intl.NumberFormat().format(eachProduct.attributes.DiscountedPrice)}</p>


  <p className='text-[#C8C8C8] line-through'>PKR {new Intl.NumberFormat().format(eachProduct.attributes.Price)}</p>


</div>


  </Link>
})}



</div>



</div>




<div className='bg-[#F6F6F6] h-[620px] w-full hidden lg:flex gap-x-0 justify-center relative z-10   text-[#4a4848] overflow-hidden'>


<div className=' text-[4rem] text-center  h-full font-bold absolute top-0 left-5  w-full -z-10 ' style={{writingMode:'vertical-lr',textOrientation:'mixed',}}>The best decision </div>


<div className=' text-[3.5rem] text-center leading-[7rem] h-full font-bold absolute top-0 right-2  w-full -z-10 ' style={{writingMode:'vertical-rl',textOrientation:'mixed',}}>you can make today </div>



<div className='h-full pt-10 w-[500px]   '>
  
  <Image src="/first.png" width={500} height={500} className='w-full h-full max-w-full object-contain' alt="" />
</div>


<div className='h-full pt-10 w-[500px]   '>


<Image src="/second.png" width={500} height={500} className='w-full h-full max-w-full object-contain' alt="" />



</div>



</div>



<Testimonials/>


<Footer/>



    </div>

   )
}
