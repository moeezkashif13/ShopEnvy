import { getLoggedInUser, updateUserStatus } from "@/utils/dbrelated";
import { NextResponse } from "next/server";

export async function GET(request,{params}) {


    try {

        
        
const findUser = await getLoggedInUser(null,params.confirmationcode.join('/'))

const updatedStatus = await updateUserStatus(findUser)



    return NextResponse.json({updatedStatus,done:'donee'},{status:200})

} catch (error) {
    return NextResponse.json({error:error.message},{status:400})

}


}