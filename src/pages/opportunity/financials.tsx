
import OpportunityLayout from "@/layout/OpportunityLayout";
import Image from "next/image";
import { useState } from "react";
export const NavItem = ({ onClick, curPage, title, name }: { onClick: () => void, curPage: string, title: string, name: string }) => {
    return (
        <h4 onClick={onClick} className={`m-0 hover:shadow-[0_-2px_#ff832b_inset] ${curPage === name ? 'shadow-[0_-2px_#ff832b_inset]' : ''} p-4`}>{title}</h4>
    )
}
const Financials = () => {
    const [curPage, setCurPage] = useState('capstack')

    return (
        <main className={`w-full h-full `}>
            <div className="flex gap-4 p-4 px-20 bg-gradient-to-r from-[#06048baf] to-[#000d] text-white font-OpenSans font-bold cursor-pointer sticky top-[140px]">
                <NavItem onClick={() => setCurPage('capstack')} name="capstack" curPage={curPage} title="Cap Stack" />
                <NavItem onClick={() => setCurPage('sources')} name="sources" curPage={curPage} title="Sources & Uses" />
                <NavItem onClick={() => setCurPage('debts')} name="debts" curPage={curPage} title="Debt Assumption" />
                <NavItem onClick={() => setCurPage('distributions')} name="distributions" curPage={curPage} title="Distributions" />
                <NavItem onClick={() => setCurPage('fees')} name="fees" curPage={curPage} title="Fees" />
            </div>
            {curPage === 'capstack' &&
                <div className="w-full p-[100px]">
                    <h1 className="font-OpenSans bg-clip-text text-transparent bg-gradient-to-br from-red-500 to-purple-600">Cap Stack</h1>
                    <Image className="mx-auto" src='/chart2.png' alt='logo' width={800} height={400} />
                </div>
            }
            {curPage === 'sources' &&
                <div className="w-full p-[100px]">
                    <h1 className="font-OpenSans bg-clip-text text-transparent bg-gradient-to-br from-red-500 to-purple-600">Sources & Uses</h1>
                    <h3 className="m-0">Total Capitalization</h3>
                    <div className="flex flex-col gap-4 w-full p-12">
                        <div className="flex justify-between w-full border-b border-[#a0a0a0] text-[18px] font-bold">
                            <p className="m-0 w-2/5">Sources of Funds</p>
                            <p className="m-0 w-2/5">$ Amount</p>
                            <p className="m-0 w-1/5">$/Unit</p>
                        </div>
                        <div className="flex justify-between w-full border-b border-[#a0a0a0] text-[18px]">
                            <p className="m-0 w-2/5">Debt</p>
                            <p className="m-0 w-2/5">$42,637,000</p>
                            <p className="m-0 w-1/5">$179,852</p>
                        </div>
                        <div className="flex justify-between w-full border-b border-[#a0a0a0] text-[18px]">
                            <p className="m-0 w-2/5">LP Equity</p>
                            <p className="m-0 w-2/5">$1,618,666</p>
                            <p className="m-0 w-1/5">$5,396</p>
                        </div>
                        <div className="flex justify-between w-full border-b border-[#a0a0a0] text-[18px]">
                            <p className="m-0 w-2/5">GP Equity<sup>(1)</sup></p>
                            <p className="m-0 w-2/5">$1,618,666</p>
                            <p className="m-0 w-1/5">$5,396</p>
                        </div>
                        <div className="flex justify-between w-full border-b border-[#a0a0a0] text-[18px] font-bold">
                            <p className="m-0 w-2/5">Total Sources of Funds</p>
                            <p className="m-0 w-2/5">$55,574,196</p>
                            <p className="m-0 w-1/5">$185,248</p>
                        </div>
                    </div>
                    <div className="flex flex-col gap-4 w-full p-12">
                        <div className="flex justify-between w-full border-b border-[#a0a0a0] text-[18px] font-bold">
                            <p className="m-0 w-2/5">Uses of Funds</p>
                            <p className="m-0 w-2/5">$ Amount</p>
                            <p className="m-0 w-1/5">$/Unit</p>
                        </div>
                        <div className="flex justify-between w-full border-b border-[#a0a0a0] text-[18px]">
                            <p className="m-0 w-2/5">Land</p>
                            <p className="m-0 w-2/5">$42,637,000</p>
                            <p className="m-0 w-1/5">$179,852</p>
                        </div>
                        <div className="flex justify-between w-full border-b border-[#a0a0a0] text-[18px]">
                            <p className="m-0 w-2/5">Hard Costs</p>
                            <p className="m-0 w-2/5">$1,618,666</p>
                            <p className="m-0 w-1/5">$5,396</p>
                        </div>
                        <div className="flex justify-between w-full border-b border-[#a0a0a0] text-[18px]">
                            <p className="m-0 w-2/5">Hard Cost Contingency</p>
                            <p className="m-0 w-2/5">$1,618,666</p>
                            <p className="m-0 w-1/5">$5,396</p>
                        </div>
                        <div className="flex justify-between w-full border-b border-[#a0a0a0] text-[18px]">
                            <p className="m-0 w-2/5">Soft Costs<sup>(2)</sup></p>
                            <p className="m-0 w-2/5">$1,618,666</p>
                            <p className="m-0 w-1/5">$5,396</p>
                        </div>
                        <div className="flex justify-between w-full border-b border-[#a0a0a0] text-[18px] font-bold">
                            <p className="m-0 w-2/5">Total Uses of Funds</p>
                            <p className="m-0 w-2/5">$55,574,196</p>
                            <p className="m-0 w-1/5">$185,248</p>
                        </div>
                    </div>
                    <h4>(1) The Sponsor&apos;s equity contribution may consist of friends and family equity and equity from funds controlled by the Sponsor.</h4>
                    <h4>(2) RM Technologies, LLC, an affiliate of RealtyMogul, operates the RealtyMogul Platform.  RM Technologies, LLC charges a fixed, non-percentage-based fee for real estate companies and their sponsors to use the Platform and for Platform-related services.  Please see the Fees and Disclaimers sections below for additional information concerning fees paid to RM Technologies, LLC.</h4>
                </div>
            }
            {curPage === 'debts' &&
                <div className="w-full p-[100px]">
                    <h1 className="font-OpenSans bg-clip-text text-transparent bg-gradient-to-br from-red-500 to-purple-600">Debt Assumption</h1>
                    <h3>The expected terms of the debt financing are as follows:</h3>
                    <div className="flex flex-col gap-4 text-[14px] font-OpenSans">
                        <li><b>Lender:</b> Great Southern Bank</li>
                        <li><b>Loan Type:</b>Construction Loan </li>
                        <li><b>Term:</b>42 Months & Two (2) 12-month extension options. </li>
                        <li><b>LTC:</b>62.8% </li>
                        <li><b>Estimated Proceeds:</b>$42,637,000 </li>
                        <li><b>Interest Type:</b>Floating </li>
                        <li><b>Spread Above SOFR:</b>3.00% </li>
                        <li><b>Interest-Only Period:</b>42 Months </li>
                        <li><b>Amortization:</b>30 Years </li>
                        <li><b>Prepayment Terms:</b>N/A (at any time) </li>
                        <li><b>Extension Requirements:</b>(a) 30 days written notice, (b) not in default, (c) with all documents required by lender, (d) with a fee of 0.15% of commitment to lender, (e) with a DSCR of not less than 1.15 to 1.0 for the first extension and not less than 1.25 to 1.0 for the second extension. </li>
                        <li><b>Recourse Description:</b>Partial Recourse (%) </li>
                    </div>
                    <h5>(1) A substantial portion of the total acquisition for the Property will be paid with borrowed funds, i.e., debt.  Please carefully review the Disclaimers section below for additional information concerning the Sponsors use of debt. </h5>
                </div>
            }
            {curPage === 'distributions' &&
                <div className="w-full p-[100px]">
                    <h1 className="font-OpenSans bg-clip-text text-transparent bg-gradient-to-br from-red-500 to-purple-600">Distributions</h1>
                    <h4>Advenir intends to make distributions from Advenir@Mallory Lake Investors, LP as follows:</h4>
                    <ol className="flex flex-col gap-4 text-[14px] font-OpenSans list-decimal list-inside">
                        <li>Pari-passu all cash flow available for distribution to the Equity Investors(1) until the Equity Investors receive a Preferred Return of 9.0%(2) Per Annum (non-compounded)</li>
                        <li>Return of Capital to all Equity Investors;</li>
                        <li>70% / 30% (70% to the LP Equity Investors(3)/ 30% to the GP Equity Investors(4)) of all cash flow available for distribution thereafter.</li>
                    </ol>
                    <h4>Advenir intends to make distributions to investors after the payment of the company&apos;s liabilities (loan payments, operating expenses, and other fees as more specifically set forth in the LLC agreements, in addition to any member loans or returns due on member loan).</h4>
                    <h4>Distributions are expected to start in April 2025 and are projected to continue on a quarterly basis thereafter. Distributions are at the discretion of Advenir, who may decide to delay distributions for any reason, including maintenance or capital reserves.</h4>
                    <h4>Advenir will receive a promoted/carried interest as indicated above.</h4>
                    <div className="flex flex-col gap-4 w-full p-16 text-[14px]">
                        <h3>Cash Flow Summary</h3>
                        <div className="flex justify-between w-full border-b border-[#a0a0a0] font-bold">
                            <p className="m-0 w-2/5"> </p>
                            <p className="m-0 w-1/5">Year 1</p>
                            <p className="m-0 w-1/5">Year 2</p>
                            <p className="m-0 w-1/5">Year 3</p>
                        </div>
                        <div className="flex justify-between w-full border-b border-[#a0a0a0] ">
                            <p className="m-0 w-2/5">Effective Gross Revenue </p>
                            <p className="m-0 w-1/5">$0</p>
                            <p className="m-0 w-1/5">$2,740,348</p>
                            <p className="m-0 w-1/5">$5,542,576</p>
                        </div>
                        <div className="flex justify-between w-full border-b border-[#a0a0a0] ">
                            <p className="m-0 w-2/5">Total Operating Expenses </p>
                            <p className="m-0 w-1/5">$0</p>
                            <p className="m-0 w-1/5">$2,740,348</p>
                            <p className="m-0 w-1/5">$5,542,576</p>
                        </div>
                        <div className="flex justify-between w-full border-b border-[#a0a0a0] font-bold">
                            <p className="m-0 w-2/5">Net Operating Income </p>
                            <p className="m-0 w-1/5">$0</p>
                            <p className="m-0 w-1/5">$2,740,348</p>
                            <p className="m-0 w-1/5">$5,542,576</p>
                        </div>
                    </div>
                    <div className="flex flex-col gap-4 w-full p-16 text-[14px]">
                        <h3>Project-Level Cash Flows</h3>
                        <div className="flex justify-between w-full border-b border-[#a0a0a0] font-bold">
                            <p className="m-0 w-2/6"> </p>
                            <p className="m-0 w-1/6">Year 0</p>
                            <p className="m-0 w-1/6">Year 1</p>
                            <p className="m-0 w-1/6">Year 2</p>
                            <p className="m-0 w-1/6">Year 3</p>
                        </div>
                        <div className="flex justify-between w-full border-b border-[#a0a0a0] ">
                            <p className="m-0 w-2/6">Net Cash Flow </p>
                            <p className="m-0 w-1/6">($25,304,605)</p>
                            <p className="m-0 w-1/6">$0</p>
                            <p className="m-0 w-1/6">$586,648</p>
                            <p className="m-0 w-1/6">	$40,860,611</p>
                        </div>
                    </div>
                </div>
            }
            {curPage === 'fees' &&
                <div className="w-full p-[100px]">
                    <h1 className="font-OpenSans bg-clip-text text-transparent bg-gradient-to-br from-red-500 to-purple-600">Fees</h1>
                    <h4>Certain fees and compensation will be paid over the life of the transaction; please refer to Advenir&apos;s materials for details. The following fees and compensation will be paid</h4>
                    <div className="flex flex-col gap-4 w-full p-16 text-[14px]">
                        <h3>One-Time Fees:</h3>
                        <div className="flex justify-between w-full border-b border-[#a0a0a0] font-bold">
                            <p className="m-0 w-1/6">Type of Fee </p>
                            <p className="m-0 w-3/6">Amount of Fee </p>
                            <p className="m-0 w-1/6">Received By </p>
                            <p className="m-0 w-1/6">Paid From </p>
                        </div>
                        <div className="flex justify-between w-full border-b border-[#a0a0a0] ">
                            <p className="m-0 w-1/6">Acquisition Fee </p>
                            <p className="m-0 w-3/6">$300,000 </p>
                            <p className="m-0 w-1/6">Advenir </p>
                            <p className="m-0 w-1/6">Capitalized Equity Contribution </p>
                        </div>
                        <div className="flex justify-between w-full border-b border-[#a0a0a0] ">
                            <p className="m-0 w-1/6">Guarantee Fee</p>
                            <p className="m-0 w-3/6">Approximately $219,906 </p>
                            <p className="m-0 w-1/6">IDP South Davis </p>
                            <p className="m-0 w-1/6">Capitalized Equity Contribution </p>
                        </div>
                        <div className="flex justify-between w-full border-b border-[#a0a0a0] ">
                            <p className="m-0 w-1/6">Technology Solution Licensing Fee</p>
                            <p className="m-0 w-3/6">Flat one-time licensing fees of $15,000 plus $1,500 per each prospective investor onboarded by Sponsor through its license and use of RM Technologies’ Technology Solution</p>
                            <p className="m-0 w-1/6">RM Technologies, LLC</p>
                            <p className="m-0 w-1/6">Capitalization (at Sponsor’s discretion)</p>
                        </div>
                    </div>
                    <div className="flex flex-col gap-4 w-full p-16 text-[14px]">
                        <h3>Recurring Fees:</h3>
                        <div className="flex justify-between w-full border-b border-[#a0a0a0] font-bold">
                            <p className="m-0 w-1/6">Type of Fee </p>
                            <p className="m-0 w-3/6">Amount of Fee </p>
                            <p className="m-0 w-1/6">Received By </p>
                            <p className="m-0 w-1/6">Paid From </p>
                        </div>
                        <div className="flex justify-between w-full border-b border-[#a0a0a0] ">
                            <p className="m-0 w-1/6">Construction Management Fee </p>
                            <p className="m-0 w-3/6">$300,000 </p>
                            <p className="m-0 w-1/6">Advenir </p>
                            <p className="m-0 w-1/6">Capitalized Equity Contribution </p>
                        </div>
                        <div className="flex justify-between w-full border-b border-[#a0a0a0] ">
                            <p className="m-0 w-1/6">Property Management Fee</p>
                            <p className="m-0 w-3/6">3.0% of Monthly Gross Revenues</p>
                            <p className="m-0 w-1/6">Advenir </p>
                            <p className="m-0 w-1/6">Cash Flow</p>
                        </div>
                        <div className="flex justify-between w-full border-b border-[#a0a0a0] ">
                            <p className="m-0 w-1/6">Construction Management Fee</p>
                            <p className="m-0 w-3/6">1.15% of Hard Costs</p>
                            <p className="m-0 w-1/6">IDP South Davis</p>
                            <p className="m-0 w-1/6">Capitalized Equity Contribution</p>
                        </div>
                        <div className="flex justify-between w-full border-b border-[#a0a0a0] ">
                            <p className="m-0 w-1/6">Development Fee</p>
                            <p className="m-0 w-3/6">3.5% of Total Project Costs</p>
                            <p className="m-0 w-1/6">IDP South Davis</p>
                            <p className="m-0 w-1/6">Capitalized Equity Contribution</p>
                        </div>
                    </div>
                </div>
            }

        </main >
    )
}
Financials.getLayout = OpportunityLayout;
export default Financials;