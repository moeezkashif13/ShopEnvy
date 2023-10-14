const { PrismaClient } = require('@prisma/client')

const prisma = new PrismaClient()


async function main() {

    // await prisma.user.create({
    //     data: {
    //       name: 'Rich',
    //       email: 'hello@prisma.com',
    //       posts: {
    //         create: {
    //           title: 'My first post',
    //           body: 'Lots of really interesting stuff',
    //           slug: 'my-first-post',
    //         },
    //       },
    //     },
    //   })

//       await prisma.post.update({
//     where: {
//       slug: 'my-first-post',
//     },
//     data: {
//       comments: {
//         createMany: {
//           data: [
//             { comment: 'Great post!' },
//             { comment: "Can't wait to read more!" },
//           ],
//         },
//       },
//     },
//   })

    

    
    // ... you will write your Prisma Client queries here
    const allUsers = await prisma.user.findMany({
        include:{
            
            posts : true
        }
    })
    console.log(allUsers,'allUsers allUsers allUsers')
  
  }
  
 
  


export default function PrismaCheck(){

    main()
    .then(async () => {
      await prisma.$disconnect()
    })
    .catch(async (e) => {
      console.error(e,'errrorrrr aagyaaa')
      await prisma.$disconnect()
    //   process.exit(1)
    })



    return <div>PrismaCheck</div>
}