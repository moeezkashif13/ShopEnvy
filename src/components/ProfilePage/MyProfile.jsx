import { useSelector } from "react-redux";
import { DivContainer, FirstContainer, LittleInfo, commonClasses } from "./Container"

const ProfileImage = ()=>{
    return <DivContainer>

    <div className="flex gap-x-3.5 items-center font-semibold">
    
        <div className="w-20 h-20 rounded-full bg-orange-500"></div>
    
        <div>
            <p>Abdul Moeez</p>
            <p>User</p>
        </div>
    
    </div>
    
    </DivContainer>
}

const PersonalInformation = ()=>{

    const userInfo = useSelector(state=>state.userRelated.userDataObj);

    const relavantArr = [
        {heading:'First Name',text:userInfo.name.split(' ')[0]},
        {heading:'Last Name',text:userInfo.name.split(' ')[1]},
        {heading:'Email',text:userInfo.email},
        {heading:'Account Status',text:userInfo.status},

    ]

    return <DivContainer>


    <p className="font-semibold text-lg">Personal Information</p>

    <div className={`${commonClasses} `}>


    {relavantArr.map((elem)=>{
        return <LittleInfo data={elem} />
    })}



    </div>


    
    
    </DivContainer>
}



const Address = ()=>{


    const userInfo = useSelector(state=>state.userRelated.userDataObj);

    const relavantArr = [
        {heading:'Address',text:userInfo.address},
        {heading:'City',text:userInfo.city},
        {heading:'Zip Code',text:userInfo.zipCode},
        {heading:'Country',text:userInfo.country},

    ]


    return <DivContainer>


    <p className="font-semibold text-lg">Address</p>

    <div className={`${commonClasses}`}>


    {relavantArr.map((elem)=>{
        return <LittleInfo data={elem} />
    })}



    </div>


    
    
    </DivContainer>
}


export default function MyProfile(){
    return <FirstContainer>
    <ProfileImage/>
    
    
    <PersonalInformation/>
    
    
    <Address/>
    
    
    
    </FirstContainer>
}