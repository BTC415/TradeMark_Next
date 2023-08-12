import TableSort from "@/components/TableSort";
import DashboardLayout from "@/layout/DashboardLayout";
import { MenuItem, Select } from "@mui/material";
import { v4 as uuidv4 } from 'uuid'
const makeRow = (date: string, subject: string, status: string) => {
  return { id: uuidv4(), date, subject, status }
}
const Messages = () => {
  return (
    <div className="max-w-[90rem] mx-auto">
      <div className="flex justify-between px-12 py-4 border-b-2 border-b-[#1d89ff] mb-10">
        <div className="flex gap-4">
          <h1 className="font-mrs text-[30px] m-0 uppercase">Messages</h1>
          <Select
            className="w-60 h-[34px] self-center font-OpenSans text-[12px] uppercase"
            placeholder="Filter by investment"
            value={10}
          >
            <MenuItem value={10}>Filter by investment</MenuItem>
            <MenuItem value={20}>No results found</MenuItem>
          </Select>
        </div>
        <button className="font-OpenSans text-[12px] text-[#1d89ff] tracking-[1.8px] uppercase">Reset</button>
      </div>
      <TableSort
        columns={['date', 'subject', 'status']}
        columnTitles={['Date', 'Subject', 'Status']}>
        {[
          makeRow('07/14/2023', 'Realty Mogul Income', 'Pending'),
        ]}
      </TableSort>
    </div>
  )
}
Messages.getLayout = DashboardLayout;
export default Messages;