import { getLoggedInUser } from '@/utils/dbrelated'
import { verifyJWTToken } from '@/utils/tokensrelated'
import {NextResponse} from 'next/server'


import { cookies } from 'next/headers'


export async function GET(request,response) {


try {
    
    const user = await verifyJWTToken(request)
    const gettingUser = await getLoggedInUser(user)
    
    // thn return user

    return NextResponse.json({user:gettingUser},{status:200})
} catch (error) {


    
    cookies().delete('token')

    return NextResponse.json({error:error.message},{status:404})

    
}



}