
import { NextResponse } from "next/server";

export async function GET(request,response){

   const products = await (await fetch(process.env.PRODS_DATA)).json()

   

    return NextResponse.json({products : products},{status:200})

}