"use client"

import { useEffect, useState } from "react";
import { DivContainer, FirstContainer } from "./Container";
import axios from "axios";
import { config } from "@/utils/superadminconfig";
import { useSelector } from "react-redux";



const showStatus = (status)=>{

    if(status=='Order Received'){
    return <p className="text-purple-500">{status}</p>

    }else if(status=='Confirmed'){
        return <p className="text-purple-500">{status}</p>
    
        }else if(status=='Dispatched'){
            return <p className="text-orange-500">{status}</p>
        
            }else if(status=='Completed'){
                return <p className="text-green-500">{status}</p>
                }else if (!status){
                return <p className="text-red-500">To be decided</p>

                }
        
}


export default function OrderHistory (){


    const [placedOrders,setPlacedOrders] = useState([]);

    const userInfo = useSelector(state=>state.userRelated.userDataObj);


    useEffect(()=>{

        axios.get(`http://127.0.0.1:1337/api/orders?populate=*&filters[Email][$eq]=${userInfo.email}`,config).then(resp=>{
            // console.log(resp.data.data);

            resp.data.data.forEach(eachOrder=>{

                const maintain = {
                    Status : eachOrder.attributes.Status,
                    relatedOrders : eachOrder.attributes.PlacedOrders
                }

                setPlacedOrders(oldVal=>{
                    return [...oldVal,maintain]
                })

            })
           

        }).catch(err=>{
            console.log(err);
        })


    },[])

    console.log(placedOrders);
    

    return(
        
        <FirstContainer heading='Order History'>

        <DivContainer >
        

{placedOrders.length>0?placedOrders.map((elem)=>{
    
    const {Status,relatedOrders} = elem;

    return relatedOrders.map(eachRelatedOrder=>{
    console.log(eachRelatedOrder);
    return <div className="pb-4 flex font-semibold items-center text-sm ">


        <div className="w-[80px] h-[80px] ">
            <img src={eachRelatedOrder?.PreviewImage} className="w-full h-full object-cover max-w-full" alt="" />
        </div>
    
        <div className="space-y-1 ml-4 ">
            <p className="text-base break-words max-w-[160px]">{eachRelatedOrder.ProductName}</p>
            <p className="text-[#475974] capitalize">Created by {userInfo.name}</p>
        </div>
    
    <div className="space-y-1 ml-auto text-right" >
    
    <p>{eachRelatedOrder.createdAt}</p>
    
    <div className="text-xl font-medium">
    {/* <p className="text-green-500">{Status}</p> */}
    
        {showStatus(Status)}
    
        </div>

    </div>
    
    
        </div>
    })
    

}):<div className="text-5xl text-red-500 text-center">No orders created yet</div>}



        </DivContainer>

        </FirstContainer>


    )
}