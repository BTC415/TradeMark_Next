
import ProgressBar from '@/components/ProgressBar';
import FarmLayout from '@/layout/FarmLayout';
import { Checkbox, FormControlLabel } from '@mui/material';
import Image from 'next/image';
import { useRouter } from 'next/router';
const PortItem = ({ title, badge }: { title: string, badge: string }) => {
  return (
    <div className='flex justify-between items-center'>
      <FormControlLabel sx={{ '& .MuiTypography-root': { fontWeight: 'bold' } }} control={<Checkbox />} label={title} />
      <div className='flex justify-center items-center w-6 h-6 bg-gradient-to-br from-green-300 to-green-800 text-white text-[10px] font-bold rounded-full'>{badge}</div>
    </div>
  )
}
type PortCardProps = {
  src: string;
  type: string;
  detail: string;
  percent: string;
  title: string;
  description: string;
  irr: string;
  cost: string;
  badges: string[];
}
const PortCard = ({ src, type, detail, percent, title, description, irr, cost, badges }: PortCardProps) => {
  const router = useRouter()
  const handleClick = () => {
    router.push('/opportunity/overview')
  }
  return (
    <div className='flex flex-col justify-center items-center relative hover:scale-[1.01] transition-all ease-in-out'>
      <div className='flex flex-col gap-1 items-center w-[400px] h-[500px] rounded-md shadow-lg bg-white overflow-hidden'>
        <div className={`w-full h-[300px] bg-cover bg-center relative group cursor-help`} style={{ backgroundImage: `url(${src})` }}>
          <p className='w-[120px] h-[56px] m-0 pt-10 px-4 -translate-x-[40px] text-center -translate-y-[4px] text-white font-bold -rotate-45 bg-purple-500'>{type}</p>
          <div className='group-hover:opacity-100 opacity-0 transition-all ease-in-out flex justify-center items-center absolute top-0 w-full h-full bg-black/50 text-white text-[14px] text-center p-8 leading-7 font-monthstage '>
            {detail}
          </div>
        </div>
        <div className='flex flex-col w-full p-4'>
          <p className='m-0 text-[12px]'>{percent}% Funded</p>
          <ProgressBar variant="determinate" value={+percent} />
        </div>
        <h4 className='m-0 text-[18px]'>{title}</h4>
        <p className='m-0 text-[12px]'>{description}</p>
        <div className='flex w-full px-8 justify-between'>
          <p className='m-0 italic'>Target IRR*</p>
          <p className='m-0 font-bold'>{irr}%</p>
          <p className='m-0 italic'>Target Return on Cost*</p>
          <p className='m-0 font-bold'>{cost}%</p>
        </div>
        <div className='flex gap-2 cursor-pointer'>
          {badges.map((item, i) => <div key={i} className='bg-pink-500 p-1 text-xs font-bold text-white rounded-md uppercase'>{item}</div>)}
        </div>
      </div>
      <button onClick={handleClick} className='w-60 absolute -bottom-[20px] text-[12px] font-semibold p-4 rounded-md uppercase hover:scale-[1.02] transition-all ease-in-out text-white bg-gradient-to-r from-green-400 to-green-600'>View Details</button>
    </div>
  )
}
const Investments = () => {
  return (
    <main className={`w-full h-full font-OpenSans`} >
      <div className='flex gap-16 w-full p-8 bg-gra+++++dient-to-r from-[#60a5ff] via-[#d85700] to-[#0718ff] bg-cover bg-center bg-[url(/farm2.jpeg)]'>
        <h1 className='m-0 uppercase text-[24px] text-white tracking-[1.6px]'>Investments</h1>
        <div className='flex border border-white rounded-lg font-bold text-[14px] uppercase overflow-hidden cursor-pointer'>
          <div className='p-2 bg-black text-white border-r border-white'>All</div>
          <div className='p-2 border-r border-white hover:bg-black hover:text-white'>Invest</div>
          <div className='p-2 hover:bg-black hover:text-white'>Pledge</div>
        </div>
      </div>
      <div className='flex w-full h-full p-4'>
        <div className='flex flex-col gap-2 w-[600px] px-12 py-4'>
          <h1 className='font-OpenSans text-[16px] text-[808080] uppercase\'>Land Development Project </h1>
          <div className='flex flex-col gap-2 w-full bg-white rounded-sm p-4'>
            <PortItem title='Commercial Farm Land' badge='1' />
            <PortItem title='Diversified' badge='1' />
            <PortItem title='Industrial' badge='2' />
            <PortItem title='Mixed-Use' badge='1' />
            <PortItem title='Multifamily' badge='1' />
            <PortItem title='Residential' badge='1' />
          </div>
          <h1 className='font-OpenSans text-[16px] text-[808080] uppercase\'>Wine Stock Bank</h1>
          <div className='flex flex-col gap-2 w-full bg-white rounded-sm p-4'>
            <PortItem title='Core Plus' badge='1' />
            <PortItem title='Development' badge='1' />
            <PortItem title='Diversified Fund' badge='2' />
            <PortItem title='REIT' badge='1' />
            <PortItem title='Value-Add' badge='1' />
          </div>
        </div>
        <div className='flex flex-wrap justify-center gap-x-8 gap-y-12 w-full'>
          <PortCard src='/farm1.jpeg' type='Mixed-Use' detail='Phase II of a ground-up development of a Class A, 259-unit mixed-use building in the growing Wynwood neighborhood of Miami.' percent='94' title='Miami, FL' description='Mohawk at Wynwood - Phase II' irr='21.2' cost='6.1' badges={['Development', 'Equity']} />
          <PortCard src='/farm2.avif' type='MultiFamily' detail='Advenir is pleased to announce the ground-up development of Advenir at Mallory Lake, a new construction, 300-unit garden-style apartment community located within the Atlanta MSA scheduled to be developed and stabilized in 2025 for a total cost basis of $226,472 per unit. This favorable basis attributes to a 30% discount compared to established sales comps in addition to an untrended 6.25% return on cost.' percent='78' title='Atlanta MSA, GA' description='Advenir at Mallory Lake' irr='21.3' cost='6.25' badges={['Development', 'Equity']} />
          <PortCard src='/apart1.jpg' type='Mixed-Use' detail='Phase II of a ground-up development of a Class A, 259-unit mixed-use building in the growing Wynwood neighborhood of Miami.' percent='94' title='Miami, FL' description='Mohawk at Wynwood - Phase II' irr='21.2' cost='6.1' badges={['Development', 'Equity']} />
          <PortCard src='/apart2.jpg' type='MultiFamily' detail='Advenir is pleased to announce the ground-up development of Advenir at Mallory Lake, a new construction, 300-unit garden-style apartment community located within the Atlanta MSA scheduled to be developed and stabilized in 2025 for a total cost basis of $226,472 per unit. This favorable basis attributes to a 30% discount compared to established sales comps in addition to an untrended 6.25% return on cost.' percent='78' title='Atlanta MSA, GA' description='Advenir at Mallory Lake' irr='21.3' cost='6.25' badges={['Development', 'Equity']} />
          <PortCard src='/farm1.jpeg' type='Mixed-Use' detail='Phase II of a ground-up development of a Class A, 259-unit mixed-use building in the growing Wynwood neighborhood of Miami.' percent='94' title='Miami, FL' description='Mohawk at Wynwood - Phase II' irr='21.2' cost='6.1' badges={['Development', 'Equity']} />
          <PortCard src='/farm2.avif' type='MultiFamily' detail='Advenir is pleased to announce the ground-up development of Advenir at Mallory Lake, a new construction, 300-unit garden-style apartment community located within the Atlanta MSA scheduled to be developed and stabilized in 2025 for a total cost basis of $226,472 per unit. This favorable basis attributes to a 30% discount compared to established sales comps in addition to an untrended 6.25% return on cost.' percent='78' title='Atlanta MSA, GA' description='Advenir at Mallory Lake' irr='21.3' cost='6.25' badges={['Development', 'Equity']} />
          <PortCard src='/farm1.jpeg' type='Mixed-Use' detail='Phase II of a ground-up development of a Class A, 259-unit mixed-use building in the growing Wynwood neighborhood of Miami.' percent='94' title='Miami, FL' description='Mohawk at Wynwood - Phase II' irr='21.2' cost='6.1' badges={['Development', 'Equity']} />
          <PortCard src='/farm2.avif' type='MultiFamily' detail='Advenir is pleased to announce the ground-up development of Advenir at Mallory Lake, a new construction, 300-unit garden-style apartment community located within the Atlanta MSA scheduled to be developed and stabilized in 2025 for a total cost basis of $226,472 per unit. This favorable basis attributes to a 30% discount compared to established sales comps in addition to an untrended 6.25% return on cost.' percent='78' title='Atlanta MSA, GA' description='Advenir at Mallory Lake' irr='21.3' cost='6.25' badges={['Development', 'Equity']} />
          <PortCard src='/farm1.jpeg' type='Mixed-Use' detail='Phase II of a ground-up development of a Class A, 259-unit mixed-use building in the growing Wynwood neighborhood of Miami.' percent='94' title='Miami, FL' description='Mohawk at Wynwood - Phase II' irr='21.2' cost='6.1' badges={['Development', 'Equity']} />
          <PortCard src='/farm2.avif' type='MultiFamily' detail='Advenir is pleased to announce the ground-up development of Advenir at Mallory Lake, a new construction, 300-unit garden-style apartment community located within the Atlanta MSA scheduled to be developed and stabilized in 2025 for a total cost basis of $226,472 per unit. This favorable basis attributes to a 30% discount compared to established sales comps in addition to an untrended 6.25% return on cost.' percent='78' title='Atlanta MSA, GA' description='Advenir at Mallory Lake' irr='21.3' cost='6.25' badges={['Development', 'Equity']} />
          <PortCard src='/farm1.jpeg' type='Mixed-Use' detail='Phase II of a ground-up development of a Class A, 259-unit mixed-use building in the growing Wynwood neighborhood of Miami.' percent='94' title='Miami, FL' description='Mohawk at Wynwood - Phase II' irr='21.2' cost='6.1' badges={['Development', 'Equity']} />
          <PortCard src='/farm2.avif' type='MultiFamily' detail='Advenir is pleased to announce the ground-up development of Advenir at Mallory Lake, a new construction, 300-unit garden-style apartment community located within the Atlanta MSA scheduled to be developed and stabilized in 2025 for a total cost basis of $226,472 per unit. This favorable basis attributes to a 30% discount compared to established sales comps in addition to an untrended 6.25% return on cost.' percent='78' title='Atlanta MSA, GA' description='Advenir at Mallory Lake' irr='21.3' cost='6.25' badges={['Development', 'Equity']} />
        </div>
      </div>
    </main>
  )
}
Investments.getLayout = FarmLayout;
export default Investments;