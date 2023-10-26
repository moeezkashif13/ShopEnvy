export default function DemoAccount({setUsingDemoAccount}){

    return (
        <div className="mt-3 space-y-3 text-center text-red-500 font-semibold">

        <p>If you don't want to register a new account, you can use this demo account by clicking on the button</p>

    <div className="bg-black text-white mx-auto font-semibold w-[200px]  text-center py-3 rounded-md cursor-pointer" onClick={()=>setUsingDemoAccount(true)} >Use Demo Account</div>

        </div>
    )

}