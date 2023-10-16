

export const InputField = ({register,errors,label})=>{

    const labelModified = label.toLowerCase().replace(/\s+/g, '');;


return(
        <div className="form-control flex flex-col flex-grow  space-y-2 mr-8 xs:mr-0">
        <label className='font-normal text-gray-500' >{label}</label>
        <input 
        
        {...register(labelModified)}
        name={labelModified}
        
        className={`outline-none border-gray-200 text-gray-500 border font-semibold px-3 py-2 rounded-sm`} id={labelModified} type="text"/>
       
       <p className="text-yellow-500">{errors[labelModified] && errors[labelModified].message}</p>
    
    
    </div>
)
}