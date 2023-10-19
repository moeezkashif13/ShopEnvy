
const { PrismaClient } = require('@prisma/client')

const prisma = new PrismaClient()


const wello = [
  "Rugby Shirts",
  "Sweatshirts",
  "Sweaters",
  "Hoodies",
  "Zippers",
  "Sweat Pants",
  "Jackets",
  "Long Coats",
  "Trench Coats",
  "Shackets & Shirts",
  "Thermal Suits",
  "Pakol Caps",
  "Mens Shawls",
  "Co-Ord Sets"
]

const rugbyshirtdesc = "Uniworth men's rugby polo shirt combines classic design with thoughtful construction. Long-sleeved,  all have their own unique place and character in our extensive collection. These versatile rugby polo shirts will elevate casual evening slacks or can be thrown on over a shirt for a quick and easy smart outfit style. Time to start your own collection."

const sizes  = ['S','M','L','XL','XXL']

const features = [

    {type:'Sleeve',answer:'Full Sleeves'},
    {type:'Fit',answer:'Regular Fit'},
    {type:'Cuff_Style',answer:'Single Cuff'},
    {type:'Collar_Style',answer:'Rugby'},
    {type:'Pattern',answer:'Plain'},
    {type:'Style',answer:'Yarn Dyed'},
    {type:'Material',answer:'100% Cotton'},
]


// const RugbyShirts = [

//     {
//         "title": "Maroon/Navy Striped Cotton Rugby Polo",
//         "price" : "Rs.3,495.00",
//         discountedprice:"Rs.2,800.00",
//         description : rugbyshirtdesc,
//         colors:["#7A1219","#181D31"],
//         sizes:sizes,
//         leftinstock:45,
//         sku:'TP23163-1',
//         productImage:[
//             "https://uniworthdress.com/uploads/product/0b9a9229981f4a391592490abfc6d917.JPG",
//             "https://uniworthdress.com/uploads/product/TP23163-1.jpg",
//             "https://uniworthdress.com/uploads/product/f9cd25128fa5a7d4ed061e239d5cf06d.jpg",
//             "https://uniworthdress.com/uploads/product/95995b5a1b9416f8b5f57c7002580f18.jpg",
//             "https://uniworthdress.com/uploads/product/a492c7cbad5a41749a4dee4c82eb1bfd.jpg"
//         ],
//         features: features
//     },
//     {
//         "title": "Black/Camel Contrast Collar Long Sleeve Polo",
//         "price" : "Rs.2,200.00",
//         discountedprice:"Rs.1,800.00",
//         description : rugbyshirtdesc,
//         colors:["maroon","navy"],
//         sizes:sizes,
//         leftinstock:24,
//         sku: 'TP2369',
//         productImage : [
//             "https://uniworthdress.com/uploads/product/1ca34cf1ded7c7253812115cac70727e.jpg",
//             "https://uniworthdress.com/uploads/product/c2b76fe1fb8725312d4431a0ca6c6d61.jpg",
//             "https://uniworthdress.com/uploads/product/TP2369..jpg",
//             "https://uniworthdress.com/uploads/product/398e4c1aba9ffe0c55cfd6be701ff6a1.jpg",
//             "https://uniworthdress.com/uploads/product/19bcefd96963d519a9c6fb7a13d6c64f.jpg",
//             "https://uniworthdress.com/uploads/product/f098af30eb6e9fc025b1a19bc2991e45.jpg"
//         ],
//         features: features
//     },
//     {
//         "title": "Maroon/Blue Striped Cotton Rugby Polo",
//         "price" : "Rs.3,495.00",
//         discountedprice:"Rs.2,800.00",
//         description : rugbyshirtdesc,
//         colors:["maroon","navy"],
//         sizes:sizes,
//         leftinstock:56,
//         features: features
//     },
//     {
//         "title": "Green/Navy Striped Cotton Rugby Polo",
//         "price" : "Rs.3,100.00",
//         discountedprice:"Rs.2,600.00",
//         description : rugbyshirtdesc,
//         colors:["maroon","navy"],
//         sizes:sizes,
//         leftinstock:12,
//         features: features
//     },
//     {
//         "title": "Navy Plain Long Sleeve Cotton Polo",
//         "price" : "Rs.2,895.00",
//         discountedprice:"Rs.2,200.00",
//         description : rugbyshirtdesc,
//         colors:["maroon","navy"],
//         sizes:sizes,
//         leftinstock:48,
//         features: features
//     },
//     {
//         "title": "Navy Plain Long Sleeve Cotton Polo",
//         "price" : "Rs.2,895.00",
//         discountedprice:"Rs.2,200.00",
//         description : rugbyshirtdesc,
//         colors:["maroon","navy"],
//         sizes:sizes,
//         leftinstock:32,
//         features: features
//     },
//     {
//         "title": "Navy/White Striped Cotton Rugby Polo",
//         "price" : "Rs.2,495.00",
//         discountedprice:"Rs.2,100.00",
//         description : rugbyshirtdesc,
//         colors:["maroon","navy"],
//         sizes:sizes,
//         leftinstock:4,
//         features: features
//     },
//     {
//         "title": "Camel Contrast Collar Long Sleeve Polo",
//         "price" : "Rs.2,150.00",
//         discountedprice:"Rs.1,800.00",
//         description : rugbyshirtdesc,
//         colors:["maroon","navy"],
//         sizes:sizes,
//         leftinstock:9,
//         features: features
//     },
//     {
//         "title": "Maroon/Camel Contrast Collar Long Sleeve Polo",
//         "price" : "Rs.4,999.00",
//         "discountedprice" : "Rs.3,500.00",
//         description : rugbyshirtdesc,
//         colors:["maroon","navy"],
//         sizes:sizes,
//         leftinstock:22,
//         features: features
//     },
//     {
//         "title": "Green/Camel Contrast Collar Long Sleeve Polo",
//         "price" : "Rs.3,495.00",
//         "discountedprice" : "Rs.3,000.00",
//         description : rugbyshirtdesc,
//         colors:["maroon","navy"],
//         sizes:sizes,
//         leftinstock:20,
//         features: features
//     }


// ]


// document.querySelectorAll('.mz-thumb').forEach(eachOne=>{chal.push(eachOne.href)})


async function main() {



  await prisma.product.create({

    data:{
  
        description:'desc desc dsec',
        discountedprice:140,
        leftinstock : 90,
        name : 'THIRDDDD prodd hereee',
        price: 200,
        sku:'TP1010',
        color:['purple','orange','maroon','yellow'],
        sizes : ['XL','S','LG','2XL'],

        features: [{type:'Collar_Style',answer:'avien sa collar style'}],

        productImage: [
                        "https://uniworthdress.com/uploads/product/1ca34cf1ded7c7253812115cac70727e.jpg",
                        "https://uniworthdress.com/uploads/product/c2b76fe1fb8725312d4431a0ca6c6d61.jpg",
                        "https://uniworthdress.com/uploads/product/TP2369..jpg",
                        "https://uniworthdress.com/uploads/product/398e4c1aba9ffe0c55cfd6be701ff6a1.jpg",
                        "https://uniworthdress.com/uploads/product/19bcefd96963d519a9c6fb7a13d6c64f.jpg",
                        "https://uniworthdress.com/uploads/product/f098af30eb6e9fc025b1a19bc2991e45.jpg"
                    ],

          belongTo : {

            create:[
              {name:'Sweatshirts'},
              {name:'CoOrdSets'},
              {name:'RugbyShirts'},
            ]

          }
        

    }

  })

    
    // ... you will write your Prisma Client queries here
    const allUsers = await prisma.user.findMany()
    // console.log(allUsers,'allUsers allUsers allUsers')
  // return allUsers
  }
  
 
  


export default function PrismaCheck(){

  main().then(async (resp) => {await prisma.$disconnect()}).catch(async (e) => {console.error(e,'errrorrrr aagyaaa'); await prisma.$disconnect()})



    return <div>PrismaCheck</div>
}