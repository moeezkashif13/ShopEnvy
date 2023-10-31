import Image from "next/image"
import Link from "next/link"
import { AiOutlineFacebook, AiOutlineTwitter } from "react-icons/ai"

export default function Footer(){

    return(
  <footer className="bg-neutral-100 text-center text-neutral-600 dark:bg-neutral-600 dark:text-neutral-200 lg:text-left">
  <div className="flex items-center justify-center border-b-2 border-neutral-200 p-6 dark:border-neutral-500 lg:justify-between">
    <div className="mr-12 hidden lg:block">
      <span>Get connected with us on social networks:</span>
    </div>
    {/* Social network icons container */}
    <div className="flex justify-center text-3xl gap-x-4">
     
     <AiOutlineTwitter/>
     <AiOutlineTwitter/>
     <AiOutlineTwitter/>
     <AiOutlineTwitter/>
     <AiOutlineTwitter/>
     
    </div>
  </div>
  {/* Main container div: holds the entire content of the footer, including four sections (Tailwind Elements, Products, Useful links, and Contact), with responsive styling and appropriate padding/margins. */}
  <div className="mx-6 py-10 text-center md:text-left text-sm">
    <div className="grid-1 grid gap-8 md:grid-cols-2 lg:grid-cols-4">
     
      {/* Products section */}
      <div className="uppercase">
        <h6 className="mb-4 flex justify-center font-semibold uppercase md:justify-start">
        ABOUT US
        </h6>
        
        {['about us','company','careers','store locator'].map((elem)=>{
            return <p className="mb-4">
            <a href="#!" className="text-neutral-600 dark:text-neutral-200">
            {elem}
            </a>
          </p>
        })}

        
      </div>
      {/* Useful links section */}
      <div className="uppercase">
        <h6 className="mb-4 flex justify-center font-semibold uppercase md:justify-start">
        MY ACCOUNT
        </h6>
       
       {[{text:'Login',link:'/login'},{text:'Create Account',link:'/register'},{text:'Account Info',link:'/profile'},{text:'Orders History',link:'/profile?visit=orders-history'},{text:'Orders Status',link:'/profile?visit=orders-history'}].map(elem=>{
        return  <p className="mb-4">
        <Link href={elem.link} className="text-neutral-600 dark:text-neutral-200">
          {elem.text}
        </Link>
      </p>
       })}


      </div>
      {/* Contact section */}
      <div>
        <h6 className="mb-4 flex justify-center font-semibold uppercase md:justify-start">
          Contact
        </h6>
        {/* <p className="mb-4 flex items-center justify-center md:justify-start">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="currentColor"
            className="mr-3 h-5 w-5"
          >
            <path d="M11.47 3.84a.75.75 0 011.06 0l8.69 8.69a.75.75 0 101.06-1.06l-8.689-8.69a2.25 2.25 0 00-3.182 0l-8.69 8.69a.75.75 0 001.061 1.06l8.69-8.69z" />
            <path d="M12 5.432l8.159 8.159c.03.03.06.058.091.086v6.198c0 1.035-.84 1.875-1.875 1.875H15a.75.75 0 01-.75-.75v-4.5a.75.75 0 00-.75-.75h-3a.75.75 0 00-.75.75V21a.75.75 0 01-.75.75H5.625a1.875 1.875 0 01-1.875-1.875v-6.198a2.29 2.29 0 00.091-.086L12 5.43z" />
          </svg>
          New York, NY 10012, US
        </p> */}
        <a href="mailto:moeezkashif13@gmail.com" className="mb-4 flex items-center justify-center md:justify-start">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="currentColor"
            className="mr-3 h-5 w-5"
          >
            <path d="M1.5 8.67v8.58a3 3 0 003 3h15a3 3 0 003-3V8.67l-8.928 5.493a3 3 0 01-3.144 0L1.5 8.67z" />
            <path d="M22.5 6.908V6.75a3 3 0 00-3-3h-15a3 3 0 00-3 3v.158l9.714 5.978a1.5 1.5 0 001.572 0L22.5 6.908z" />
          </svg>
          moeezkashif13@gmail.com
        </a>
        <a href="tel:+923364507406" className="mb-4 flex items-center justify-center md:justify-start">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="currentColor"
            className="mr-3 h-5 w-5"
          >
            <path
              fillRule="evenodd"
              d="M1.5 4.5a3 3 0 013-3h1.372c.86 0 1.61.586 1.819 1.42l1.105 4.423a1.875 1.875 0 01-.694 1.955l-1.293.97c-.135.101-.164.249-.126.352a11.285 11.285 0 006.697 6.697c.103.038.25.009.352-.126l.97-1.293a1.875 1.875 0 011.955-.694l4.423 1.105c.834.209 1.42.959 1.42 1.82V19.5a3 3 0 01-3 3h-2.25C8.552 22.5 1.5 15.448 1.5 6.75V4.5z"
              clipRule="evenodd"
            />
          </svg>
          +92 336 4507406
        </a>
        
      </div>

{/* Newsletter section */}
<div>
        <h6 className="mb-4 flex justify-center font-semibold uppercase md:justify-start">
          Sign up for updates
        </h6>

<p className="text-sm mb-4">
By entering your email address below, you consent to receiving our newsletter with access to our latest collections, events and initiatives. more details on this are provided in our Privacy Policy.
</p>

<div className="bg-black px-3 py-3 rounded-lg text-white gap-x-3 flex items-center ">

<div>ic</div>

<input className="w-full bg-transparent outline-none" placeholder="Email Address..." type="text" name="" id="" />


<div>ic</div>

</div>

       
      </div>

    </div>
    

<div className="flex gap-x-3">

<div className="w-16 h-10 rounded-lg relative  ">
      <Image fill src="/visa.png" className=" w-full max-w-full h-full object-contain rounded-lg" alt="" />
    </div>


    <div className="w-16 h-10 rounded-lg relative bg-white  ">
      <Image fill src="/mastercard.png" className="w-full max-w-full h-full object-contain rounded-lg" alt="" />
    </div>



</div>




  </div>
  {/*Copyright section*/}
  <div className="bg-neutral-200 py-4 text-center dark:bg-neutral-700 text-sm">
    <span>© 2023 Copyright:</span>
    <span
      className="font-semibold text-neutral-600 dark:text-neutral-400"

      >
      Shop Envy
    </span>
  </div>
</footer>
    )


}