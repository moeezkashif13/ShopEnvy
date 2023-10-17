//page.jsx

//Basically, this is how access the stored state or update the store with state of your component.

"use client";

import { useDispatch, useSelector } from "react-redux";
import { increment, decrement } from "@/app/globalredux/features/counter/counterSlice";
import Link from "next/link";


export default function ReduxCheck() {
//useSelector gets the state from store
  const count = useSelector((state) => state.counter.value); // Access the counter state

//useDispatch updates the store with the state from a component, as defined by your logic inside the counterslice.js
  const dispatch = useDispatch();

  return (
    <div>
      <h1>Counter: {count}</h1> {/* Display the counter state */}
      <button onClick={() => dispatch(increment())}>Increment</button>
      <button onClick={() => dispatch(decrement())}>Decrement</button>

<Link href='/reduxcheck/nextpage'>Go to next page</Link>


    </div>
  );
}
