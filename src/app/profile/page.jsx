"use client"

import Billing from "@/components/ProfilePage/Billing";
import DeleteAccount from "@/components/ProfilePage/DeleteAccount";
import MyProfile from "@/components/ProfilePage/MyProfile";
import NotificationsTab from "@/components/ProfilePage/Notifications";
import OrderHistory from "@/components/ProfilePage/OrderHistory";
import SecurityTab from "@/components/ProfilePage/Security";
import WishList from "@/components/ProfilePage/WishList";
import axios from "axios";
import { useEffect, useState } from "react"
import { AiFillDelete, AiFillLock, AiOutlineCreditCard, AiOutlineHeart, AiOutlineHistory, AiOutlineUser } from "react-icons/ai";
import { GrNotification } from "react-icons/gr";
import { MdDeleteOutline } from "react-icons/md";
import { IoMdNotificationsOutline } from "react-icons/io";
import { useDispatch, useSelector } from "react-redux";
import { setUser } from "../globalredux/features/userslice/userslice";
import Loader from "@/components/Loader";





const profileNavLinks = [

    {text:'Profile',icon:<AiOutlineUser/>,component:<MyProfile/>},
    {text:'Security',help:'security-tab',icon:<AiFillLock/>,component:<SecurityTab/>},
    {text:'Notifications',icon:<IoMdNotificationsOutline/>,component:<NotificationsTab/>},
    // {text:'Billing',icon:<AiOutlineCreditCard/>,component:<Billing/>},
    {text:'Order History',help:'orders-history',icon:<AiOutlineHistory/>,component:<OrderHistory/>},
    {text:'WishList',icon:<AiOutlineHeart/>,component:<WishList/>},
   
    {text:'Delete Account',icon:<MdDeleteOutline/>,component:<DeleteAccount/>},

]


const selectTab = (profileNavLinks,setActiveTab,index)=>{
    const firstElement = profileNavLinks[index];
    const secondElement = profileNavLinks[index+1];
    const thirdElement = profileNavLinks[index+2];

    const goToPrevious = profileNavLinks[index-1]
    const goToTWOPrevious = profileNavLinks[index-2]

    if(!secondElement){

        console.log('hellooo');

        setActiveTab([firstElement.component,goToPrevious.component,goToTWOPrevious.component])
        return;

    } else if(!thirdElement){
        setActiveTab([firstElement.component,secondElement.component,goToPrevious.component])
        return;
    }  
    

    setActiveTab([firstElement.component,secondElement.component,thirdElement.component])
}


export default function Profile(props){

    const userInfo = useSelector(state=>state.userRelated.userDataObj);

console.log(userInfo);

    const [userLoading,setUserLoading] = useState(true);

    const dispatch = useDispatch();

    const [activeTab,setActiveTab] = useState([

        <MyProfile/>,
        <SecurityTab/>,
        <NotificationsTab/>

    ])

    useEffect(()=>{

        const getUser = async()=>{

            setUserLoading(true)
            

            try {
                
                const user = await axios.get('/api/getuserdetails');

                dispatch(setUser(user.data.user));
                setUserLoading(false)


            } catch (error) {
                setUserLoading(false)
            }

        }


        getUser()
    },[])


    useEffect(()=>{

        const findingNeededTab = ()=>{
            
        const getVisitParam = new URLSearchParams(window.location.search).get('visit')
        
        const findRelavantIndex = profileNavLinks.findIndex(eachLink=>{
            return eachLink.help == getVisitParam
        })

        console.log(findRelavantIndex);

        if(findRelavantIndex == -1 || !findRelavantIndex){
            return;
        }else{
            
        selectTab(profileNavLinks,setActiveTab,findRelavantIndex)

            
        }

    }

    findingNeededTab();

        // if(findRelavantIndex){
        // selectTab(profileNavLinks,setActiveTab,4)
        // }


    },[])



    return  userLoading?<Loader/>:


<div className="flex mt-6">


<div className="w-[20%]  px-10 space-y-8">


<div className="flex  -ml-4  gap-x-4 items-center">
    <div className="w-14 h-14 rounded-full ">
        <img src={userInfo?.profilepic?.avatarurl} className="w-full h-full max-w-full object-cover rounded-full" alt="" />
    </div>

    <div className="font-semibold">
        {userInfo?.name}
    </div>

</div>


<div className="space-y-6 text-[#475974]  ">


{profileNavLinks.map((eachNav,index)=>{

return <div className="gap-x-3 flex cursor-pointer items-center text-lg" 


onClick={()=>selectTab(profileNavLinks,setActiveTab,index)}

>


    <div className="text-2xl">{eachNav.icon}</div>

<p className="pt-1">{eachNav.text}</p>

</div>

})}



</div>




</div>



<div className="w-[80%] bg-[#F6F6F6] rounded-xl px-7 py-7">
    

<div >


<div className="mb-4 font-semibold text-2xl " >Account Settings</div>

{userInfo?.status=='pending'&&<div className="mb-7 font-medium text-lg text-red-500" >Your email account is not verified. We have already sent you a confirmation email.</div>}


{/* {activeTab} */}

{/* CHECKKKK */}


<div className="flex flex-wrap gap-y-7 justify-between">


<div className="w-full hideScrollbar max-h-[400px] rounded-lg overflow-scroll">
    {activeTab[0]}
</div>

 
<div className="w-[calc(50%-10px)] hideScrollbar max-h-[400px] overflow-scroll rounded-lg ">

    {activeTab[1]}


</div>


<div className="w-[calc(50%-10px)] hideScrollbar max-h-[400px] overflow-scroll rounded-lg ">

{activeTab[2]}



</div>





</div>




{/* CHECKKKK */}






</div>



</div>



</div>







}