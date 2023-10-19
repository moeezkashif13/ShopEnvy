import { headers } from 'next/headers';
import {NextResponse} from 'next/server'
const stripe = require('stripe')(process.env.STRIPE_SECRET_KEY);

// Find your endpoint's secret in your Dashboard's webhook settings
const endpointSecret = 'whsec_cfac85dc6531ee63e3354a2b30ef47d20cd63ac5e85b6f4cc8c918668c20b2f1';

const fulfillOrder = (lineItems) => {
  // TODO: fill me in
  console.log("Fulfilling order", lineItems);
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
    const lineItems = sessionWithLineItems.line_items;

    // Fulfill the purchase...
    fulfillOrder(lineItems);
  }


        


    return NextResponse.json({payload:'Got Payload from SERVER TO CLIENT'},{status:200})


      } catch (err) {
        console.log(err,'erroorrrr erroorrrr erroorrrr erroorrrr  ');

        return NextResponse.json({webhookerror:`Webhook Error: ${err.message}`},{status:400})

      }
    



}

