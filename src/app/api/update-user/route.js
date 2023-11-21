
import { getLoggedInUser } from "@/utils/dbrelated";
import { NextResponse } from "next/server";

const { PrismaClient } = require('@prisma/client')

const prisma = new PrismaClient()


export async function POST(request,response) {


    try {

        const {userInfo,fieldsToUpdate} = await request.json()
       
        
        
        const updatedUser = await prisma.user.update({

            where:{id:userInfo.id},

            data:{...fieldsToUpdate}

        })


    return NextResponse.json({updatedUser:updatedUser},{status:200})

} catch (error) {

    
    // return NextResponse.json({error:error.message},{status:404})
    throw new Error(error.message)

}




}