import Collections from '@/components/Homepage/Collections'
import {HeroSect,Testimonials} from '@/components/Homepage/HeroSect'
import { DifferentProductsPreview } from '@/components/Homepage/ProductCard'



export default function Home() {
  return (
   

    <div>
      
      <HeroSect/>

<Collections/>


<DifferentProductsPreview heading='Featured'/>
<DifferentProductsPreview heading='New Arrivals'/>



<Testimonials/>




    </div>

   )
}
