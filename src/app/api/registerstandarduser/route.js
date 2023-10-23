import { createUser, loginUser } from '@/utils/dbrelated'
import {NextResponse} from 'next/server'
import {cookies} from 'next/headers'
import { settingCookiesForLoginSignup } from '@/utils/cookiesrelated'
import { sendMail } from '@/utils/sendmails'


const bcrypt = require("bcryptjs")


export async function POST(request,response) {

  const bodyData = await request.json()
  const cookiesInstance = cookies()


    if(bodyData.registration){


    try {
    


    const {name,email,password} = bodyData

    const hashingPassword = await bcrypt.hash(password,10);

    bodyData['password'] = hashingPassword

    console.log(bodyData);

    if (password.length < 8) {
        throw new Error('Password errorr')
      }


    const creatingUser = await createUser(bodyData,"standard",false)

    console.log(creatingUser,'creatingUser creatingUser creatingUser');

    await sendMail(creatingUser.name,'Please confirm your email paa g',creatingUser.email,creatingUser.emailConfirmationCode)


   await settingCookiesForLoginSignup(creatingUser)



    return NextResponse.json({userCreated:'yesss userr created tokenn alsoo createdd'},{status:200})





} catch (error) {

    console.log(error,'frommm serverrr');

    return NextResponse.json({error:error.message},{status:400})

        
}


}else if(bodyData.login){


  try {
    

  const { email, password } = bodyData
  // Check if username and password is provided
  if (!email || !password) {
    return NextResponse.json({error:'email or password not present'},{status:404})
  }


  const checkingUserInDB = await loginUser(email,password);


  // if(checkingUserInDB.status!=='active'){
  //   throw new Error('User is not active. Please verify your email');
  // }


 await settingCookiesForLoginSignup(checkingUserInDB)
  

  return NextResponse.json({user:checkingUserInDB.id},{status:200})


} catch (error) {
  return NextResponse.json({message:error.message,loggingIn:'errorrr inn logging inn userr'},{status:404})

}


}


}