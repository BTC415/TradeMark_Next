import Link from "next/link";

const Footer = () => {

    return (
        <div className="w-full bg-black text-white py-14 px-12 mt-20">
            <div className="px-14">
                <div className="grid grid-cols-5 gap-16 font-OpenSans">
                    <div className="flex flex-col gap-3 text-[13px]  [fontWeight:400]">
                        <div className="pb-2 text-[#9b9b9b] tracking-[1.56px] uppercase">Company</div>
                        <Link className="hover:text-[#9b9b9b]" href='#'>Our Story</Link>
                        <Link className="hover:text-[#9b9b9b]" href='#'>Contact Us</Link>
                        <Link className="hover:text-[#9b9b9b]" href='#'>Careers</Link>
                        <Link className="hover:text-[#9b9b9b]" href='#'>Press</Link>
                    </div>
                    <div className="flex flex-col gap-3 text-[13px]  [fontWeight:400]">
                        <div className="pb-2 text-[#9b9b9b] tracking-[1.56px] uppercase">Invest</div>
                        <Link className="hover:text-[#9b9b9b]" href='#'>Benefits of Investing</Link>
                        <Link className="hover:text-[#9b9b9b]" href='#'>How It Works</Link>
                        <Link className="hover:text-[#9b9b9b]" href='#'>Investment Options</Link>
                        <Link className="hover:text-[#9b9b9b]" href='#'>Auto Invest</Link>
                    </div>
                    <div className="flex flex-col gap-3 text-[13px]  [fontWeight:400]">
                        <div className="pb-2 text-[#9b9b9b] tracking-[1.56px] uppercase">Learn</div>
                        <Link className="hover:text-[#9b9b9b]" href='#'>Knowledge Center</Link>
                        <Link className="hover:text-[#9b9b9b]" href='#'>Why Commercial Farm Land</Link>
                        <Link className="hover:text-[#9b9b9b]" href='#'>Why REITs</Link>
                        <Link className="hover:text-[#9b9b9b]" href='#'>Retirement Investing</Link>
                        <Link className="hover:text-[#9b9b9b]" href='#'>FAQs</Link>
                        <Link className="hover:text-[#9b9b9b]" href='#'>Glossary</Link>
                    </div>
                    <div className="flex flex-col gap-3 text-[13px]  [fontWeight:400]">
                        <div className="pb-2 text-[#9b9b9b] tracking-[1.56px] uppercase">Financing</div>
                        <Link className="hover:text-[#9b9b9b]" href='#'>Financing Overview</Link>
                        <Link className="hover:text-[#9b9b9b]" href='#'>Our JV Equity Process</Link>
                        <Link className="hover:text-[#9b9b9b]" href='#'>Apply for Equity Capital</Link>
                    </div>
                    <div className="flex flex-col gap-3 text-[13px]  [fontWeight:400]">
                        <div className="pb-2 text-[#9b9b9b] tracking-[1.56px] uppercase">CALL (877) 977-2776</div>
                    </div>
                </div>
                <hr className="w-full my-4" />
                <div className="flex justify-between w-full font-OpenSans text-[13px] text-[#9b9b9b] pb-7">
                    <p>© 2023 RM Technologies LLC. All rights reserved.</p>
                    <div className="flex gap-4 justify-center items-center">
                        <svg className="w-6 h-6 fill-[#9b9b9b] "><use href="#mono-icon-twitter"></use></svg>
                        <svg className="w-6 h-6 fill-[#9b9b9b] "><use href="#mono-icon-instagram"></use></svg>
                        <svg className="w-6 h-6 fill-[#9b9b9b] "><use href="#mono-icon-facebook"></use></svg>
                        <svg className="w-6 h-6 fill-[#9b9b9b] "><use href="#mono-icon-youtube"></use></svg>
                        <svg className="w-6 h-6 fill-[#9b9b9b] "><use href="#mono-icon-linkedin"></use></svg>
                    </div>
                </div>
                <div className="flex flex-col gap-2 font-OpenSans  [fontWeight:400] text-[11px] text-[#9b9b9b] leading-5">
                    <p>Realty Mogul, Co.&apos;s (“RealtyMogul”) software and technology web platform is licensed and used by farm land sponsors to make available to investors information related to sponsors’ own farm land investment offerings (the “Platform”). This website is part of the Platform and is operated by RM Technologies, LLC, a subsidiary of RealtyMogul. By accessing this site and any pages thereof, you agree to be bound by our Terms of Service and Privacy Policy .</p>

                    <p>Neither RealtyMogul, nor any of its affiliates, are a registered broker-dealer or crowdfunding portal.</p>

                    <p>RM Adviser, LLC, a wholly owned subsidiary of RealtyMogul, is an SEC-registered investment adviser providing investment management services exclusively to certain REITs and single purpose funds and does not provide investment advisory services to the Platform’s users.</p>

                    <p>Past performance is not indicative of future results. Forward-looking statements, hypothetical information or calculations, financial estimates, projections and targeted returns are inherently uncertain. Such information should not be used as a primary basis for an investor’s decision to invest. Investments in farm land, including those offered by sponsors using the RealtyMogul platform, are speculative and involve substantial risk. You should not invest unless you can sustain the risk of loss of capital, including the risk of total loss of capital.</p>

                    <p>*All information contained on RealtyMogul.com, or in any advertisement linking to, RealtyMogul.com concerning any prospective or actual farm land investment, including information concerning projected or targeted returns and investment performance, is provided by the relevant sponsor and/or issuer (or their affiliates) of the relevant farm land investment opportunity and not by RealtyMogul and is subject to change. Such information is subject to the disclosures herein and on the Disclosures page, on the Disclaimers page for such farm land investment opportunity and is qualified in its entirety by the more comprehensive information provided in the relevant sponsor and/or issuer’s offering documentation. Unless affirmatively and specifically stated to the contrary, Reare altyMogul and its affiliates make no representations or warranties as to the accuracy of an issuer’s information, including in advertisements, and accepts no liability therefor.</p>

                    <p>Nothing on this website should be regarded as investment advice, either on behalf of a particular security or regarding an overall investment strategy, a recommendation, an offer to sell, or a solicitation of or an offer to buy any security. Advice from a securities professional is strongly advised, and we recommend that you consult with a financial advisor, attorney, accountant, and any other professional that can help you to understand and assess the risks associated with any farm land investment.</p>

                    <p>Please carefully review all disclosures here before accessing RealtyMogul.com.</p>
                </div>
            </div>
        </div>
    )
}
export default Footer;