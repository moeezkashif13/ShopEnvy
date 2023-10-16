import { DivContainer, FirstContainer } from "./Container";

export default function OrderHistory (){
    return(
        
        <FirstContainer heading='Order History'>

        <DivContainer >
        

{[1,2,3,4,5,6,7].map((elem)=>{
    return <div className="pb-4 flex font-semibold items-center text-sm ">


    <div className="w-[80px] h-[80px] bg-yellow-400"></div>

    <div className="space-y-1 ml-4 ">
        <p className="text-base break-words max-w-[160px]">Dad's 60th Birthday</p>
        <p className="text-[#475974]">Created by Abdul Moeez</p>
    </div>

<div className="space-y-1 ml-auto text-right" >

<p>Sunday 12th May 2023</p>

<p className="text-green-500">Completed</p>

</div>


    </div>
})}



        </DivContainer>

        </FirstContainer>


    )
}