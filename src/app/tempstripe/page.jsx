"use client"

import {loadStripe} from '@stripe/stripe-js';
import {
  EmbeddedCheckoutProvider,
  EmbeddedCheckout
} from '@stripe/react-stripe-js';
import { useEffect, useState } from 'react';
import axios from 'axios';

import {useRouter} from 'next/navigation'

// Make sure to call `loadStripe` outside of a component’s render to avoid
// recreating the `Stripe` object on every render.
// This is your test public API key.
const stripePromise = loadStripe(process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY);


const ProductDisplay = () => {


  const router = useRouter()

  return(  <section>
    <div className="product">
      <img
        src="https://i.imgur.com/EHyR2nP.png"
        alt="The cover of Stubborn Attachments"
      />
      <div className="description">
      <h3>Stubborn Attachments</h3>
      <h5>$20.00</h5>
      </div>
    </div>
      <button onClick={()=>{

        axios.post('/api/temp-stripe').then(resp=>{
          console.log(resp.data);

          router.push(resp.data.sessionURL)

        })

      }} className='w-full bg-yellow-500 py-4'>
        Checkout
      </button>
  </section>
);

    }

const Message = ({ message }) => (
  <section>
    <p>{message}</p>
  </section>
);



export default function TempStripe(){


  const [message, setMessage] = useState("");

  useEffect(() => {
    // Check to see if this is a redirect back from Checkout
    const query = new URLSearchParams(window.location.search);

    if (query.get("success")) {
      setMessage("Order placed! You will receive an email confirmation.");
    }

    if (query.get("canceled")) {
      setMessage(
        "Order canceled -- continue to shop around and checkout when you're ready."
      );
    }
  }, []);



    return <div>

{ message ? (
    <Message message={message} />
  ) : (
    <ProductDisplay />
  )
}


    </div>
}