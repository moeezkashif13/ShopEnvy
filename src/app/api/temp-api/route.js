
import { NextResponse } from "next/server";
const stripe = require('stripe')(process.env.STRIPE_SECRET_KEY);


export async function GET(request,response) {

    // const product = await stripe.products.create({
    //     name: 'Gold Special',
    //   });
      

//     const gotProducts = await stripe.products.list({
//         // limit:10,
//         // ids: ['prod_Or5cy3TqH02SQt','prod_Or5ceqb1WfWEZr'],
// ids:['prod_Or5cy3TqH02SQt','prod_Or5ceqb1WfWEZr']
//     });
// 
const checking = await stripe.checkout.sessions.listLineItems(
    'cs_test_a1LGhJwTGrw3Rf5vhIhzf4aVZnHmv82EPkEcY6gAj7dsHLZFxaM5B0p1lE',
)  


const product = await stripe.products.retrieve(
    'prod_Or5vsBHZvRVC1s'
  );

  


    return NextResponse.json({checking : checking,product:product,gotProducts:'gotProducts',hello:'hello'},{status:200})


}