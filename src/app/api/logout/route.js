import { cookies } from "next/headers";
import { NextResponse } from "next/server";

export async function GET(request,response) {

  const cookiesInstance = cookies()

  cookiesInstance.delete('token');

    return NextResponse.json({loggedOut:true},{status:200})

}