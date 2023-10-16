const { PrismaClient } = require('@prisma/client')

const prisma = new PrismaClient()
const jwt = require('jsonwebtoken')

const bcrypt = require("bcryptjs")

const crypto = require('crypto')


export async function createUser(userdata,provider,isOAuth=true) {

  
    const isEmailExist = await prisma.user.findFirst({
      where:{
        email : userdata.email
      }
    })


    if(isEmailExist){
      console.log('i existtttt');
  throw new Error('User already exists')
  
  
    }else{

      const emailConfirmationCode = crypto.randomBytes(32).toString('base64')

      
      const createdUserDetails = await prisma.user.create({
        data: {
          name: userdata.name,
          email: userdata.email,
          role : 'user',
          ...((!isOAuth&&provider=='standard')&&{password:userdata.password}),
          isOAuth: isOAuth,
          provider : provider,
          profilepic:{
            avatarurl:userdata.picture?userdata.picture:'https://www.google.com'
          },

          emailConfirmationCode : emailConfirmationCode


        },
      })


      return createdUserDetails;
  
    }
  
    
  }



export async function loginUser(email,password){

  console.log(email,'email email email');

  try {
    const user = await prisma.user.findFirst({ 

      where:{
        email:  email
      },

      


     })
    if (!user) {
      throw new Error('User not found brrroooooo')
    } else {
      // return user;

      const comparingPassword = await bcrypt.compare(password, user.password)

      if(comparingPassword){
        return user;
      }else{
        throw new Error('Login not successful')
      }




    }
  } catch (error) {
    console.log(error,'error, error, error,');
    throw new Error('errorrr inn checkingg userr brrrooo')

  }



}


export async function getLoggedInUser(userdata,confirmationCode){

  try {
    
    const isUserExist = confirmationCode ? await prisma.user.findFirst({
      where:{
        
        emailConfirmationCode : confirmationCode
        
      }
    })

    
    

    :  
    
    await prisma.user.findFirst({
      where:{
        
        id : userdata.id
        
      }
    })


    if(isUserExist){
      return isUserExist
    }else{
    throw new Error('Error in finding user')

    }


  } catch (error) {
    
    throw new Error(error.message)

  }
  
}



export async function updateUserStatus(user){

  try {
    
    const gotUser = await prisma.user.update({
      where:{
        
        id : user.id
        
      },

      data:{
        status:'active',
        emailConfirmationCode:''
      }


    })


  } catch (error) {
    console.log(error);
    throw new Error('Error in updating statuss')
    
  }


}