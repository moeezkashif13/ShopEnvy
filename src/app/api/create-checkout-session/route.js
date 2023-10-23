// This is your test secret API key.
const stripe = require('stripe')(process.env.STRIPE_SECRET_KEY);


const YOUR_DOMAIN = 'http://localhost:3000';



import {NextResponse} from 'next/server'

export async function POST(request,response) {


try {

    const {cartArray,convertedPreview,userDetails} = await request.json();

const LineItemsArray = cartArray.map(eachItem=>{

    const findRelevantPreviewImage = convertedPreview.filter(eachImage=>{
                return eachImage.id == eachItem.id
    })

   
    return {
        price_data:{
            currency:"pkr",
            product_data:{
                name : eachItem.Name,
                description: eachItem.Description,
                images : [`${findRelevantPreviewImage[0]?.data?.url}`],
                metadata: {
                    Name: userDetails.name,
                    Email : userDetails.email,
                    PreviewImage : findRelevantPreviewImage[0]?.data?.url,
                    ProductName : eachItem.Name,

                }
            },
            unit_amount : eachItem.Price*100
        },
        quantity : eachItem.selectedQuantity
    }
})
    


    const session = await stripe.checkout.sessions.create({
        line_items: LineItemsArray,
        mode: 'payment',
         payment_method_types : ["card"],
        success_url: `${YOUR_DOMAIN}/checkout/payment/order-placed?success=true`,
        cancel_url: `${YOUR_DOMAIN}/checkout/payment/order-placed?success=false`,
      });    
    

    return NextResponse.json({user:'gettingUser',session:session.url},{status:200})


} catch (error) {

    console.log('alsooo hereee');

    
    return NextResponse.json({error:error.message},{status:404})

    
}



}