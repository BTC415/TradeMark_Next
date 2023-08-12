import OpportunityLayout from "@/layout/OpportunityLayout";
import Link from "next/link";
const Documents = () => {
    return (
        <main className={`w-full h-full `}>
            <div className="flex flex-col gap-2 w-full p-16 px-48 bg-[#f7f7f7] font-mont">
                <h1 className="font-OpenSans m-0 bg-clip-text text-transparent bg-gradient-to-br from-red-500 to-purple-600">Documents</h1>
                <div className="flex justify-between items-center px-10 py-4">
                    <h4 className="m-0">Advenir at Mallory Lake - Project Summary</h4>
                    <div className="flex-grow border-b border-dashed border-[#ccc]"></div>
                    <Link download='/pdf_download.pdf' href='/pdf_download.pdf' target="_blank" ><h4 className="m-0 text-blue-700 cursor-pointer">Download<svg className="w-[16px] h-[16px] inline-block"><use href='#icon-download' /></svg></h4></Link>
                </div>
                <div className="flex justify-between items-center px-10 py-4">
                    <h4 className="m-0">Advenir@Mallory Lake Investors, LP - Subscription Agreement</h4>
                    <div className="flex-grow border-b border-dashed border-[#ccc]"></div>
                    <Link download='/pdf_download.pdf' href='/pdf_download.pdf' target="_blank" ><h4 className="m-0 text-blue-700 cursor-pointer">Download<svg className="w-[16px] h-[16px] inline-block"><use href='#icon-download' /></svg></h4></Link>
                </div>
                <div className="flex justify-between items-center px-10 py-4">
                    <h4 className="m-0">Advenir@Mallory Lake Investors, LP - Private Placement Memorandum</h4>
                    <div className="flex-grow border-b border-dashed border-[#ccc]"></div>
                    <Link download='/pdf_download.pdf' href='/pdf_download.pdf' target="_blank" ><h4 className="m-0 text-blue-700 cursor-pointer">Download<svg className="w-[16px] h-[16px] inline-block"><use href='#icon-download' /></svg></h4></Link>
                </div>
                <div className="flex justify-between items-center px-10 py-4">
                    <h4 className="m-0">Advenir at Mallory Lake - Webinar Transcript</h4>
                    <div className="flex-grow border-b border-dashed border-[#ccc]"></div>
                    <Link download='/pdf_download.pdf' href='/pdf_download.pdf' target="_blank" ><h4 className="m-0 text-blue-700 cursor-pointer">Download<svg className="w-[16px] h-[16px] inline-block"><use href='#icon-download' /></svg></h4></Link>
                </div>
                <div className="flex justify-between items-center px-10 py-4">
                    <h4 className="m-0">Advenir at Mallory Lake - FAQ</h4>
                    <div className="flex-grow border-b border-dashed border-[#ccc]"></div>
                    <Link download='/pdf_download.pdf' href='/pdf_download.pdf' target="_blank" ><h4 className="m-0 text-blue-700 cursor-pointer">Download<svg className="w-[16px] h-[16px] inline-block"><use href='#icon-download' /></svg></h4></Link>
                </div>
            </div>
        </main>
    )
}
Documents.getLayout = OpportunityLayout;
export default Documents;