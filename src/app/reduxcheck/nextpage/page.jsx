"use client"

import { useDispatch, useSelector } from "react-redux";


export default function NextPage(){

  const count = useSelector((state) => state); // Access the counter state

  console.log(count);


    return <div>nextpage</div>
}