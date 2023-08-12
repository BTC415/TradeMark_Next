import { NavButton } from "@/components/Header";
import DashboardLayout from "@/layout/DashboardLayout";

const AutoInvest = () => {
  return (
    <div className="max-w-[90rem] mx-auto">
      <div className="grid grid-cols-2">
        <div className="flex flex-col gap-8 w-full">
          <h1 className="font-mrs text-[44px] uppercase">Welcome to auto invest.</h1>
          <p className="font-OpenSans text-[16px]">You currently have no active investments eligible for enrollment into Auto Invest. RealtyMogul Income REIT or RealtyMogul Apartment Growth REIT investors enrolled in Auto Invest can choose to set up a recurring amount that will be automatically added to their investment month after month.</p>
          <div className="grid grid-cols-2 gap-4">
            <NavButton className=" bg-[#176db6] text-white hover:bg-[#1d89ff] hover:text-white">Add RealtyMogul Income REIT</NavButton>
            <NavButton className=" bg-[#176db6] text-white hover:bg-[#1d89ff] hover:text-white">Add RealtyMogul Apartment Growth REIT</NavButton>
          </div>
        </div>
      </div>
    </div>
  )
}
AutoInvest.getLayout = DashboardLayout;
export default AutoInvest;