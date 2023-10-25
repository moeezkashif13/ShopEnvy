import { useDispatch, useSelector } from "react-redux";
import { DivContainer, FirstContainer, LittleInfo, commonClasses } from "./Container"
import axios from "axios";
import { useState } from "react";
import Loader from "../Loader";
import { setUser } from "@/app/globalredux/features/userslice/userslice";

const { PrismaClient } = require('@prisma/client')

const prisma = new PrismaClient()

const ProfileImage = ()=>{

    const userInfo = useSelector(state=>state.userRelated.userDataObj);


    return <DivContainer>

    <div className="flex flex-col gap-y-2 md:flex-row gap-x-3.5 items-center font-semibold">
    
        <div className="w-20 h-20 rounded-full ">
            <img src={userInfo?.profilepic?.avatarurl} className="w-full max-w-full h-full object-cover rounded-full" alt="" />
        </div>
    
        <div>
            <p className="capitalize">{userInfo.name}</p>
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

function toCamelCase(inputString) {
    return inputString
      .split(' ')
      .map((word, index) => {
        if (index === 0) {
          return word.toLowerCase();
        } else {
          return word.charAt(0).toUpperCase() + word.slice(1).toLowerCase();
        }
      })
      .join('');
  }
  
  function arrayToObject(array) {
    const result = {};
    for (const obj of array) {
      for (const key in obj) {
        if (obj.hasOwnProperty(key)) {
          result[key] = obj[key];
        }
      }
    }
    return result;
  }
  

const Address = ()=>{


    const userInfo = useSelector(state=>state.userRelated.userDataObj);

    const [loading,setLoading] = useState(false);
    const [detailsUpdateError,setDetailsUpdateError] = useState('')
    const dispatch = useDispatch();

    const relavantArr = [
        {heading:'Address',text:userInfo.address},
        {heading:'City',text:userInfo.city},
        {heading:'Zip Code',text:userInfo.zipCode},
        {heading:'Country',text:userInfo.country},

    ]



    const updateShippingDetails = async ()=>{


        const gatherThem = relavantArr.map(eachElem=>{
            return eachElem.heading.replace(/ +/g, "")
        }).map(eachOne=>{
            return document.querySelector(`#${eachOne}`).value;
        })

        const gettingMain = relavantArr.map((eachElem,index)=>{
            return {[toCamelCase(eachElem.heading)]:gatherThem[index]}
        })

        const requiredObj = arrayToObject(gettingMain)

        if(!requiredObj.address||!requiredObj.zipCode||!requiredObj.city||!requiredObj.country){
            setDetailsUpdateError('Please fill all fields')
            return
        }

        setLoading(true);
        

        try {

            const response = await axios.post('/api/update-user',{userInfo,fieldsToUpdate:requiredObj})
            
            console.log(response.data);
            

            dispatch(setUser(response.data.updatedUser));

        setLoading(false);


    } catch (error) {

        setDetailsUpdateError(error.message)

        
        setLoading(false);

    }

    }
    

    return <DivContainer>


    <p className="font-semibold text-lg">Address</p>

    {(userInfo.isOAuth && !userInfo.address)&&


    <p className="text-red-500 text-lg font-medium">As you have logged in using OAuth Provider, you will need to provide your shipping details here or at the checkout</p>
}


    <div className={`${commonClasses}  ${userInfo.isOAuth&&'gap-x-5'} `}>

{loading?<Loader/>:
 
 <>

{relavantArr.map((elem)=>{
        return <LittleInfo inputField={!elem.text ? true : false }  data={elem} />
    })}

{console.log(userInfo.address)}
{(userInfo.isOAuth && !userInfo.address)&&
    <div className="flex flex-col w-full gap-y-4 items-center">

    <div className="bg-black font-medium text-white mx-auto px-5 py-3 cursor-pointer rounded-md" onClick={updateShippingDetails}>Update Details Here</div>

{detailsUpdateError&&<p className="text-red-500 font-medium text-3xl">{detailsUpdateError}</p>}

</div>

}


    </>
    
}




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