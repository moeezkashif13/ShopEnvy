const { PrismaClient } = require('@prisma/client')

const prisma = new PrismaClient()


const bcrypt = require("bcryptjs")

const crypto = require('crypto')


export async function createUser(userdata,provider,isOAuth=true) {

  
    const isEmailExist = await prisma.user.findFirst({
      where:{
        email : userdata.email
      }
    })


    if(isEmailExist){
      

      if(isOAuth){
        return isEmailExist
      }


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
            avatarurl:userdata.profileimagefile?userdata.profileimagefile:'https://www.google.com'
          },

          
          ...((!isOAuth&&provider=='standard')&&{address: userdata.address,
            city: userdata.city,
            zipCode: userdata.zipCode,
            country: userdata.country,
  
            emailConfirmationCode : emailConfirmationCode}),

          


        },
      })


      return createdUserDetails;
  
    }
  
    
  }



export async function loginUser(email,password){

  

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
    
    throw new Error('errorrr inn checkingg userr brrrooo')

  }



}

// Exclude keys from user
function exclude(user, keys) {
  return Object.fromEntries(
    Object.entries(user).filter(([key]) => !keys.includes(key))
  );
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

      // const excludedFields = exclude(isUserExist, ['password','emailConfirmationCode'])


      // return excludedFields

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
    
    throw new Error('Error in updating statuss')
    
  }


}