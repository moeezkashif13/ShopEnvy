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

    


    return <DivContainer>


    <p className="font-semibold text-lg">Personal Information</p>

    <div className={`${commonClasses}`}>


    {[1,2,3,4,5].map((elem)=>{
        return <LittleInfo/>
    })}



    </div>


    
    
    </DivContainer>
}



const Address = ()=>{
    return <DivContainer>


    <p className="font-semibold text-lg">Address</p>

    <div className={`${commonClasses}`}>


    {[1,2,3,4,5].map((elem)=>{
        return <LittleInfo/>
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