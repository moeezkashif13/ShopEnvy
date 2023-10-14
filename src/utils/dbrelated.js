const { PrismaClient } = require('@prisma/client')

const prisma = new PrismaClient()

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
      
      const createdUserDetails = await prisma.user.create({
        data: {
          name: userdata.name,
          email: userdata.email,
          role : 'user',
          isOAuth: isOAuth,
          provider : provider,
          profilepic:{
            avatarurl:userdata.picture?userdata.picture:'https://www.google.com'
          }
        },
      })


      return createdUserDetails;
  
    }
  
    
  }