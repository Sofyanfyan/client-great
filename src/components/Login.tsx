export default function Login () {

    return (
        <>
    <input className="p-3 border-[1px] border-slate-500 rounded-sm w-80" placeholder="E-Mail" type='email' />
    <div className="flex flex-col space-y-1">
      <input className="p-3 border-[1px] border-slate-500 rounded-sm w-80" placeholder="Password" type="password"/>
      <p className="font-bold text-[#0070ba]">Forgot password?</p>
    </div>
    <div className="flex flex-col space-y-5 w-full">
      <button className="w-full bg-[#0070ba] rounded-3xl p-3 text-white font-bold transition duration-200 hover:bg-[#003087]">Create Account</button>
      <div className="flex items-center justify-center border-t-[1px] border-t-slate-300 w-full relative">
        <div className="-mt-1 font-bod bg-white px-5 absolute">Or</div>
      </div>
      <button className="w-full border-blue-900 hover:border-[#003087] hover:border-[2px] border-[1px] rounded-3xl p-3 text-[#0070ba] font-bold transition duration-200">Create an Account</button>
    </div>
        </>
    )
}