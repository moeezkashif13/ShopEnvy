import axios from 'axios';
import { NextResponse } from 'next/server'
import { verifyJWTToken } from './utils/tokensrelated';
import { cookies } from 'next/headers';
 
// This function can be marked `async` if using `await` inside
export async function middleware(request) {
    // console.log('i wasss hereee');

    const path = request.nextUrl.pathname;

    console.log(path,'path path path path path');

    const isPublicPath = path === '/login' || path === '/register';

    const isPrivatePath = path.includes('/profile');
    

    const getToken = request.cookies.get('token')?.value || null;

      if(!getToken){
        
        return NextResponse.redirect(new URL('/login',request.nextUrl))

      }

      try {
        

        console.log('i shoulddd nottt be hereeee');
    //   if(isPrivatePath){

              const verifyingToken = await fetch('http://localhost:3000/api/verifyinguser',{method:'POST',body:JSON.stringify({
        getToken
    }),})

      const data = await verifyingToken.json()


    //   const verifyingToken = await fetch('http://localhost:3000/api/verifyinguser',{method:'POST',body:JSON.stringify({
    //     getToken
    // }),})

    //   const data = await verifyingToken.json()

        // return NextResponse.redirect(new URL('/profile',request.nextUrl))

    
    
      } catch (error) {
        console.log(error,'error from middleware error from middleware  error from middleware  error from middleware ');
        return NextResponse.redirect(new URL('/login',request.nextUrl))

      }


    

}


export const config = {
  matcher: [
  
    // '/login', //public
    // '/register', //public
    // '/publicpath',
    // '/secretroute',
    '/profile/:path*' //private

  ],


}