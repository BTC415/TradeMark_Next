import ProgressBar from "@/components/ProgressBar";
import OpportunityLayout from "@/layout/OpportunityLayout";
import { useEffect, useState } from "react";
import axios from 'axios'
import { NavButton } from "@/components/Header";
import Image from "next/image";
const Overview = () => {
    const [src, setSrc] = useState('')
    useEffect(() => {
        const videoUrl = '/intro.mp4';
        axios.get(videoUrl, { responseType: 'blob' })
            .then((response: any) => {
                const videoBlob = response.data;
                const blobUrl = URL.createObjectURL(videoBlob);
                setSrc(blobUrl)
            });
    }, [])
    return (
        <main className={`w-full h-full `}>
            <div className="flex gap-16 w-full bg-black text-white p-16">
                <div className="flex flex-col gap-8 w-[500px]">
                    <h1>Open For Investment</h1>
                    <div className="flex justify-between items-center w-full text-[18px]">
                        <p className="m-0">Target IRR 20.3%-22.3%*</p>
                        <p className="font-bold">21.3%</p>
                    </div>
                    <div className="flex justify-between items-center w-full text-[18px]">
                        <p className="m-0">Target Return on Cost*</p>
                        <p className="font-bold">6.25%</p>
                    </div>
                    <div className="flex justify-between items-center w-full text-[18px]">
                        <p className="m-0">Target Equity Multiple*</p>
                        <p className="font-bold">1.52x</p>
                    </div>
                    <div className="flex justify-between items-center w-full text-[18px]">
                        <p className="m-0">Estimated Hold Period*</p>
                        <p className="font-bold">27 months</p>
                    </div>
                    <div className='flex flex-col w-full '>
                        <p className='m-0 text-[12px]'>78% Funded</p>
                        <ProgressBar variant="determinate" value={78} />
                    </div>
                    <NavButton className="w-40 text-white mx-auto">Invest</NavButton>
                    <div className="mx-auto">
                        View our Risk and Quality Controls
                        <svg className="w-4 h-4 inline-block align-baseline"><use href="#box-up-right" /></svg>
                    </div>
                    <p>*Please carefully review the Disclaimers section below, including regarding Sponsor’s assumptions and target returns</p>
                </div>
                <div className="w-full">
                    <video className="w-full h-full" src={src} controls>
                        Your browser does not support the video tag.
                    </video>
                </div>
            </div>
            <div className="flex gap-16 w-full p-16">
                <div className="flex flex-col gap-4 w-[500px]">
                    <h3 className="m-0">Offered By</h3>
                    <h1 className=" m-0 bg-clip-text text-transparent bg-gradient-to-br from-red-500 to-purple-600">Advenir</h1>

                    <div className="flex justify-between items-center w-full text-[18px]">
                        <p className="m-0">Investment Stragegy</p>
                        <p className="font-bold">Development</p>
                    </div>
                    <div className="flex justify-between items-center w-full text-[18px]">
                        <p className="m-0">Investment Type</p>
                        <p className="font-bold">Equity</p>
                    </div>
                    <div className="flex justify-between items-center w-full text-[18px]">
                        <p className="m-0">Estimated First Distribution</p>
                        <p className="font-bold">4/2025</p>
                    </div>
                    <div className="flex justify-between items-center w-full text-[18px]">
                        <p className="m-0">Minimum Investment</p>
                        <p className="font-bold">$35,000</p>
                    </div>
                </div>
                <div className="flex flex-col gap-8 w-full">
                    <div className="flex gap-8 w-fit">
                        <NavButton className=" text-white mx-auto"><svg className="w-6 h-6 inline-block fill-white"><use href="#pdf" /></svg>Project PDF</NavButton>
                        <NavButton className=" text-white mx-auto"><svg className="w-8 h-6 inline-block fill-white"><use href="#contact" /></svg>Send a message</NavButton>
                        <NavButton className=" text-white mx-auto"><svg className="w-8 h-6 inline-block fill-white"><use href="#new-calendar" /></svg>Meet with us</NavButton>
                    </div>
                    <div className="flex gap-8 w-full">
                        <Image className="rounded-lg" priority width={218} height={116} src='/pic1.jpg' alt='img' />
                        <Image className="rounded-lg" priority width={218} height={116} src='/pic2.png' alt='img' />
                        <Image className="rounded-lg" priority width={218} height={116} src='/pic3.png' alt='img' />
                        <Image className="rounded-lg" priority width={218} height={116} src='/pic4.jpg' alt='img' />
                        <Image className="rounded-lg" priority width={218} height={116} src='/pic5.png' alt='img' />
                    </div>
                </div>
            </div>
            <div className="flex flex-col gap-8 w-full p-16 px-48 bg-[#f7f7f7]">
                <h1 className="font-OpenSans m-0 bg-clip-text text-transparent bg-gradient-to-br from-red-500 to-purple-600">Overview</h1>
                <p className=" w-full text-center text-[18px] m-0 px-10">Advenir is pleased to announce the ground-up development of Advenir at Mallory Lake, a new construction, 300-unit garden-style apartment community located within the Atlanta MSA scheduled to be developed and stabilized in 2025 for a total cost basis of $226,472 per unit. This favorable basis attributes to a 30% discount compared to established sales comps in addition to an untrended 6.25% return on cost.</p>
                <div className="grid grid-cols-3 gap-16">
                    <div className="flex flex-col gap-4 items-center">
                        <Image priority width={73} height={73} src='/new_construction.svg' alt='img' />
                        <h3 className="m-0">New Construction</h3>
                        <h4 className="m-0 leading-7">Advenir at Mallory Lake has already started horizontal construction and the construction loan has closed, mitigating a sizeable amount of development risk for potential investors. The site has been cleared and graded with utilities in place, foundation slabs are being poured, and wood framing has commenced. Additionally, the development partner, Imperium Development, is Atlanta-based with a strong track record of execution and has guaranteed cost overruns.</h4>
                    </div>
                    <div className="flex flex-col gap-4 items-center">
                        <Image priority width={73} height={73} src='/basis.svg' alt='img' />
                        <h3 className="m-0">Basis</h3>
                        <h4 className="m-0 leading-7">Advenir will develop Mallory Lake at a basis of $226,472 per unit, a discount to recent trades across the Atlanta MSA, which have averaged over $340,000 per unit in the past 18 months. </h4>
                    </div>
                    <div className="flex flex-col gap-4 items-center">
                        <Image priority width={73} height={73} src='/market.svg' alt='img' />
                        <h3 className="m-0">Market</h3>
                        <h4 className="m-0 leading-7">Local officials have been conservative with housing supply in relation to the rapid job growth that has taken place. Only 3 multifamily communities have been developed in the past 12 years for a total of 558 units. Forecasted job growth is +35% in the next 3 years with new announcements from Amazon, Remington, and expansions for EVs at the local and only KIA Manufacturing plant in the U.S.A. All of these factors will contribute to sustainable rental demand for Advenir at Mallory Lake. </h4>
                    </div>
                </div>
            </div>
            <div className="flex flex-col gap-8 w-full p-16 px-48">
                <h1 className="font-OpenSans m-0 mx-auto bg-clip-text text-transparent bg-gradient-to-br from-red-500 to-purple-600">Property at a glance</h1>
                <div className="grid grid-cols-2 gap-16">
                    <div className="flex flex-col gap-4 w-full">
                        <div className="flex justify-between w-full border-b border-black text-[18px] font-bold">
                            <p className="m-0"># of Units</p>
                            <p className="m-0">300</p>
                        </div>
                        <div className="flex justify-between w-full border-b border-black text-[18px] font-bold">
                            <p className="m-0">First Units Delivered</p>
                            <p className="m-0">September 2024</p>
                        </div>
                        <div className="flex justify-between w-full border-b border-black text-[18px] font-bold">
                            <p className="m-0">Project Stabilization</p>
                            <p className="m-0">September 2025</p>
                        </div>
                    </div>
                    <div className="flex flex-col gap-4 w-full">
                        <div className="flex justify-between w-full border-b border-black text-[18px] font-bold">
                            <p className="m-0">Total Development Budget</p>
                            <p className="m-0">$67,941,607</p>
                        </div>
                        <div className="flex justify-between w-full border-b border-black text-[18px] font-bold">
                            <p className="m-0">Target Return on Cost</p>
                            <p className="m-0">6.25%</p>
                        </div>
                        <div className="flex justify-between w-full border-b border-black text-[18px] font-bold">
                            <p className="m-0">Land Acquisition Price</p>
                            <p className="m-0">$2,720,000</p>
                        </div>
                    </div>
                </div>
            </div>
            <div className="flex flex-col gap-8 w-full p-16 px-48 bg-[#f7f7f7]">
                <h1 className="font-OpenSans m-0 bg-clip-text text-transparent bg-gradient-to-br from-red-500 to-purple-600">Investment Highlights</h1>
                <div className="flex flex-col gap-4 w-full">
                    <div className="flex gap-2">
                        <svg className="w-[20px] h-[14px] fill-blue-500 m-1"><use href="#icon-checkmark-rm" /></svg>
                        <div className="w-full font-OpenSans text-[14px] font-semibold">
                            Construction Has Already Started - Notice to proceed was issued in November 2022 and all building permits have been received. Sitework is completed (see pictures) and wood framing has commenced. Slab on grade prep is underway and Summit Contracting Group has completed over 75% of the trade buyout. The first units and clubhouse are scheduled to be delivered in Q1 2024, with preleasing efforts to start in Q4 2023.
                        </div>
                    </div>
                    <div className="flex gap-2">
                        <svg className="w-[20px] h-[14px] fill-blue-500 m-1"><use href="#icon-checkmark-rm" /></svg>
                        <div className="w-full font-OpenSans text-[14px] font-semibold">
                            Financing - Advenir has closed its construction loan with Great Southern Bank. Terms are as follows: $42.6M, 42-Month Full Term Interest Only, floating over SOFR at 3.00%. Advenir has assumed an average interest rate of 8.3%, although Sponsorship believes it will be in the low 7% range for the length of the loan based on the forward SOFR curve as of early May 2023.
                        </div>
                    </div>
                    <div className="flex gap-2">
                        <svg className="w-[20px] h-[14px] fill-blue-500 m-1"><use href="#icon-checkmark-rm" /></svg>
                        <div className="w-full font-OpenSans text-[14px] font-semibold">
                            Investment Strategy - Advenir remains focused on assets in growth markets with high barriers to entry, favorable demographics, stable cash flows, and asset appreciation. Advenir at Mallory Lake will be developed at a discount to today’s multifamily values. Mallory Lake is located along the employment powerhouse I-85 corridor, home to Georgia International Business Park, and is within 20 minutes of more than 36,000 jobs. Residents at Mallory Lake will benefit from its peaceful community setting near FD Roosevelt State Park, as well as direct access to major employers, as Troup County is home to more Fortune 500 regional sites per capita than anywhere in the United States. Forecasted job growth is 35%+ in the next three years with new announcements from Amazon, a new Remington Arms Global HQ, and expansions for electric vehicles at the local and only KIA Manufacturing plant in the U.S.A. These trends are expected to continue as new jobs and developments continue to migrate to Troup County.
                        </div>
                    </div>
                    <div className="flex gap-2">
                        <svg className="w-[20px] h-[14px] fill-blue-500 m-1"><use href="#icon-checkmark-rm" /></svg>
                        <div className="w-full font-OpenSans text-[14px] font-semibold">
                            Top Performing Multifamily Fundamentals - Local officials have been conservative with housing supply in relation to the rapid job growth that has taken place. Only 3 multifamily communities have been developed in the past 12 years for a total of 558 units. Strong demand for quality housing has contributed to year-over-year effective rent growth of 8% for September 2022 (CoStar). Advenir has underwritten 3.0% rent growth. Physical occupancy within the submarket is strong, averaging 96% across 5 competitive properties. Occupancy and rent growth in the submarket are projected to remain strong as Georgia’s economy continues to attract corporations in search of a more favorable business and tax environment while providing a lower cost of living to employees.
                        </div>
                    </div>
                    <div className="flex gap-2">
                        <svg className="w-[20px] h-[14px] fill-blue-500 m-1"><use href="#icon-checkmark-rm" /></svg>
                        <div className="w-full font-OpenSans text-[14px] font-semibold">
                            Business Plan - Advenir will develop Mallory Lake at a basis of $226,472 per unit, a discount to recent trades across the Atlanta MSA which have averaged over $340,000 per unit in the past 18 months. Advenir has modeled a +/- $295,000 per door exit price on a three-year hold. Advenir at Mallory Lake will appeal to prospective residents with rents starting in the low $1,400’s, which equates to a 40% discount to home ownership, as new single-family homes less than 1 mile from Advenir at Mallory Lake have starting prices at $350k+. Advenir will create value by developing a community that appeals to the growing demand for quality housing in a market that is home to the 4th largest business park in the country.
                        </div>
                    </div>
                </div>
            </div>
        </main>
    )
}
Overview.getLayout = OpportunityLayout;
export default Overview;