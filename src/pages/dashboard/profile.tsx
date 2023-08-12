import DashboardLayout from "@/layout/DashboardLayout";
import PhoneInput from 'react-phone-input-2'
import 'react-phone-input-2/lib/style.css'
import { MenuItem, Select } from "@mui/material";
import CountrySelector from "@/components/CountrySelector";
const SideItem = ({ title, active = false, icon }: { title: string, active?: boolean, icon: string }) => {
  return (
    <div className={`flex justify-between items-center py-8 hover:text-black transition-all ease-in-out px-4 ${active ? 'border-t-2 border-b-2 border-[#808080]' : ' border-b border-b-[#ccc] border-r-2 border-r-[#808080]'}`}>
      <div className="flex gap-4 items-center font-OpenSans text-[10px] uppercase">
        <p className="[fontFamily:merlinIcons] text-4xl m-0">{icon}</p>
        <p className="tracking-[1.6px]">{title}</p>
      </div>
      <svg className="w-10 h-10 fill-[#202020] rotate-90"><use href="#chevron-up-nav"></use></svg>
    </div>
  )
}
const PersonalInfoSection = () => {
  const months = ['Month', 'Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec']
  return (
    <div className="flex flex-col gap-20">
      <div className="flex flex-col gap-2 text-[#202020]">
        <h1 className="font-OpenSans text-[18px] uppercase m-0">Personal Information</h1>
        <p className="font-OpenSans text-[14px] italic m-0">Update or edit your personal information</p>
      </div>
      <div>
        <p className="font-OpenSans text-[10px] text-[#9b9b9b] uppercase">First Name</p>
        <input className="w-full p-2 font-OpenSans outline-none text-[14px] text-[#909090] border-b border-[#202020] focus:border-[#0c56a5]" value='Alexander' />
      </div>
      <div>
        <p className="font-OpenSans text-[10px] text-[#9b9b9b] uppercase">Last Name</p>
        <input className="w-full p-2 font-OpenSans outline-none text-[14px] text-[#909090] border-b border-[#202020] focus:border-[#0c56a5]" value='Yujin' />
      </div>
      <div>
        <p className="font-OpenSans text-[10px] text-[#9b9b9b] uppercase">Date of Birth</p>
        <div className="flex gap-8 justify-between">
          <Select
            className="w-60 h-[34px] self-center font-OpenSans text-[12px] uppercase"
            placeholder="Filter by investment"
            value={0}
          >
            {months.map((item, index) => <MenuItem key={index} value={index}>{item}</MenuItem>)}
          </Select>
          <Select
            className="w-60 h-[34px] self-center font-OpenSans text-[12px] uppercase"
            placeholder="Filter by investment"
            value={0}
          >
            {Array.from({ length: 32 }, (_, i) => i).map((item, index) => <MenuItem key={index} value={index}>{item > 0 ? item : 'Day'}</MenuItem>)}
          </Select>
          <Select
            className="w-60 h-[34px] self-center font-OpenSans text-[12px] uppercase"
            placeholder="Filter by investment"
            value={0}
          >
            {Array.from({ length: 101 }, (_, i) => 2024 - i).map((item, index) => <MenuItem key={index} value={index}>{item < 2024 ? item : 'Year'}</MenuItem>)}
          </Select>
        </div>
      </div>
      <div>
        <p className="font-OpenSans text-[10px] text-[#9b9b9b] uppercase">Phone</p>
        <PhoneInput
          isValid={(value, country) => {
            if (value.length < 9) return 'Wrong number.'
            if (value.match(/12345/)) {
              const countryName = (country as { name: string }).name;
              return 'Invalid number in ' /* + value  + ', '*/ + countryName;
            } else if (value.match(/1234/)) {
              return false;
            } else {
              return true;
            }
          }}
          placeholder='+61 (12) 345 6789'
          // masks={{ kp: '(...) ...-....' }}
          // onChange={handlePhoneChage}
          // onChange={e => setCustomer(prev => ({ ...prev, Phone: e }))}
          // value={''}
          inputStyle={{ width: "100%", }}
          country={'us'}

        />
      </div>
      <div>
        <CountrySelector />
      </div>
      <div>
        <p className="font-OpenSans text-[10px] text-[#9b9b9b] uppercase">Address 1</p>
        <input className="w-full p-2 font-OpenSans outline-none text-[14px] text-[#909090] border-b border-[#202020] focus:border-[#0c56a5]" />
      </div>
      <div>
        <p className="font-OpenSans text-[10px] text-[#9b9b9b] uppercase">Address 2</p>
        <input className="w-full p-2 font-OpenSans outline-none text-[14px] text-[#909090] border-b border-[#202020] focus:border-[#0c56a5]" />
      </div>
      <div>
        <p className="font-OpenSans text-[10px] text-[#9b9b9b] uppercase">City</p>
        <input className="w-full p-2 font-OpenSans outline-none text-[14px] text-[#909090] border-b border-[#202020] focus:border-[#0c56a5]" />
      </div>
    </div>
  )
}
const Dashboard = () => {
  return (
    <div className="flex gap-8 max-w-7xl mx-auto">
      <div className="flex flex-col w-2/5 text-[#808080] cursor-pointer">
        <div className="flex items-center py-12 border-b border-b-[#ccc] border-r-2 border-r-[#808080]">
          <div className="flex flex-col gap-2">
            <p className="font-mrs m-0 text-[30px] text-black uppercase">Alexander Y.</p>
            <p className="font-OpenSans text-[14px] text-[#202020]">Member since 08/02/2023</p>
          </div>
        </div>
        <SideItem icon='&#x23e3;' title="Personal Info" active />
        <SideItem icon='&#x1f4e7;' title="Email" />
        <SideItem icon='&#x266d;' title="Password" />
        <SideItem icon='&#x24;' title="Bank accounts and distributions" />
        <SideItem icon='&#x2637;' title="Account types" />
        <SideItem icon='&#x2388;' title="Communication settings" />
        <div className={`flex h-full justify-between items-center py-8 px-4 border-r-2 border-r-[#808080]`}>
        </div>
      </div>
      <div className="flex flex-col py-8 w-full">
        <PersonalInfoSection />
      </div>
    </div>
  )
}
Dashboard.getLayout = DashboardLayout;
export default Dashboard;