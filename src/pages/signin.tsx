import IOSSwitch from "@/components/IOSSwitch";
import Image from "next/image";
import { useRouter } from "next/router";

const SignIn = () => {
  const router=useRouter()
  const handleClick=()=>{
    router.push('/dashboard')
  }
  return (
    <div className="w-full h-screen font-OpenSans p-4">
      <div className="w-full rounded-2xl overflow-hidden h-[450px] relative -z-10 bg-cover bg-center bg-[url(https://investor.farmd.co/static/assets/img/curved.jpeg)]">
        <div className="w-full h-full opacity-60 absolute top-0 left-0 " style={{ backgroundImage: 'linear-gradient(310deg, #141727 0%, #3A416F 100%)' }} />
      </div>
      <div className="flex flex-col w-full h-full absolute top-0 gap-4 justify-center items-center">
        <h1 className="text-[48px] max-w-xl text-center font-bold text-white">Invest in Farmland with Farmd!</h1>
        <div className="flex flex-col gap-4 justify-between items-center min-w-[360px] max-w-[400px] w-1/3 p-4 h-[500px] rounded-2xl bg-white shadow-lg ">
          <Image src='https://investor.farmd.co/static/assets/img/farmdlogo.avif' alt='logo' width={284} height={56} />
          <h1 className="text-[20px] m-0">Sign In</h1>
          <input className="w-full h-12 px-3 py-2 hover:outline-2 outline-pink-400 border border-[#ccc] rounded-md" placeholder="Username" />
          <input type="password" className="w-full h-12 px-3 py-2 hover:outline-2 outline-pink-400 border border-[#ccc] rounded-md" placeholder="Password" />
          <div className="flex w-full justify-between items-center">
            <div className="flex gap-4">
              <IOSSwitch />
              <p className=" m-0">Remeber me</p>
            </div>
            <h1 className="bg-gradient-to-r from-[#7928ca] to-[#ff0080] m-0 text-[14px] bg-clip-text text-transparent ">Forgot Password?</h1>
          </div>
          <button onClick={handleClick} className="bg-gradient-to-r from-[#2152ff] to-[#21d4fd] text-white font-OpenSans w-full p-4 font-bold rounded-md text-[12px] uppercase hover:scale-[1.01] transition-all ease-in-out">Sign In</button>
          <button onClick={handleClick} className="bg-[#344767] text-white font-OpenSans w-full p-4 font-bold rounded-md text-[12px] uppercase hover:scale-[1.01] transition-all ease-in-out">Join</button>
        </div>
      </div>
    </div>
  )
}
export default SignIn;