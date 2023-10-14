import { createUser } from '@/utils/dbrelated'
import {NextResponse} from 'next/server'
import {cookies} from 'next/headers'


const bcrypt = require("bcryptjs")
const jwt = require('jsonwebtoken')

export async function POST(request,response) {

    try {
    
        






    const bodyData = await request.json()
    const cookiesInstance = cookies()

    const {name,email,password} = bodyData

    const hashingPassword = await bcrypt.hash(password,10);

    bodyData['password'] = hashingPassword

    console.log(bodyData);

    if (password.length < 8) {
        throw new Error('Password errorr')
      }


    const creatingUser = await createUser(bodyData,"standard",false)

    console.log(creatingUser,'creatingUser creatingUser creatingUser');

    const maxAge = 3 * 60 * 60;
    const token = jwt.sign({ id: creatingUser.id},process.env.JWT_SECRET,{
        expiresIn: maxAge, // 3hrs in sec
      }
    );

    console.log(token,' token token token');

    cookiesInstance.set("token", token, {
        httpOnly: true,
        maxAge: maxAge * 1000, // 3hrs in ms
      });




    return NextResponse.json({userCreated:'yesss userr created tokenn alsoo createdd'},{status:200})










} catch (error) {

    console.log(error,'frommm serverrr');

    return NextResponse.json({error:error.message},{status:400})

        
}



}