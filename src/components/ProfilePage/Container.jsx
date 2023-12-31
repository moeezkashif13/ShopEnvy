export const commonClasses = 'flex flex-wrap gap-y-7 flex-col lg:flex-row'


export const FirstContainer = ({heading,children})=>{
    
    
    return  <div className="">
            
    <div className="bg-white rounded-xl px-6 py-6 space-y-4">

<p  className="text-lg font-semibold">{heading?heading:'Profile TEMP'}</p>

<div className="space-y-7">
{children}

</div>



</div>


</div>
}


export const DivContainer = ({children})=>{
    return <div className="  px-5 py-5  w-full border rounded-xl space-y-6">

        {children}


    </div>
}


export const LittleInfo = ({data,inputField})=>{

    return <div className={`w-full lg:w-[calc(50%-10px)] font-medium space-y-2 ${data?.heading!=='Email'&&'capitalize'} `}>
    
    <p className="text-[#475974]">{data?.heading}</p>
    
{inputField?<input id={data?.heading.replace(/ +/g, "")} type="text" className="bg-gray-100 px-3 text-gray-800 outline-none w-full py-2" />:<p className="break-words ">{data?.text}</p>}

</div>

}