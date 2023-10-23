import { categs } from "@/components/impdata";
import { NextResponse } from "next/server";

export async function GET(request,response){


    return NextResponse.json({categs : categs},{status:200})

}