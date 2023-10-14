import {AiOutlineShoppingCart,AiOutlineHeart,AiOutlineUser, AiFillHeart} from 'react-icons/ai'

export default function Navbar(){
    return (
        <div className='py-3'>

{/* <div className="text-center py-3 bg-gray-200 text-sm font-semibold">
    <p>Note: All orders shall be delivered in 2-3 working days.</p>
</div> */}

<div className="px-6 flex justify-between items-center py-5">

<div>
    <img src="https://monark.com.pk/cdn/shop/files/logo_white_opt_265x_2fb3956e-3294-4982-9512-7a4483174909.png?v=1644069341&width=200" alt="" />
</div>

<div className="px-3 py-3 bg-white flex gap-x-6 rounded-xl text-black text-sm">

<input type="text" placeholder='Search for products' className="text-black outline-none bg-transparent w-[400px]" />


<div>magni</div>

</div>


<div className="flex text-2xl gap-x-4">
    

<div  className='relative cursor-pointer'>
<AiOutlineHeart />
<div className='absolute text-xs font-semibold flex justify-center items-center -right-1 -bottom-1 w-4 h-4 rounded-full bg-yellow-500'>{Math.floor(Math.random()*9)}</div>
</div>



<div  className='relative cursor-pointer'>
<AiOutlineShoppingCart/>
<div className='absolute text-xs font-semibold flex justify-center items-center -right-1 -bottom-1 w-4 h-4 rounded-full bg-yellow-500'>{Math.floor(Math.random()*9)}</div>

</div>


<div className='cursor-pointer' >
<AiOutlineUser/>

</div>


</div>


</div>



<div className='mt-3 px-16 flex justify-center gap-10'>


<div>T-Shirts</div>
<div>Polo Shirts</div>
<div>Casual Shirts</div>
<div>Suits</div>
<div>Dress Shirt</div>
<div>Lounge Wear</div>
<div>Jeans</div>
<div>Cotton Pants</div>
<div>Dress Pants</div>
<div>Accessories</div>



</div>






        </div>
    )
}