import TableSort from "@/components/TableSort";
import OpportunityLayout from "@/layout/OpportunityLayout";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { v4 as uuidv4 } from 'uuid'
import { NavItem } from "./financials";
const makeRow = (propertyname: string, citystate: string, assettype: string, equityinvested: string, emx: string, saledate: string, yearsheld: string, annualnet: string) => {
    return { id: uuidv4(), propertyname, citystate, assettype, equityinvested, emx, saledate, yearsheld, annualnet }
}
const Management = () => {
    const [curPage, setCurPage] = useState('about')

    return (
        <main className={`w-full h-full `}>
            <div className="flex gap-4 p-4 px-20 bg-gradient-to-r from-[#06048baf] to-[#000d] text-white font-OpenSans font-bold cursor-pointer sticky top-[140px]">
                <NavItem onClick={() => setCurPage('about')} name="about" curPage={curPage} title="About" />
                <NavItem onClick={() => setCurPage('track')} name="track" curPage={curPage} title="Track Record" />
            </div>
            {curPage === 'about' &&
                <div className="w-full p-[100px]">
                    <h1 className="font-OpenSans bg-clip-text text-transparent bg-gradient-to-br from-red-500 to-purple-600">About</h1>
                    <div className="grid grid-cols-2 gap-2 ">
                        <Image src='/advinir_logo.png' alt='logo' width={343} height={400} />
                        <div className="text-[18px]">
                            <h1>Advenir</h1>
                            <p>
                                Advenir acquires, develops, and operates multi-family & single-family rental communities on behalf of high-net-worth and institutional investors. Founded in 1996, Advenir, LLC is a real estate investment company headquartered in Aventura, Florida (Miami-Dade) with over two decades of proven track record across multiple real estate cycles. Advenir has seen 44 fully realized investments with an average multiple on capital of 2.16x and an average annualized net investor returns of 24.1% over an average hold period of 4.7 years.
                            </p>
                            <p>
                                Advenir leverages 27+ years of experience within the multifamily investment space to identify selective JV partnerships with exceptional multi-family developers to capitalize on superior risk-adjusted returns. Advenir develops in markets that exhibit a pro-growth mentality with affordable living costs with a goal of building to a minimum 20% discount to recent trades within an identified submarket. Advenir&apos;s acquisitions team will “stress test” rents within a rental competitive set using internally verified data from Advenir&apos;s in-house property management team that oversees Advenir&apos;s 13,000+ unit portfolio and places a strong emphasis on the future supply pipeline and demand fundamentals.
                            </p>
                            <p>
                                Imperium Development is headquartered in Atlanta, Georgia, and is focused on creating value within the multifamily investment space. Imperium&apos;s leadership has more than 50 years of combined multifamily experience, inclusive of $1.6 billion in total projects with over 11,000 units constructed. This is the second deal that Advenir and Imperium Development have worked on together.
                            </p>
                            <p> <a href='https://www.advenir.net/'>https://www.advenir.net/</a> </p>
                        </div>
                    </div>
                    <div className="flex flex-wrap gap-8">
                        <div className="flex flex-col gap-4 justify-center items-center p-4 shadow-md rounded-lg">
                            <Image alt='img' src='/stephen_vecchitto_-_advenir.jpg' width={200} height={200} />
                            <h3 className="m-0">STEPHEN L. VECCHITTO</h3>
                            <h5 className="m-0">Managing member</h5>
                            <Link href='https://www.linkedin.com/in/stephen-vecchitto-434557189/'><svg className="w-[40px] h-[12px]"><use href="#icon-linkedin" /></svg></Link>
                        </div>
                        <div className="flex flex-col gap-4 justify-center items-center p-4 shadow-md rounded-lg">
                            <Image alt='img' src='/william_sandbrook_-_advenir.jpg' width={200} height={200} />
                            <h3 className="m-0">STEPHEN L. VECCHITTO</h3>
                            <h5 className="m-0">Chairman</h5>
                            <Link href='https://www.linkedin.com/in/william-j-sandbrook-2375748b/'><svg className="w-[40px] h-[12px]"><use href="#icon-linkedin" /></svg></Link>
                        </div>
                    </div>
                </div>
            }
            {curPage === 'track' &&
                <div className="w-full p-[100px]">
                    <h1 className="font-OpenSans bg-clip-text text-transparent bg-gradient-to-br from-red-500 to-purple-600">Track Record</h1>
                    <div className="p-8">
                        <TableSort
                            columns={['propertyname', 'citystate', 'assettype', 'equityinvested', 'emx', 'saledate', 'yearsheld', 'annualnet']}
                            columnTitles={['Property Name', 'City, State', 'Asset Type', 'Equity Invested', 'EMx', 'Sale Date', 'Years Held', 'Annual Net Investor Return']}>
                            {[
                                makeRow('Pier Club', 'Miramar, FL', 'Multifamily', '$1,500,000', '2.64X', '2000', '1.9', '86%'),
                                makeRow('Pier Club', 'Miramar, FL', 'Multifamily', '$1,500,000', '2.64X', '2000', '1.9', '86%'),
                                makeRow('Pier Club', 'Miramar, FL', 'Multifamily', '$1,500,000', '2.64X', '2000', '1.9', '86%'),
                                makeRow('Pier Club', 'Miramar, FL', 'Multifamily', '$1,500,000', '2.64X', '2000', '1.9', '86%'),
                            ]}
                        </TableSort>
                    </div>
                </div>
            }


        </main>
    )
}
Management.getLayout = OpportunityLayout;
export default Management;