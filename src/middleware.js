import axios from 'axios';
import { NextResponse } from 'next/server'
import { verifyJWTToken } from './utils/tokensrelated';
import { cookies } from 'next/headers';
 
// This function can be marked `async` if using `await` inside
export async function middleware(request) {
    // console.log('i wasss hereee');

    const path = request.nextUrl.pathname;

    const isPublicPath = path === '/login' || path === '/register';

    const getToken = request.cookies.get('token')?.value || null;


    try {


      if(!getToken){
        
        return NextResponse.redirect(new URL('/login',request.nextUrl))

      }

      const verifyingToken = await fetch('http://localhost:3000/api/verifyinguser',{method:'POST',body:JSON.stringify({
        getToken
    }),})

      const data = await verifyingToken.json()


      
    } catch (error) {

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