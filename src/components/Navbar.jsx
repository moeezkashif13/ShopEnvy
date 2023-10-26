import Link from 'next/link'
import {AiOutlineShoppingCart,AiOutlineHeart,AiOutlineUser, AiFillHeart} from 'react-icons/ai'
import { NavbarCartIcon } from './Homepage/HeroSect';



async function getCategories() {

    // const fetchProducts = await fetch(`${process.env.NEXT_PUBLIC_STRAPI_URL}/api/products?populate[0]=categories&populate[1]=ProductPreviewImage&sort[0]=createdAt:desc&pagination[page]=1&pagination[pageSize]=8`)
  
    const fetchProducts = await fetch(`${process.env.NEXT_PUBLIC_WEBSITE}/api/send-products`)
  
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
  
      categories : categoriesToJSONFirstStep.categs.data
  

    }
  }



export default async function Navbar(){

    const {categories} = await getCategories();

    
    
    return (
        <div className='py-3'>

{/* <div className="text-center py-3 bg-gray-200 text-sm font-semibold">
    <p>Note: All orders shall be delivered in 2-3 working days.</p>
</div> */}

<div className="px-6 flex flex-col lg:flex-row space-y-3 lg:space-y-0 justify-between items-center py-5">

<div>
    <img src="https://monark.com.pk/cdn/shop/files/logo_white_opt_265x_2fb3956e-3294-4982-9512-7a4483174909.png?v=1644069341&width=200" alt="" />
</div>

<div className=" px-3 py-3 bg-white hidden lg:flex gap-x-6 rounded-xl text-black text-sm">

<input type="text" placeholder='Search for products' className="text-black outline-none bg-transparent  lg:w-[400px]" />


<div>icon</div>

</div>


<div className="flex text-2xl gap-x-4">
    

{/* <div  className='relative cursor-pointer'>
<AiOutlineHeart />
<div className='absolute text-xs font-semibold flex justify-center items-center -right-1 -bottom-1 w-4 h-4 rounded-full bg-yellow-500'>5</div>
</div> */}



<NavbarCartIcon/>


<Link  href={'/profile'} >
<AiOutlineUser/>

</Link>


</div>


</div>


<div className='mt-3 px-5 lg:px-16 text-center lg:text-left flex gap-y-3 text-sm lg:justify-center flex-wrap  lg:gap-x-10 lg:gap-y-6 lg:text-lg '>


{categories.map((eachCategory,key)=>{
    return <div key={key} style={{transition:'all 0.4s'}} className='lg:hover:scale-125 cursor-pointer w-full lg:w-auto' >{eachCategory.attributes.Name}</div>
})}


</div>






        </div>
    )
}