import { NavButton } from "@/components/Header";
import TableSort from "@/components/TableSort";
import DashboardLayout from "@/layout/DashboardLayout";
import { MenuItem, Select } from "@mui/material";
import { v4 as uuidv4 } from 'uuid'
const makeRow = (date: string, issuer: string, investment: string, doctype: string, docstatus: string) => {
  return { id: uuidv4(), date, issuer, investment, doctype, docstatus }
}
const TaxCenter = () => {
  return (
    <div className="max-w-[90rem] mx-auto">
      <div className="flex justify-between px-12 py-4 border-b-2 border-b-[#1d89ff]">
        <h1 className="font-mrs text-[30px] m-0 uppercase">Tax Center</h1>
      </div>
      <div className="flex justify-between py-20 px-12">
        <div className="flex gap-4 justify-center items-center">
          Tax Year
          <Select
            className="w-60 h-[34px] self-center font-OpenSans text-[12px] uppercase"
            placeholder="Filter by investment"
            value={2022}
          >
            {Array.from({ length: 10 }, (_, i) => 2022 - i).map((item, i) =>
              <MenuItem key={i} value={item}>{item}</MenuItem>
            )}

          </Select>
          Account
          <Select
            className="w-60 h-[34px] self-center font-OpenSans text-[12px] uppercase"
            placeholder="Filter by investment"
            value={0}
          >
            <MenuItem value={0}>All</MenuItem>
            <MenuItem value={1}>Individual</MenuItem>
            <MenuItem value={2}>Joint</MenuItem>
            <MenuItem value={3}>Trust</MenuItem>
            <MenuItem value={4}>Entity</MenuItem>
            <MenuItem value={5}>Retirement</MenuItem>
          </Select>
          Document Type
          <Select
            className="w-60 h-[34px] self-center font-OpenSans text-[12px] uppercase"
            placeholder="Filter by investment"
            value={0}
          >
            <MenuItem value={0}>All</MenuItem>
            <MenuItem value={1}>1099-INT</MenuItem>
            <MenuItem value={2}>1099-DIV</MenuItem>
            <MenuItem value={3}>K1</MenuItem>
            <MenuItem value={4}>1099-MISC</MenuItem>
          </Select>
        </div>
        <button className="font-OpenSans tracking-[1.5px] text-[14px] text-[#1d89ff] uppercase">Reset</button>
      </div>
      <TableSort
        columns={['account', 'issuer', 'investment', 'doctype', 'docstatus']}
        columnTitles={['Account', 'Issuer', 'Investment', 'Document Type', 'Document Status']}>
        {[
        ]}
      </TableSort>
      <p className="font-OpenSans text-[16px]">You have no tax items.</p>
      <NavButton className="w-80 bg-[#176db6] text-white hover:bg-[#1d89ff] hover:text-white mt-20">Download selected</NavButton>
    </div>
  )
}
TaxCenter.getLayout = DashboardLayout;
export default TaxCenter;