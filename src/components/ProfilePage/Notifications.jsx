import { DivContainer, FirstContainer } from "./Container";

const beautifulColors = [
    "#008080",
    "#9999e1",
    "#FF6B6B",
    "#87CEEB",
    "#98FB98",
    "#FFDAB9",
    "#C8A2C8",
    "#DAA520",
    "#6A5ACD",
    "#FA8072",
    "#CCCCFF",
    "#40E0D0",
    "#DA70D6",
    "#6495ED",
    "#FF007F",
    "#7FFFD4",
    "#EE82EE",
    "#FFD700",
    "#B0E0E6",
    "#43ddc9"
  ];
  
  // You can now use the beautifulColors array in your JavaScript code.
  

export default function NotificationsTab (){
    return(

        <FirstContainer heading='Notifications'>

        <DivContainer >
        
        <div className="flex   gap-y-4 justify-between flex-wrap text-white font-medium">
            

{beautifulColors.map((bgcolor,index)=>{



    return <div className="w-[200px] rounded-lg py-3 px-3 space-y-2 " style={{backgroundColor:`${bgcolor}`}}>

<p className="text-center text-black">Notification# {index+1}</p>

<p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi sint nesciunt itaque, dignissimos enim eos pariatur cumque voluptas. Dicta, enim!</p>


    </div>

})}


        </div>

        </DivContainer>

        </FirstContainer>


    )
}