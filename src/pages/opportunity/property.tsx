import GoogleMapReact from 'google-map-react'
import OpportunityLayout from "@/layout/OpportunityLayout";
import { useState } from "react";
import Image from 'next/image';
import { NavItem } from './financials';
const Property = () => {
    const [curPage, setCurPage] = useState('details')

    return (
        <main className={`w-full h-full `}>
            <div className="flex gap-4 p-4 px-20 bg-gradient-to-r from-[#06048baf] to-[#000d] text-white font-OpenSans font-bold cursor-pointer sticky top-[140px] z-20">
                <NavItem onClick={() => setCurPage('details')} name="details" curPage={curPage} title="Property Details" />
                <NavItem onClick={() => setCurPage('comparables')} name="comparables" curPage={curPage} title="Comparables" />
                <NavItem onClick={() => setCurPage('location')} name="location" curPage={curPage} title="Location" />
                <NavItem onClick={() => setCurPage('photos')} name="photos" curPage={curPage} title="Photos" />
            </div>
            {curPage === 'details' &&
                <div className="flex flex-col gap-8 w-full p-[100px]">
                    <h1 className="font-OpenSans bg-clip-text text-transparent bg-gradient-to-br from-red-500 to-purple-600">Property Details</h1>
                    <div className="flex flex-col gap-8 text-[18px]">
                        <p>
                            Advenir at Mallory Lake is a multifamily development project consisting of 300-unit apartment units located in La Grange, GA. Average proforma rents at the Advenir at Mallory Lake are $1,681 ($1.80 PSF) and the Property will target the large employment workforce located at the nearby and adjacent Georgia International Business Park, which boasts more than 36,000 jobs. Amenities at the Property will include a clubhouse with lounge room, cyber café and coffee bar, business center, 24-hr fitness center with towel service, resort-style saltwater pool with sundeck and cabanas, outdoor pavilion, grilling stations, and a package concierge.
                        </p>
                        <div className="flex flex-col gap-4 w-full px-16">
                            <div className="flex justify-between w-full border-b border-[#a0a0a0] text-[18px] font-bold">
                                <p className="m-0 w-1/5">Unit Type</p>
                                <p className="m-0 w-1/5"># of Units</p>
                                <p className="m-0 w-1/5">Avg SF/Unit</p>
                                <p className="m-0 w-1/5">Avg Rent (Proforma)</p>
                                <p className="m-0 w-1/5">Rent PSF (Proforma)</p>
                            </div>
                            <div className="flex justify-between w-full border-b border-[#a0a0a0] text-[18px]">
                                <p className="m-0 w-1/5">A1</p>
                                <p className="m-0 w-1/5">120</p>
                                <p className="m-0 w-1/5">756</p>
                                <p className="m-0 w-1/5">$1,399</p>
                                <p className="m-0 w-1/5">$1.85</p>
                            </div>
                            <div className="flex justify-between w-full border-b border-[#a0a0a0] text-[18px]">
                                <p className="m-0 w-1/5">A1</p>
                                <p className="m-0 w-1/5">120</p>
                                <p className="m-0 w-1/5">756</p>
                                <p className="m-0 w-1/5">$1,399</p>
                                <p className="m-0 w-1/5">$1.85</p>
                            </div>
                            <div className="flex justify-between w-full border-b border-[#a0a0a0] text-[18px]">
                                <p className="m-0 w-1/5">A1</p>
                                <p className="m-0 w-1/5">120</p>
                                <p className="m-0 w-1/5">756</p>
                                <p className="m-0 w-1/5">$1,399</p>
                                <p className="m-0 w-1/5">$1.85</p>
                            </div>
                            <div className="flex justify-between w-full border-b border-[#a0a0a0] text-[18px] font-bold">
                                <p className="m-0 w-1/5">Totals/Averages</p>
                                <p className="m-0 w-1/5">300</p>
                                <p className="m-0 w-1/5">943</p>
                                <p className="m-0 w-1/5">$1,681</p>
                                <p className="m-0 w-1/5">$1.80</p>
                            </div>
                        </div>
                    </div>
                </div>
            }
            {curPage === 'comparables' &&
                <div className="flex flex-col gap-8 w-full p-[100px]">
                    <h1 className="font-OpenSans bg-clip-text text-transparent bg-gradient-to-br from-red-500 to-purple-600">Comparables</h1>
                    <div className="flex flex-col gap-8 text-[18px]">
                        <p>
                            Comparable data table goes here...
                        </p>
                        <div className="flex flex-col gap-4 w-full px-16">
                            <div className="flex justify-between w-full border-b border-[#a0a0a0] text-[18px] font-bold">
                                <p className="m-0 w-1/5">Unit Type</p>
                                <p className="m-0 w-1/5"># of Units</p>
                                <p className="m-0 w-1/5">Avg SF/Unit</p>
                                <p className="m-0 w-1/5">Avg Rent (Proforma)</p>
                                <p className="m-0 w-1/5">Rent PSF (Proforma)</p>
                            </div>
                            <div className="flex justify-between w-full border-b border-[#a0a0a0] text-[18px]">
                                <p className="m-0 w-1/5">A1</p>
                                <p className="m-0 w-1/5">120</p>
                                <p className="m-0 w-1/5">756</p>
                                <p className="m-0 w-1/5">$1,399</p>
                                <p className="m-0 w-1/5">$1.85</p>
                            </div>
                            <div className="flex justify-between w-full border-b border-[#a0a0a0] text-[18px]">
                                <p className="m-0 w-1/5">A1</p>
                                <p className="m-0 w-1/5">120</p>
                                <p className="m-0 w-1/5">756</p>
                                <p className="m-0 w-1/5">$1,399</p>
                                <p className="m-0 w-1/5">$1.85</p>
                            </div>
                            <div className="flex justify-between w-full border-b border-[#a0a0a0] text-[18px]">
                                <p className="m-0 w-1/5">A1</p>
                                <p className="m-0 w-1/5">120</p>
                                <p className="m-0 w-1/5">756</p>
                                <p className="m-0 w-1/5">$1,399</p>
                                <p className="m-0 w-1/5">$1.85</p>
                            </div>
                            <div className="flex justify-between w-full border-b border-[#a0a0a0] text-[18px] font-bold">
                                <p className="m-0 w-1/5">Totals/Averages</p>
                                <p className="m-0 w-1/5">300</p>
                                <p className="m-0 w-1/5">943</p>
                                <p className="m-0 w-1/5">$1,681</p>
                                <p className="m-0 w-1/5">$1.80</p>
                            </div>
                        </div>
                    </div>
                </div>
            }
            {curPage === 'location' &&
                <div className="flex flex-col gap-8 w-full p-[100px]">
                    <div className=' h-[800px] -z-50'>
                        <GoogleMapReact
                            // bootstrapURLKeys={{ key: "AIzaSyAOVYRIgupAurZup5y1PRh8Ismb1A3lLao" }}
                            defaultCenter={{
                                lat: 33.0237598,
                                lng: -84.9923873
                            }}
                            defaultZoom={4}
                        >
                        </GoogleMapReact>
                    </div>
                    <h1 className="font-OpenSans bg-clip-text text-transparent bg-gradient-to-br from-red-500 to-purple-600">Market Overview</h1>
                    <h5 className='m-0'>Atlanta, the largest city in the No. 1 ranked state for business climate, continues to prove itself attractive to tech companies looking to capitalize on its deep and diverse talent pool. Atlanta is the No. 3 city for Fortune 500 companies and 29 Fortune 500/100 companies are headquartered in the metro Atlanta area, generating an aggregate revenue of $429 billion as of fiscal year 2020. From 2022 until the present day, Atlanta has seen Google, Capital One, Walmart, Cisco Systems, and Visa add a combined 3,700+ new high-paying office jobs while thousands of new jobs are expected to materialize in the future from expansions announced by Amazon, The Home Depot, and Kellogg&apos;s. Atlanta is also home to the busiest airport in the world (Hartsfield-Jackson Atlanta International Airport). </h5>
                    <h5 className='m-0'>Advenir currently owns and operates 3 multifamily communities within the MSA and those investments are performing above projection.</h5>
                    <h1 className="font-OpenSans bg-clip-text text-transparent bg-gradient-to-br from-red-500 to-purple-600">Submarket Overview</h1>
                    <h5 className='m-0'>Advenir at Mallory Lake is located within the Troup County submarket, which has seen +25% job growth over the past 12 years. Local officials have been conservative with housing supply in relation to the rapid job growth that has taken place. Only 3 multifamily communities have been developed in the past 12 years for a total of 558 units. Strong demand for quality housing has contributed to year-over-year effective rent growth of 8% for September 2022 (CoStar). Advenir has underwritten 3.0% rent growth. Physical occupancy within the submarket is strong, averaging 96% across 5 competitive properties. Occupancy and rent growth in the submarket are projected to remain strong as Georgia&apos;s economy continues to attract corporations in search of a more favorable business and tax environment while providing a lower cost of living to employees.</h5>
                </div>
            }
            {curPage === 'photos' &&
                <div className="flex flex-col gap-8 w-full p-[100px]">
                    <div className='flex gap-8 flex-wrap w-full justify-center items-center'>
                        <Image className='rounded-xl shadow-md' alt='img' src='/pic1.jpg' width={600} height={400} />
                        <Image className='rounded-xl shadow-md' alt='img' src='/pic2.png' width={600} height={400} />
                        <Image className='rounded-xl shadow-md' alt='img' src='/pic3.png' width={600} height={400} />
                        <Image className='rounded-xl shadow-md' alt='img' src='/pic4.jpg' width={600} height={400} />
                        <Image className='rounded-xl shadow-md' alt='img' src='/pic5.png' width={600} height={400} />
                        <Image className='rounded-xl shadow-md' alt='img' src='/trees.webp' width={600} height={400} />
                    </div>
                </div>
            }
        </main>
    )
}
Property.getLayout = OpportunityLayout;
export default Property;