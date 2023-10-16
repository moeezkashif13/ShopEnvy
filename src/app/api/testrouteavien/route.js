import { verifyJWTToken } from "@/utils/tokensrelated";
import { cookies } from "next/headers";
import { NextResponse } from "next/server";

export async function POST(request,response) {


    try {
console.log('insideee posttt');
// console.log(request);
        const bodyData = await request.json()
        console.log(bodyData,'bodyData bodyData');

      const verifyingToken = await verifyJWTToken(bodyData.getToken)


    return NextResponse.json({decodedToken: verifyingToken},{status:200})

} catch (error) {

    
    // return NextResponse.json({error:error.message},{status:404})
    throw new Error(error.message)

}




}