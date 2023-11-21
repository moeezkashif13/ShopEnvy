import Footer from '@/components/Footer'
import { Testimonials } from '@/components/Homepage/HeroSect'
import { toSlug } from '@/components/Homepage/ProductCard'
import Image from 'next/image'
import Link from 'next/link'
import {AiOutlineShoppingCart,AiOutlineHeart,AiOutlineUser, AiFillHeart} from 'react-icons/ai'




async function getData() {

    // const fetchProducts = await fetch(`${process.env.NEXT_PUBLIC_STRAPI_URL}/api/products?populate[0]=categories&populate[1]=ProductPreviewImage&sort[0]=createdAt:desc&pagination[page]=1&pagination[pageSize]=8`)
  
    
    const fetchProducts = await fetch(`${process.env.NEXT_PUBLIC_WEBSITE}/api/send-products`)
  
  
    const fetchCategories = await fetch(`${process.env.NEXT_PUBLIC_WEBSITE}/api/send-categs`);
  
  
    if (!fetchProducts.ok || !fetchCategories.ok) {
      
  
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
  // 
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
  
  








const Navbar = ()=>{
    return <div className="absolute w-full  px-12 py-5 flex justify-between h-[100px] text-white ">

<div></div>

<div>
    
    <img src="/logo.png"   className='w-[250px] h-full object-cover max-w-full' alt="" />

</div>


<div className="flex gap-x-4 text-2xl items-center ">


<Link href='/profile'><AiOutlineUser/></Link>


<Link href='/checkout' className='flex relative'>

<AiOutlineShoppingCart/>

<div className='w-6 h-6 absolute flex justify-center items-center font-semibold -right-3 -bottom-3 rounded-full bg-red-500 text-base'>2</div>


</Link>



</div>




    </div>
}

const HeroSect = ()=>{


    return <div className="h-screen w-full ">

<div className='absolute w-full h-full z-20'>
        <Navbar/>
</div>

<div className=' w-full h-full'>





{/* <img src="https://images.unsplash.com/photo-1475403614135-5f1aa0eb5015?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" className='w-full max-w-full object-cover h-full' alt="" /> */}


<img src="/herosect.jfif" className='w-full max-w-full object-cover h-full' alt="" />
</div>

<div className='z-10 w-full h-full bg-[rgba(0,0,0,0.6)] absolute top-0 left-0'></div>


    </div>

}


const ShowProds = ({heading,para,arr})=>{


    return <div className='space-y-1'>


<p className='text-center uppercase text-2xl font-semibold underline'>{heading}</p>

<p className='text-center w-1/2 mx-auto text-lg'>{para}</p>


<div className='flex justify-center gap-x-2 flex-wrap px-2 pt-3 gap-y-4'>

{arr.map((elem,key)=>{
    return <Link key={key} href={`/productpage/${elem.attributes.SKU}?product=${toSlug(elem.attributes.Name)}&id=${elem.id}`}  className='w-[calc(25%-8px)] '>

<div className='w-full h-[492px]  relative'>

<Image loading='lazy' src={`${elem.attributes.ProductPreviewImage}`} fill  />




</div>

<div className='text-lg  text-center '>

<p className='truncate  mt-3 mb-1 font-medium px-3'>{elem.attributes.Name}</p>

<div className='flex justify-center font-semibold gap-x-20'>

<p className='text-[#002FAC]'>PKR {new Intl.NumberFormat().format(elem.attributes.DiscountedPrice)}</p>

<p className='text-[#554c4c] line-through'>PKR {new Intl.NumberFormat().format(elem.attributes.Price)}</p>



</div>


</div>




    </Link>
})}



</div>





    </div>



}


const Special = ()=>{
    return         <div className='bg-[#F6F6F6] h-[620px] w-full hidden lg:flex gap-x-0 justify-center relative z-10   text-[#4a4848] overflow-hidden'>


    <div className=' text-[4rem] text-center  h-full font-bold absolute top-0 left-5  w-full -z-10 ' style={{writingMode:'vertical-lr',textOrientation:'mixed',}}>The best decision </div>
    
    
    <div className=' text-[3.5rem] text-center leading-[7rem] h-full font-bold absolute top-0 right-2  w-full -z-10 ' style={{writingMode:'vertical-rl',textOrientation:'mixed',}}>you can make today </div>
    
    
    
    <div className='h-full pt-10 w-[500px]   '>
      
      <Image src="/first.png" width={500} height={500} className='w-full h-full max-w-full object-contain' alt="" />
    </div>
    
    
    <div className='h-full pt-10 w-[500px]   '>
    
    
    <Image src="/second.png" width={500} height={500} className='w-full h-full max-w-full object-contain' alt="" />
    
    
    
    </div>
    
    
    
    </div>
}




export default async function NewHomepage(){

    const data = await getData();

    selectRandomElements(data.products.data)


    return <div className='space-y-6'>
        

        <HeroSect/>


<div className='space-y-8'>

        <ShowProds heading={`Shop ${data.productsByRandomCategory.categoryName}`} para='A collection that offers a symphony of colors and textures' arr={data.productsByRandomCategory.products}  />


        <ShowProds heading='Newest Arrivals' para='Step into a world of exquisite style with our ready-to-wear collection, showcasing an unmatched sense of elegance.' arr={randomlySelectedArray}  />

        </div>


<Special/>



<Testimonials/>


<Footer/>




    </div>
}