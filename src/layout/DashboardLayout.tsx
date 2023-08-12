import Footer from '@/components/Footer';
import Header from '@/components/Header';
import type { AppProps } from 'next/app'
import { useRouter } from 'next/router';
import path from 'path';
import { ReactElement, useEffect } from "react";

const NavItem = ({ title, path, href, active }: { title: string, path: string, href: string, active: boolean }) => {
    const router = useRouter();
    return (
        <div onClick={() => router.push(`/dashboard/${path}`)} className='flex flex-col group justify-center items-center cursor-pointer'>
            <svg className={`w-[62px] h-[48px] ${active ? 'fill-[#176db6]' : 'fill-[#202020]'} group-hover:fill-[#176db6] stroke-none`}><use href={`${href}`}></use></svg>
            <p className={`font-OpenSans text-[13px] ${active ? 'text-[#176db6]' : 'text-[#202020]'}  group-hover:text-[#176db6] uppercase`}>{title}</p>
        </div>
    )
}
const DashboardLayout = (page: ReactElement, pageProps: AppProps) => {
    const router = useRouter();
    const curPath = router.asPath.split('/').pop();
    const pathArr = ['investments', 'autoinvest', 'transactions', 'messages', 'taxcenter', 'profile']
    const titles = ['Investments', 'Auto invest', 'Transactions', 'Messages', 'Tax Center', 'Profile']
    const hrefs = ['#symbol-investment', '#symbol-autoinvest', '#symbol-transaction', '#symbol-message', '#symbol-taxcenter', '#symbol-profile']
    const curPathId = pathArr.indexOf(curPath as string);
    return (
        <div id="main-start-section" className='flex flex-col w-full h-full pt-20'>
            <div className='pb-5 flex-grow'>
                <Header />
                <div className='flex flex-col gap-12 justify-center items-center w-full py-20 shadow-sm mb-8 shadow-black/30'>
                    <h1 className='font-OpenSans text-[44px] uppercase bg-gradient-to-r from-[#e29301] to-[#0077ff] bg-clip-text text-transparent'>My Dashboard</h1>
                    <div className='flex justify-between w-full max-w-7xl mx-auto'>
                        {[0, 1, 2, 3, 4, 5].map(index => <NavItem key={index} title={titles[index]} path={pathArr[index]} href={hrefs[index]} active={curPathId === index} />)}
                    </div>
                </div>
                {page}
            </div>
            <Footer />
        </div>
    )
}
export default DashboardLayout;