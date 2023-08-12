import Footer from '@/components/Footer';
import Header, { NavButton } from '@/components/Header';
import type { AppProps } from 'next/app'
import { useRouter } from 'next/router';
import { ReactElement } from "react";
const NavBarItem = ({ title, href = '#' }: { title: string, href?: string }) => {
    const router = useRouter();
    return (
        <div onClick={() => router.push(href)} className={`h-full hover:bg-blue-500 ${router.asPath===href?'bg-blue-500/50':''} px-8 py-4 rounded-md [text-shadow:#0007_2px_2px_2px] hover:[text-shadow:none] transition-all ease-in-out whitespace-nowrap`}>{title}</div>
    )
}
const OpportunityLayout = (page: ReactElement, pageProps: AppProps) => {
    const router = useRouter();
    return (
        <div id="main-start-section" className='flex flex-col w-full h-full pt-[90px]'>
            <div className='pb-5 flex-grow'>
                <Header />
                <div className='flex flex-col bg-cover bg-center bg-[url(/farm2.jpeg)] w-full'>
                    <div className="flex justify-between items-center p-8 ">
                        <div className="flex flex-col gap-4">
                            <h1 className='m-0 uppercase text-[24px] text-white tracking-[1.6px]'>Investments</h1>
                            <h4 className="font-OpenSans uppercase m-0 bg-white p-2 rounded-md shadow-md shadow-black w-fit">Mixed-Use</h4>
                            <p className="font-OpenSans font-bold m-0 text-[18px] text-white">Mohawk at Wynwood - Phase II</p>
                        </div>
                        <h1 className='flex justify-center items-center m-0 font-OpenSans text-[30px]  text-white w-60 h-60 rounded-full bg-green-600/40 text-center shadow-sm shadow-black/90 p-2 outline outline-green-500/60 overflow-hidden cursor-pointer select-none hover:scale-[1.02] transition-all ease-in-out duration-700' style={{ animationName: 'anim1', animationDuration: '2s', animationIterationCount: 'infinite' }}>Atlanta MSA, GA</h1>
                        <NavButton className="w-40 text-white">Invest</NavButton>
                    </div>
                </div>
                <div className='w-full h-[50px] bg-cover bg-center bg-[url(/farm2.jpeg)] text-white font-OpenSans font-bold uppercase text-[18px] cursor-pointer sticky top-[90px] z-10'>
                    <div className="flex items-center h-full px-8 bg-gradient-to-r from-blue-500/10 to-[#0400ff28]">
                        <NavBarItem href='/opportunity/overview' title='Overview' />
                        <NavBarItem href='/opportunity/management' title='Management' />
                        <NavBarItem href='/opportunity/businessplan' title='Business Plan' />
                        <NavBarItem href='/opportunity/property' title='Property' />
                        <NavBarItem href='/opportunity/financials' title='Financials' />
                        <NavBarItem href='/opportunity/documents' title='Documents' />
                        <NavBarItem href='/opportunity/disclaimers' title='Disclaimers' />
                    </div>
                </div>
                {page}
            </div>
            <div className="flex flex-col justify-center items-center gap-8 w-full p-16 px-48">
                <h1 className="m-0 uppercase font-bold font-OpenSans text-[40px] bg-clip-text text-transparent bg-gradient-to-br from-red-500 to-purple-600">Invest Today</h1>
                <NavButton className="w-40 text-white mx-auto">Invest</NavButton>
                <h4 className="m-0">Questions?</h4>
                <h3 className="m-0">(877) 781-7062</h3>
            </div>
            <div className="flex flex-col gap-4 w-full p-16 bg-[#f7f7f7] font-OpenSans text-[16px] font-bold uppercase">
                More
                <div onClick={()=>router.push('/opportunity/overview')} className="flex gap-2 items-center bg-white border border-[#ccc] p-4 hover:bg-gradient-to-br from-red-500 to-purple-600 hover:text-white transition-all ease-in-out cursor-pointer">
                    <svg className="w-[40px] h-[30px] fill-current"><use href='#symbol-overview' /></svg>
                    <div className="w-[400px] font-OpenSans uppercase font-bold text-[18px] tracking-[2px]">Overview</div>
                    <p className="m-0 normal-case">View the project overview</p>
                </div>
                <div onClick={()=>router.push('/opportunity/management')} className="flex gap-2 items-center bg-white border border-[#ccc] p-4 hover:bg-gradient-to-br from-red-500 to-purple-600 hover:text-white transition-all ease-in-out cursor-pointer">
                    <svg className="w-[40px] h-[24px] fill-current"><use href='#symbol-management' /></svg>
                    <div className="w-[400px] font-OpenSans uppercase font-bold text-[18px] tracking-[2px]">Management</div>
                    <p className="m-0 normal-case">Meet the Advenir Team</p>
                </div>
                <div onClick={()=>router.push('/opportunity/businessplan')} className="flex gap-2 items-center bg-white border border-[#ccc] p-4 hover:bg-gradient-to-br from-red-500 to-purple-600 hover:text-white transition-all ease-in-out cursor-pointer">
                    <svg className="w-[40px] h-[25px] fill-current"><use href='#symbol-businessplan' /></svg>
                    <div className="w-[400px] font-OpenSans uppercase font-bold text-[18px] tracking-[2px]">Business Plan</div>
                    <p className="m-0 normal-case">Review the project business plan</p>
                </div>
                <div onClick={()=>router.push('/opportunity/property')} className="flex gap-2 items-center bg-white border border-[#ccc] p-4 hover:bg-gradient-to-br from-red-500 to-purple-600 hover:text-white transition-all ease-in-out cursor-pointer">
                    <svg className="w-[40px] h-[22px] fill-current"><use href='#symbol-property' /></svg>
                    <div className="w-[400px] font-OpenSans uppercase font-bold text-[18px] tracking-[2px]">Property</div>
                    <p className="m-0 normal-case">Explore project details, comparables, locations and photos</p>
                </div>
                <div onClick={()=>router.push('/opportunity/financials')} className="flex gap-2 items-center bg-white border border-[#ccc] p-4 hover:bg-gradient-to-br from-red-500 to-purple-600 hover:text-white transition-all ease-in-out cursor-pointer">
                    <svg className="w-[40px] h-[22px] fill-current"><use href='#symbol-financials' /></svg>
                    <div className="w-[400px] font-OpenSans uppercase font-bold text-[18px] tracking-[2px]">Financials</div>
                    <p className="m-0 normal-case">Review debt assumptions, closing dates, caps and more</p>
                </div>
                <div onClick={()=>router.push('/opportunity/documents')} className="flex gap-2 items-center bg-white border border-[#ccc] p-4 hover:bg-gradient-to-br from-red-500 to-purple-600 hover:text-white transition-all ease-in-out cursor-pointer">
                    <svg className="w-[40px] h-[24px] fill-current"><use href='#symbol-documents' /></svg>
                    <div className="w-[400px] font-OpenSans uppercase font-bold text-[18px] tracking-[2px]">Documents</div>
                    <p className="m-0 normal-case">Download project documentation</p>
                </div>
                <div onClick={()=>router.push('/opportunity/disclaimers')} className="flex gap-2 items-center bg-white border border-[#ccc] p-4 hover:bg-gradient-to-br from-red-500 to-purple-600 hover:text-white transition-all ease-in-out cursor-pointer">
                    <svg className="w-[40px] h-[24px] fill-current"><use href='#symbol-disclaimers' /></svg>
                    <div className="w-[400px] font-OpenSans uppercase font-bold text-[18px] tracking-[2px]">Disclaimers</div>
                    <p className="m-0 normal-case">View legal disclaimers</p>
                </div>
            </div>
            <Footer />
        </div>
    )
}
export default OpportunityLayout;