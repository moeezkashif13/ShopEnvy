"use client"

const Heading = ({text})=>{
    return <p className="text-xl font-medium">{text}</p>
}

const commonSpace = 'space-y-3'


export const PriceSect = ()=>{
    return <div className={`${commonSpace}`}>

<Heading text='Price' />

<div>

  <input
  onChange={(event)=>{
    
  }}
  min={1}
  max={1000}
    type="range"
    class=" h-[12px] w-full cursor-pointer appearance-none border-transparent rounded-md bg-green-500"

 />
</div>



<div className="flex items-center">

<div className="px-2 py-2 border flex ">

<p>Rs</p>

<input  type="number"  className="text-right pl-3 outline-none bg-transparent ml-auto w-full" />

</div>

<p className="mx-3">to</p>

<div className="px-2 py-2 border flex">

<p>Rs</p>

<input  type="number"  className="text-right pl-3 outline-none bg-transparent ml-auto w-full" />


</div>

</div>




    </div>
}



export const Availability = ()=>{

    return <div className={commonSpace}>

<Heading text='Availability' />


<div className={commonSpace}>

<div className="flex gap-x-3 items-center">
    <input type="checkbox" className="w-4 h-4" name="" id="" />
    <p>In stock (92)</p>
</div>

<div className="flex gap-x-3 items-center">
    <input type="checkbox" className="w-4 h-4" name="" id="" />
    <p>Out of stock (48)</p>
</div>



</div>




    </div>


}



export const Size = ()=>{


    return <div className={commonSpace}>

<Heading text='Size' />

<div className="flex gap-3 flex-wrap text-center">

{['S','M','L','XL','XXL','XXXL','3XL'].map(eachSize=>{

return <div className="py-2 w-12  border">{eachSize}</div>

})}



</div>




    </div>



}


export const Colors = ()=>{


    return <div className={commonSpace}>

<Heading text='Colors' />


<div className="flex  flex-wrap  gap-4 text-center">

{['red','green','blue','purple','orange','pink','gold','maroon'].map(eachColor=>{

return <div className="w-8 h-8 rounded-full" style={{backgroundColor:eachColor}}></div>

})}



</div>



    </div>

}