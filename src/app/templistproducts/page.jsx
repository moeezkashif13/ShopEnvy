"use client"


import Link from "next/link";
import { useEffect } from "react";

const slugify = require('slugify')


const menClothingProducts = [
    {
      name: "Classic Men's Suit",
      description: "A timeless and elegant suit for formal occasions.",
      price: 299.99,
      sizes: ["S", "M", "L", "XL", "XXL"],
      SKU: "MCS001",
      stock: 50
    },
    {
      name: "Casual Denim Jeans",
      description: "Comfortable and stylish jeans for everyday wear.",
      price: 49.99,
      sizes: ["30", "32", "34", "36"],
      SKU: "MDJ002",
      stock: 100
    },
    {
      name: "Sporty Hooded Jacket",
      description: "A sporty and warm jacket for outdoor activities.",
      price: 79.99,
      sizes: ["M", "L", "XL"],
      SKU: "MSH003",
      stock: 75
    },
    {
      name: "Cotton Dress Shirt",
      description: "A crisp and formal dress shirt for a polished look.",
      price: 39.99,
      sizes: ["15.5", "16", "16.5", "17"],
      SKU: "MDS004",
      stock: 120
    },
    {
      name: "Leather Belt",
      description: "A durable and stylish leather belt to complete your outfit.",
      price: 19.99,
      sizes: ["32", "34", "36", "38"],
      SKU: "MLB005",
      stock: 200
    },
    {
      name: "Slim Fit Chinos",
      description: "Modern and slim-fit chino pants for a trendy look.",
      price: 59.99,
      sizes: ["28", "30", "32", "34"],
      SKU: "MSC006",
      stock: 80
    },
    {
      name: "Warm Wool Sweater",
      description: "A cozy and warm wool sweater for cold weather.",
      price: 69.99,
      sizes: ["S", "M", "L", "XL"],
      SKU: "MWS007",
      stock: 60
    },
    {
      name: "Canvas Sneakers",
      description: "Casual and comfortable sneakers for everyday use.",
      price: 29.99,
      sizes: ["7", "8", "9", "10", "11"],
      SKU: "MCS008",
      stock: 150
    },
    {
      name: "Striped Necktie",
      description: "A classic striped necktie to enhance your formal attire.",
      price: 14.99,
      sizes: ["One Size"],
      SKU: "MNT009",
      stock: 250
    },
    {
      name: "Woolen Beanie Hat",
      description: "A stylish and warm beanie hat to keep you cozy in winter.",
      price: 19.99,
      sizes: ["One Size"],
      SKU: "MBH010",
      stock: 100
    }
  ];
  
  
  
const toSlug = (text)=>{
    return slugify(text, {
        replacement: '-',  // replace spaces with replacement character, defaults to `-`
        remove: undefined, // remove characters that match regex, defaults to `undefined`
        lower: true,    // convert to lower case, defaults to `false`
        strict: false,     // strip special characters except replacement, defaults to `false`
        locale: 'vi',      // language code of the locale to use
        trim: true        // trim leading and trailing replacement chars, defaults to `true`
      })
      
}

// Your original array with duplicate objects
const originalArray = [
  { name: 'Alice', age: 30, job: 'Engineer' },
  { name: 'Bob', age: 25, job: 'Designer' },
  { name: 'Alice', age: 30, job: 'Engineer' }, // Duplicate
  { name: 'Carol', age: 35, job: 'Manager' },
  { name: 'Bob', age: 25, job: 'Designer' },     // Duplicate
  { name: 'David', age: 28, job: 'Developer' }
];


export default function TempListProducts(){

  useEffect(()=>{

    
// Create a new array to store unique objects
// const uniqueArray = [];

// // An object to keep track of unique objects based on a key
// const uniqueObject = {};
// console.log(originalArray);
// // Loop through the original array
// for (const obj of originalArray) {
//   const key = `${obj.name}_${obj.age}_${obj.job}`;
//   // console.log(key);
//   console.log(uniqueObject[key]);
//   // Check if the key already exists in the uniqueObject
//   if (!uniqueObject[key]) {
//       uniqueArray.push(obj); // If not, add the object to uniqueArray
//       uniqueObject[key] = true; // Mark the key as seen
//   }
// }

// console.log(uniqueArray);


// Your original array with objects


// Filter out duplicates based on the 'name', 'age', and 'job' properties
const uniqueArray = originalArray.filter((obj, index, array) => {
  // Check if there's no other object in the array with the same 'name', 'age', and 'job'
  return !array.slice(0, index).some(
      (otherObj) => obj.name === otherObj.name && obj.age === otherObj.age && obj.job === otherObj.job
  );
});

console.log(uniqueArray);



  },[])



    return (
        <div>
            
            <div className="px-20 py-12 flex flex-wrap justify-between gap-y-8 text-white font-semibold text-lg">

        {menClothingProducts.map(eachCloth=>{
            return <Link href={`/productpage/${toSlug(eachCloth.name)}?sku=${eachCloth.SKU}`} className="flex justify-center items-center flex-col px-6 text-center space-y-5 w-[380px] h-[400px]  bg-purple-500  rounded-lg">
                <p>Name: {eachCloth.name}</p>
                <p>Desc: {eachCloth.description}</p>
                <p>SKU: {eachCloth.SKU}</p>
                
                <p>Stock: {eachCloth.stock}</p>
                <p>Price: {eachCloth.price}</p>
            </Link>
        })}


            </div>



        </div>
    )

}