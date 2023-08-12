import DashboardLayout from "@/layout/DashboardLayout";
import { Calendar } from 'primereact/calendar';
import MenuItem from '@mui/material/MenuItem';
import Select, { SelectChangeEvent } from '@mui/material/Select';
import { useState } from "react";
import TableSort from "@/components/TableSort";
import { v4 as uuidv4 } from 'uuid'
const makeRow = (date: string, investment: string, issuer: string, type: string, account: string, shares: string, purchaseprice: string, amount: string) => {
  return { id: uuidv4(), date, investment, issuer, type, account, shares, purchaseprice, amount }
}
const Transactions = () => {
  const [age, setAge] = useState('');

  const handleChange = (event: SelectChangeEvent) => {
    setAge(event.target.value as string);
  };
  const handleDateChange = () => {

  }
  return (
    <div className="max-w-[90rem] mx-auto">
      <div className="flex gap-4 justify-center w-full py-8">
        <button className="p-2 font-OpenSans rounded-sm text-[10px] bg-black text-white uppercase">Active investments</button>
        <button className="p-2 font-OpenSans rounded-sm text-[10px] border border-black transition-all ease-in-out hover:bg-black hover:text-white uppercase">Completed investments</button>
        <button className="p-2 font-OpenSans rounded-sm text-[10px] border border-black transition-all ease-in-out hover:bg-black hover:text-white uppercase">All investments</button>
      </div>
      <div className="flex justify-between px-12 py-4">
        <h1 className="font-mrs text-[30px] uppercase">Transactions</h1>
        <button className="font-OpenSans text-[12px] text-[#1d89ff] tracking-[1.8px] uppercase">Export All</button>
      </div>
      <div className="flex justify-between gap-20 w-full border-t-2 border-t-[#1d89ff] border-b border-b-black">
        <div className="flex gap-4 justify-center w-full py-8">
          <button className="p-2 font-OpenSans rounded-sm text-[10px] bg-black text-white uppercase">All</button>
          <button className="p-2 font-OpenSans rounded-sm text-[10px] border border-black transition-all ease-in-out hover:bg-black hover:text-white uppercase">Purchases</button>
          <button className="p-2 font-OpenSans rounded-sm text-[10px] border border-black transition-all ease-in-out hover:bg-black hover:text-white uppercase">Distrubutions</button>
          <button className="p-2 font-OpenSans rounded-sm text-[10px] border border-black transition-all ease-in-out hover:bg-black hover:text-white uppercase">Sales/repurchase</button>
          <button className="p-2 font-OpenSans rounded-sm text-[10px] border border-black transition-all ease-in-out hover:bg-black hover:text-white uppercase">Auto investments</button>
        </div>
        <div className="flex gap-4 h-[34px] self-center">
          From
          <Calendar onChange={handleDateChange} />
          To
          <Calendar onChange={handleDateChange} />
          <Select
            className="w-96 h-full font-OpenSans text-[12px] uppercase"
            value={age}
            placeholder="Filter by investment"
            onChange={handleChange}
          >
            <MenuItem value={10}>Filter by investment</MenuItem>
            <MenuItem value={20}>No results found</MenuItem>
          </Select>
        </div>
        <button className="font-OpenSans text-[12px] text-[#1d89ff] tracking-[1.8px] uppercase">Reset</button>
      </div>
      <TableSort
        columns={['date', 'investment', 'issuer', 'type', 'account', 'shares', 'purchaseprice', 'amount']}
        columnTitles={['Date', 'Investment', 'Issuer', 'Type', 'Account', 'Shares', 'Purchase Price', 'Amount']}>
        {[
          makeRow('07/14/2023', 'Realty Mogul Income', 'Realty Mogul Income REIT, LLC', 'Cash Distribution', 'Individual', '-', 'N/A', '$518.79'),
          makeRow('06/14/2023', 'Realty Mogul Income', 'Realty Mogul Income REIT, LLC', 'Cash Distribution', 'Individual', '-', 'N/A', '$546.79'),
          makeRow('05/15/2023', 'Realty Mogul Income', 'Realty Mogul Income REIT, LLC', 'Cash Distribution', 'Individual', '-', 'N/A', '$529.15'),
          makeRow('04/17/2023', 'Realty Mogul Income', 'Realty Mogul Income REIT, LLC', 'Cash Distribution', 'Individual', '-', 'N/A', '$546.79'),
          makeRow('03/16/2023', 'Realty Mogul Income', 'Realty Mogul Income REIT, LLC', 'Cash Distribution', 'Individual', '-', 'N/A', '$493.87'),
        ]}
      </TableSort>
    </div>
  )
}
Transactions.getLayout = DashboardLayout;
export default Transactions;