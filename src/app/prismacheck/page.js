"use client"

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

      await axios.post('http://127.0.0.1:1337/api/orders?populate=PlacedOrders', {


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


  Check()


})




    return <div>PrismaCheck</div>
}