"use client"

import { products } from '@/components/impdata'
import { base64Image } from '@/components/temp'
import { config } from '@/utils/superadminconfig'
import axios from 'axios'
import { useEffect } from 'react'

// const { PrismaClient } = require('@prisma/client')

// const prisma = new PrismaClient()


  
export default function PrismaCheck(){

//   useEffect(()=>{

//     const createCategs = async ()=>{

//       wello.forEach(async eachCateg=>{
// console.log(eachCateg);

//         await axios.post('http://localhost:1337/api/categories',{
         
        
//           "data": {
//             "Name": eachCateg
//           }
        
        
        
        
//         })


//       })

//     }

//     // createCategs()


//     const deleteCategs = async()=>{

//       await axios.get('http://localhost:1337/api/categories').then(resp=>{
//         console.log(resp.data);

//         resp.data.data.forEach(async deleteEach=>{
//             await axios.delete(`http://localhost:1337/api/categories/${deleteEach.id}`)
//         })

//       })

//     }
    
//     // deleteCategs()


//   },[])

  // main().then(async (resp) => {await prisma.$disconnect()}).catch(async (e) => {console.error(e,'errrorrrr aagyaaa'); await prisma.$disconnect()})


// useEffect(()=>{

//   axios.get('/api/temp-api').then(resp=>{
//     console.log(resp.data);
//   })

// },[])


useEffect(()=>{

  const Check = async ()=>{

    const findingProducts = [
      {ProductName:"Hello Check",PreviewImage:"URL bhii aagyaa"},
      {ProductName:"Hello Check 22222",PreviewImage:"URL bhii aagyaa 22222"},
      {ProductName:"Hello Check 33333",PreviewImage:"URL bhii aagyaa 33333"},
    ]


    try {

      await axios.post(`${process.env.NEXT_PUBLIC_STRAPI_URL}/api/orders?populate=PlacedOrders`, {


      "data":{
          "Name" : "Jisne orer place kiya",
          "Email": "jisneorderplacekiya@gmail.com",
          "PlacedOrders":[...findingProducts],
          "Status" : "Dispatched"
      }

      } ,config )

  } catch (error) {
      console.log(error,'error.message error.message error.message');
      throw new Error(error.message)
  }

  }


  // Check()


  // axios.get('http://127.0.0.1:1337/api/products?populate=categories&sort[0]=createdAt:desc&pagination[page]=1&pagination[pageSize]=8').then(resp=>{
  //   console.log(resp.data.data);
  // }).catch(err=>{
  //   console.log(err);
  // })


  // axios.get('http://127.0.0.1:1337/api/categories').then(resp=>{
  //   console.log(resp.data.data);
  // }).catch(err=>{
  //   console.log(err);
  // })

  // 4d54d7bc4e9c781d7cebb1d17a7d4c8edeca8a56d387f7b21f842c1936cec89bcb395591e0466a38eca69cdb8a41afc93f2633500ffcc552a75ee424efa787d83ad2008ea8834300d7e1a2ac261e1220b7321499280ce9de043b3e95842903dbf9de6978f2811eda209b6978fade86c4770d56dc16740e21592d11b83d7a787d

  const well = async()=>{
    
    const getCategs = await axios.get('http://localhost:5050/api/categories').then(resp=>{
      return resp.data.data
    })

const allCategs = getCategs.map(eachCateg=>{
  return eachCateg.attributes.Name
})

console.log(allCategs);
  
// allCategs.forEach(async checking=>{

//   axios.post(`${process.env.NEXT_PUBLIC_STRAPI_URL}/api/categories`,{
//     "data":{
//       "Name" : checking
//     },
//   },{
//     headers:{
//       Authorization: 'Bearer 4d54d7bc4e9c781d7cebb1d17a7d4c8edeca8a56d387f7b21f842c1936cec89bcb395591e0466a38eca69cdb8a41afc93f2633500ffcc552a75ee424efa787d83ad2008ea8834300d7e1a2ac261e1220b7321499280ce9de043b3e95842903dbf9de6978f2811eda209b6978fade86c4770d56dc16740e21592d11b83d7a787d'
//     }
//   }).then(resp=>{
//     console.log(resp.data);
//   }).catch(err=>{
//     console.log(err);
//   })

// })

  //   axios.get(`${process.env.NEXT_PUBLIC_STRAPI_URL}/api/categories`).then(resp=>{
  //   console.log(resp.data);
  // }).catch(err=>{
  //   console.log(err);
  // })

   
  }

  // well()
  
  const avien = async()=>{
    

    const wellCheck = await fetch('/api/send-products')

    const sendCheck = await wellCheck.json();
    
    console.log(sendCheck);



}




},[])




    return <div>PrismaCheck</div>
}