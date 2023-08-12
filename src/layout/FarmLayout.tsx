import Footer from '@/components/Footer';
import Header from '@/components/Header';
import type { AppProps } from 'next/app'
import { ReactElement, useEffect } from "react";

const FarmLayout = (page: ReactElement, pageProps: AppProps) => {
   return (
        <div id="main-start-section" className='flex flex-col w-full h-full pt-[90px] bg-[#f2f2f2]'>
            <div className='pb-5 flex-grow'>
                <Header />
                {page}
            </div>
            <Footer />
        </div>
    )
}
export default FarmLayout;