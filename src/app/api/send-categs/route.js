
import { NextResponse } from "next/server";

export async function GET(request,response){

   const categs = await (await fetch(process.env.CATEGS_DATA)).json()



    return NextResponse.json({categs : categs},{status:200})

}