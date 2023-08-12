import { NavButton } from "@/components/Header";
import DashboardLayout from "@/layout/DashboardLayout";

const Investments = () => {
  return (
    <div className="max-w-[80rem] mx-auto">
      <h1 className='font-mrs text-[44px] uppercase'>Welcome Alexander!</h1>
      <p className="font-OpenSans text-[16px] italic">Pre-Accredited member since: 8/2023</p>
      <div className="flex flex-col gap-4 justify-center items-center w-[400px] mx-auto py-[70px]">
        <p className="font-OpenSans text-[16px]">You currently have no active investments.</p>
        <NavButton className="w-80 bg-[#176db6] text-white hover:bg-[#1d89ff] hover:text-white">Browse Open Investments</NavButton>
      </div>
      <div className="flex gap-4 justify-center w-full py-12">
        <button className="p-4 font-OpenSans rounded-sm text-[16px] bg-black text-white uppercase">Active investments</button>
        <button className="p-4 font-OpenSans rounded-sm text-[16px] border border-black transition-all ease-in-out hover:bg-black hover:text-white uppercase">Completed investments</button>
        <button className="p-4 font-OpenSans rounded-sm text-[16px] border border-black transition-all ease-in-out hover:bg-black hover:text-white uppercase">Pending investments</button>
      </div>
      <div className="w-full">
        <div className="w-full font-OpenSans text-[16px] p-8 border-t-2 border-t-[#176db6] border-b border-b-[#202020]">
          - PRIVATE PLACEMENTS
        </div>
        <div className="flex gap-12 justify-center w-full pt-12">
          <div className="font-OpenSans text-[16px]">
            <p>Total Invested</p>
            <p>$0.00</p>
          </div>
          <div className="font-OpenSans text-[16px]">
            <p>Total Distributed</p>
            <p>$0.00</p>
          </div>
        </div>
        <div className="flex flex-col gap-4 justify-center items-center w-[700px] mx-auto py-[70px]">
          <p className="font-OpenSans text-[16px]">You currently have no private placement investments.</p>
          <NavButton className="w-80 bg-[#176db6] text-white hover:bg-[#1d89ff] hover:text-white">Browse Open Investments</NavButton>
        </div>
      </div>
      <div className="w-full">
        <div className="w-full font-OpenSans text-[16px] p-8 border-t-2 border-t-[#176db6] border-b border-b-[#202020]">
          - REITS
        </div>
        <div className="flex gap-12 justify-center w-full pt-12">
          <div className="font-OpenSans text-[16px]">
            <p>Total Invested</p>
            <p>$0.00</p>
          </div>
          <div className="font-OpenSans text-[16px]">
            <p>Total Distributed</p>
            <p>$0.00</p>
          </div>
          <div className="font-OpenSans text-[16px]">
            <p>Total Investment Value</p>
            <p>$0.00</p>
          </div>
        </div>
        <div className="flex flex-col gap-4 justify-center items-center w-[700px] mx-auto py-[70px]">
          <p className="font-OpenSans text-[16px]">You currently have no REIT investments.</p>
          <NavButton className="w-80 bg-[#176db6] text-white hover:bg-[#1d89ff] hover:text-white">Browse Open Investments</NavButton>
        </div>
      </div>
    </div>
  )
}
Investments.getLayout = DashboardLayout;
export default Investments;