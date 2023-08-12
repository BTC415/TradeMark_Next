import { NavButton } from '@/components/Header';
import FarmLayout from '@/layout/FarmLayout';
import React, { useEffect, useRef } from 'react';

import Image from 'next/image';
import Carousel from '@/components/Carousel';
const PortItem = ({ title, heading, msg }: { title: string, heading: string, msg: string }) => {
  return (
    <div className='w-full'>
      <h1 className='font-OpenSans text-[20px] uppercase pb-2'>{title}</h1>
      <p className='font-OpenSans [fontWeight:500] ] text-[16px] leading-[28px] text-white pb-5'>{heading}</p>
      <p className='font-OpenSans text-[13px] text-[#e0e0e0] pb-10'>{msg}</p>
      <hr className='border-black' />
    </div>
  )
}
const BouncingH1 = () => {
  const anim = 100;//150
  return (
    <h1 className='text-[60px] text-red-200 sm:text-[100px] md:text-[100px] font-ADM font-normal [text-shadow:_1px_3px_5px_rgb(0_0_255_/_100%)] italic'>
      <style jsx>{`div{overflow:visible; display:inline-block; animation: pulse2 3s infinite;}`}</style>
      {/*  ease-in-out */}
      <div style={{ animationDelay: `${anim * 1}ms` }}>I</div>
      <div style={{ animationDelay: `${anim * 2}ms` }}>n</div>
      <div style={{ animationDelay: `${anim * 3}ms` }}>v</div>
      <div style={{ animationDelay: `${anim * 4}ms` }}>e</div>
      <div style={{ animationDelay: `${anim * 5}ms` }}>s</div>
      <div style={{ animationDelay: `${anim * 6}ms` }}>t</div>
      <div style={{ animationDelay: `${anim * 7}ms` }}>&nbsp;</div>
      <div style={{ animationDelay: `${anim * 8}ms` }}>i</div>
      <div style={{ animationDelay: `${anim * 9}ms` }}>n</div>
      <div style={{ animationDelay: `${anim * 10}ms` }}>&nbsp;</div>
      <div style={{ animationDelay: `${anim * 11}ms` }}>F</div>
      <div style={{ animationDelay: `${anim * 12}ms` }}>a</div>
      <div style={{ animationDelay: `${anim * 13}ms` }}>r</div>
      <div style={{ animationDelay: `${anim * 14}ms` }}>m</div>
      <div style={{ animationDelay: `${anim * 15}ms` }}>&nbsp;</div>
      <div style={{ animationDelay: `${anim * 16}ms` }}>L</div>
      <div style={{ animationDelay: `${anim * 17}ms` }}>a</div>
      <div style={{ animationDelay: `${anim * 18}ms` }}>n</div>
      <div style={{ animationDelay: `${anim * 19}ms` }}>d</div>
    </h1>
  )
}
const Index = () => {
  return (
    <main className={`w-full h-full mx-auto`}>
      <div className='w-full relative'>
        <Carousel />
        <div className='flex flex-col gap-4 justify-center items-center w-full h-[900px] text-white text-center absolute top-0 left-0'>
          <BouncingH1 />
          <h2 className=' font-OpenSans  [fontWeight:400] text-[20px] uppercase'>Build the future you want</h2>
          <h2 className=' font-OpenSans  [fontWeight:400] text-[18px]'>Leverage this compelling long-term investment with historically attractive risk-adjusted returns.</h2>

          <NavButton className="bg-[#176db6] text-white hover:bg-[#1d89ff] mt-20 hover:text-white">Get Started</NavButton>
        </div >
      </div>
      <div className='relative w-full h-full overflow-hidden'>
        <div className='w-full h-full absolute left-0 top-0'>
          <video autoPlay muted loop>
            <source src='/farm.mp4' type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </div>
        <div className='grid'>
          <div className='grid grid-cols-2 gap-40 z-10 px-[200px] py-[120px] bg-black/40 text-white'>
            <div className='flex flex-col justify-start h-[500px]'>
              <h1 className='font-mont text-[36px] leading-[44px] pb-20 bg-clip-text text-transparent bg-gradient-to-br from-red-500 to-purple-600'>Explore opportunities beyond stocks and bonds</h1>
              <p className='font-mont [fontWeight:500] ] text-[16px] leading-[28px] pb-20'>Diversify with commercial farm land with the potential to generate income and grow in value.</p>
              <NavButton className="w-80 bg-[#176db6] text-white hover:bg-[#1d89ff] mt-10 hover:text-white">Get Started</NavButton>
            </div>
            <div className='flex flex-col gap-8 w-[400px]'>
              <PortItem title='Access' heading='Private market offerings' msg='274,000+ investors have joined.' />
              <PortItem title='Invest' heading='In private placements and Farm Land Investment Trusts (“REITS”)' msg='Over $1 billion invested on the platform.' />
              <PortItem title='Gain' heading='Exposure to more deals' msg='Over $5.9 billion in deals posted on the platform.' />
            </div>
          </div>
        </div>
      </div>
      <div className='grid grid-cols-2 w-full h-[690px]'>
        <div className='flex flex-col gap-8 justify-center items-start pl-40 w-full h-full bg-cover bg-center bg-[url(https://realtymogul.brightspotgocdn.com/dims4/default/f49e06c/2147483647/strip/true/crop/1918x1439+0+571/resize/2880x2160!/format/webp/quality/90/?url=https%3A%2F%2Fcdn.realtymogul.com%2Fstatic%2Fmedia%2FHP_more_boat.3a4e9dee.jpg)]'>
          <h1 className='w-2/3 font-OpenSans text-[36px] text-white'>You deserve more than just an investment platform</h1>
          <h2 className='font-OpenSans text-[16px] text-white'>Join RealtyMogul and Navigate Through Uncertain Markets.</h2>
          <NavButton className="bg-[#176db6] text-white hover:bg-[#1d89ff] mt-20 hover:text-white">View Investments</NavButton>
        </div>
        <div className='w-full h-full'>
          <div className='w-full h-[350px] text-[#202020]  bg-[#f2f2f2] px-20 py-[120px]'>
            <h2 className='font-OpenSans text-[20px] pb-[30px] uppercase'>ACCESS & TRANSPARENCY</h2>
            <p className='font-OpenSans text-[16px] leading-7 font-semibold'>Thoughtful, transparent information enables you to make personal decisions in pursuit of your financial goals.</p>
          </div>
          <div className='w-full text-[#202020]  bg-white px-20 py-[120px]'>
            <h2 className='font-OpenSans text-[20px] pb-[30px] uppercase'>GET THE HELP YOU NEED</h2>
            <p className='font-OpenSans text-[16px] leading-7 font-semibold'>Reach out and connect with a dedicated Investor Relations team member anytime you have questions about the Platform.</p>
          </div>
        </div>
      </div>
      <div className='flex flex-col w-full h-[705px] px-[200px] py-[120px] bg-[#f2f2f2]'>
        <div className='grid grid-cols-2 h-full'>
          <div className='flex flex-col justify-between'>
            <p className='font-OpenSans text-[16px] uppercase'>Objective: Grow Portfolio Value</p>
            <h1 className='font-OpenSans text-[36px] bg-clip-text text-transparent bg-gradient-to-br from-red-500 to-purple-600'> Consider farm land as a vehicle for long-term appreciation </h1>
            <p className='font-OpenSans text-[16px]'> By investing in markets with the potential for growth, and properties with the potential for operational improvement, the RealtyMogul platform provides opportunities that may grow wealth over the long-term. </p>
            <NavButton className="bg-[#176db6] text-white hover:bg-[#1d89ff] hover:text-white w-80 m-0">Learn more</NavButton>
          </div>
          <div className='flex flex-col items-center w-[675px] text-[#202020]'>
            <Image alt='chart' width={400} height={365} src='/chart.png' />
            <p className='font-OpenSans text-[10px] uppercase'>Nareit equity REIT index annualized return</p>
            <p className='font-OpenSans text-[11px] text-[#176db6] uppercase pt-2'>Disclosure</p>
          </div>
        </div>
        <div className='flex gap-4 justify-center'>
          <div className='w-[10px] h-[10px] bg-[#a4c2d5] rounded-full' />
          <div className='w-[10px] h-[10px] bg-[#a4c2d5] rounded-full' />
          <div className='w-[10px] h-[10px] bg-[#a4c2d5] rounded-full' />
        </div>
      </div>
      <div className='flex flex-col justify-center items-center w-full px-[200px] py-[120px] bg-white'>
        <h1 className='font-OpenSans text-[36px] pb-4 bg-clip-text text-transparent bg-gradient-to-br from-red-500 to-purple-600'>Overall Track Record†</h1>
        <p className='text-[50px] font-bold text-[#176db6] font-superior bg-clip-text text-transparent bg-gradient-to-br from-red-500 to-purple-600' >$215,690,450</p>
        <p className='font-OpenSans text-[14px] uppercase'>TOTAL REALIZED INVESTMENT AMOUNT</p>
        <div className='grid grid-cols-3 gap-40 pt-10'>
          <div className='flex flex-col justify-center items-center'>
            <p className='text-[50px] font-bold text-[#176db6] font-superior' >226</p>
            <p className='font-OpenSans text-[14px] uppercase'>TOTAL REALIZED INVESTMENTS</p>
          </div>
          <div className='flex flex-col justify-center items-center'>
            <p className='text-[50px] font-bold text-[#176db6] font-superior' >20.6%</p>
            <p className='font-OpenSans text-[14px] uppercase'>OVERALL REALIZED IRR</p>
          </div>
          <div className='flex flex-col justify-center items-center'>
            <p className='text-[50px] font-bold text-[#176db6] font-superior' >15.0%</p>
            <p className='font-OpenSans text-[14px] uppercase'>OVERALL TARGET IRR</p>
          </div>
        </div>
        <NavButton className="bg-[#176db6] text-white hover:bg-[#1d89ff] hover:text-white w-80 mt-36"> View Track Record </NavButton>
        <p className='font-OpenSans text-[16px] italic leading-7 pt-4'>†Track record of Investments made on the RealtyMogul Platform. Past performance is not indicative of future results and should not be used as a basis to invest. Investment opportunities on the Realty Mogul Platform are speculative and involve substantial risk. Excludes certain Excluded Investments, including by RealtyMogul’s affiliated REITs. Information as of April 30, 2023. Please carefully review all Disclaimers and Defined Terms on the Track Record page.</p>
      </div>
      <div className='grid grid-cols-2 gap-40 w-full bg-[#202020] px-[200px] py-[120px] text-white'>
        <div className='flex flex-col gap-20'>
          <h1 className='font-OpenSans text-[36px]'>The future of farm land investing</h1>
          <p className='font-OpenSans text-[16px]'>It has always been our mission to give investors access to diverse, institutional-quality farm land opportunities, and we’re proud of the diversity that has been hosted on the Platform.</p>
          <NavButton className="bg-[#176db6] text-white hover:bg-[#1d89ff] hover:text-white w-60"> Get started </NavButton>
        </div>
        <div className='flex flex-col '>
          <div>
            <h1 className='font-OpenSans text-[36px] text-[#176db6] uppercase'>274K+</h1>
            <p className='font-OpenSans text-[14px]'>MEMBERS</p>
            <hr className='my-4 w-20 border-[#606060]' />
          </div>
          <div>
            <h1 className='font-OpenSans text-[36px] text-[#176db6] uppercase'>35,300+</h1>
            <p className='font-OpenSans text-[14px]'>INVESTMENTS MADE</p>
            <hr className='my-4 w-20 border-[#606060]' />
          </div>
          <div>
            <h1 className='font-OpenSans text-[36px] text-[#176db6] uppercase'>$1BN+</h1>
            <p className='font-OpenSans text-[14px]'>CAPITAL INVESTED*</p>
            <hr className='my-4 w-20 border-[#606060]' />
          </div>
          <div>
            <h1 className='font-OpenSans text-[36px] text-[#176db6] uppercase'>&gt;$5.9BN</h1>
            <p className='font-OpenSans text-[14px]'>IN FARM LAND NATIONWIDE</p>
            <hr className='my-4 w-20 border-[#606060]' />
          </div>
        </div>
      </div>
      <div className='flex flex-col justify-center items-center w-full px-[200px] py-[120px] bg-white'>
        <Image alt='Wall Street Journal' src='/wallStJn.webp' width={140} height={78} />
        <p className='font-OpenSans text-[18px] leading-[31px] w-[550px] text-center py-8'>RealtyMogul lets investors browse, conduct due diligence, invest and track the performance of their investments through an online dashboard.</p>
        <div className='flex gap-4 justify-center'>
          <div className='w-[10px] h-[10px] bg-[#a4c2d5] rounded-full' />
          <div className='w-[10px] h-[10px] bg-[#a4c2d5] rounded-full' />
        </div>
      </div>
      <div className='flex flex-col gap-4 px-[200px] py-[120px] bg-[#f2f2f2]'>
        <h1 className='font-OpenSans text-[16px]'>Disclaimers</h1>
        <p className='font-OpenSans text-[12px]'>*Capital invested includes: (i) common equity investments in farm land companies and funds; (ii) fixed income investments including preferred equity, senior debt, and mezzanine debt in connection with the acquisition or refinance of commercial farm land; (iii) residential debt investments in connection with financing the acquisition, improvement/renovation, and sale of single family homes; and (iii) loans originated for sale which include non-fractionalized loans sold to institutional buyers. Includes capital that has been deployed by, as well as material amounts of committed but undeployed cash held by, affiliated and unaffiliated farm land companies and funds, including cash in farm land funds that has been returned from completed investments. Certain investments are made by Realty Mogul, Co. or its affiliates. This information should not be used as a basis for an investor’s decision to invest. Investment opportunities on the RealtyMogul Platform are speculative and involve substantial risk.</p>
      </div>
    </main >
  )
}
Index.getLayout = FarmLayout;
export default Index;