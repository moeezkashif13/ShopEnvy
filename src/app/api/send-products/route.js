import { products } from "@/components/impdata";
import { NextResponse } from "next/server";

export async function GET(request,response){


    return NextResponse.json({products : products},{status:200})

}