// This is your test secret API key.
const stripe = require('stripe')(process.env.STRIPE_SECRET_KEY);


const YOUR_DOMAIN = 'http://localhost:3000';



import {NextResponse} from 'next/server'

export async function POST(request,response) {


try {

    const {cartArray} = await request.json();

const LineItemsArray = cartArray.map(eachItem=>{
    return {
        price_data:{
            currency:"usd",
            product_data:{
                name : eachItem.name,
                description: eachItem.description
            },
            unit_amount : eachItem.price*100
        },
        quantity : eachItem.quantity
    }
})
    


    const session = await stripe.checkout.sessions.create({
        line_items: LineItemsArray,
        mode: 'payment',
         payment_method_types : ["card"],
        success_url: `${YOUR_DOMAIN}/secondcheckout/payment?success=true`,
        cancel_url: `${YOUR_DOMAIN}/secondcheckout/payment?canceled=true`,
      });    
    

    return NextResponse.json({user:'gettingUser',session:session.url},{status:200})


} catch (error) {

    console.log('alsooo hereee');

    
    return NextResponse.json({error:error.message},{status:404})

    
}



}