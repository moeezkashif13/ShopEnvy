import { createOrderInStrapi } from '@/utils/createOrderInStrapi';
import { headers } from 'next/headers';
import {NextResponse} from 'next/server'
const stripe = require('stripe')(process.env.STRIPE_SECRET_KEY);

// Find your endpoint's secret in your Dashboard's webhook settings
const endpointSecret = process.env.STRIPE_WEBHOOK_KEY;

const fulfillOrder = async (lineItems) => {


   await createOrderInStrapi(lineItems);

   

}


export async function POST(request,response) {

  const payload = await request.text();
    
    
    const sig =  headers().get('stripe-signature');
    
    let event;
  
    try {
        console.log('insideee seconddd trrryyy');
        event = await stripe.webhooks.constructEvent(payload, sig, endpointSecret);


          // Handle the checkout.session.completed event
  if (event.type === 'checkout.session.completed') {
    // Retrieve the session. If you require line items in the response, you may include them by expanding line_items.
    const sessionWithLineItems = await stripe.checkout.sessions.retrieve(
      event.data.object.id,
      {
        expand: ['line_items'],
      }
    );

    console.log(event.data.object.id,'event.data.object.id event.data.object.idevent.data.object.id');

    const avienCheck = await stripe.checkout.sessions.listLineItems(
      event.data.object.id,
    ) 

    console.log(avienCheck,'avienCheck avienCheck avienCheck');

    const lineItems = sessionWithLineItems.line_items;

    // Fulfill the purchase...
    await fulfillOrder(lineItems);
  }


        


    return NextResponse.json({payload:'Got Payload from SERVER TO CLIENT'},{status:200})


      } catch (err) {
        console.log(err,'erroorrrr erroorrrr erroorrrr erroorrrr  ');

        return NextResponse.json({webhookerror:`Webhook Error: ${err.message}`},{status:400})

      }
    



}

