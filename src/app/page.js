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



export default function Home() {
  return (
   

    <div>
      
      <HeroSect/>

<Collections/>


<DifferentProductsPreview heading='Featured'/>
{/* <DifferentProductsPreview heading='New Arrivals'/> */}



<Testimonials/>




    </div>

   )
}
