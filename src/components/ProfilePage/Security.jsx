import { DivContainer, FirstContainer, LittleInfo, commonClasses } from "./Container";

export default function SecurityTab (){
    return(
        
       <FirstContainer heading='Security'>

<DivContainer >
    

<div className={` ${commonClasses} justify-between`}>

        <LittleInfo inputField={true}/>
        <LittleInfo inputField={true}/>

        <div className="w-full bg-orange-500 py-3 rounded-lg text-center cursor-pointer">Change Password </div>




</div>







</DivContainer>


       </FirstContainer>


    )
}