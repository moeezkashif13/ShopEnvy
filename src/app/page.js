import Collections from '@/components/Homepage/Collections'
import {HeroSect,Testimonials} from '@/components/Homepage/HeroSect'
import { DifferentProductsPreview } from '@/components/Homepage/ProductCard'


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
  const res = await fetch('http://127.0.0.1:1337/api/products?populate=ProductPreviewImage')
  // The return value is *not* serialized
  // You can return Date, Map, Set, etc.
 console.log('outsideeee');
  if (!res.ok) {
    console.log('herrreeee');
    // This will activate the closest `error.js` Error Boundary
    throw new Error('Failed to fetch data')
  }
 
  return res.json()
}



export default async function Home() {


  const productsData = await getData();

  // console.log(data);





  return (
   

    <div>
      
      <HeroSect/>

<Collections/>



<DifferentProductsPreview productsData={productsData} />
{/* <DifferentProductsPreview heading='New Arrivals'/> */}



<Testimonials/>




    </div>

   )
}
