import Image from "next/image";
import { useRouter } from "next/router";
import { ReactNode } from "react";

const NavItem = ({ href, width, children, title }: { href?: string, children?: ReactNode, title: string, width: number }) => {
    const router = useRouter()
    const handleClick = () => {
        if (href) router.push(href)
    }
    return (
        <div onClick={handleClick} className="flex flex-col h-[18px] group/nav-item cursor-pointer " style={{ width }}>
            <div className="flex gap-2 px-5 font-OpenSans text-[13px] [fontWeight:500px] tracking-[2.6px] hover:scale-105 transition-all ease-in-out group-hover/nav-item:text-red-700 cursor-pointer uppercase">
                <p className="m-0">{title}</p>
                {children && <svg className="w-[18px] h-[18px] fill-[#a4c2d5] group-hover/nav-item:fill-[#1b3c5a] rotate-180 group-hover/nav-item:rotate-0 transition-all ease-in-out"><use href="#chevron-up-nav"></use></svg>}
            </div>
            {children &&
                < ul className="flex group-hover/nav-item:opacity-100 opacity-[0] transition-all ease-in-out duration-1000 -translate-y-[400px] group-hover/nav-item:translate-y-0 w-[280px] flex-col gap-[1px] cursor-pointer font-OpenSans text-[14px] bg-white text-black rounded-sm shadow-[0_1px_3px_1px_#ccc] p-4">
                    {children}
                </ul>
            }
        </div >
    )
}
const NavSubItem = ({ href, children }: { href?: string, children: ReactNode }) => {
    const router = useRouter()
    const handleClick = () => {
        if (href) router.push(href)
    }
    return (
        <li onClick={handleClick} className="hover:text-[#1d89ff] p-4">
            {children}
        </li>
    )
}
export const NavButton = ({ className = '', onClick, children, style = { backgroundImage: 'linear-gradient(310deg, #2152ff 0%, #21d4fd 100%)' } }: { className: string, children: ReactNode, style?: object, onClick?: () => void }) => {
    return (
        <button onClick={onClick} style={style} className={`${className} px-6 rounded-md border border-[#a4c2d5] h-[50px] font-OpenSans text-[12px] [fontWeight:500px] tracking-[3px] transition-all ease-in-out uppercase hover:opacity-80`}>{children}</button>
    )
}
const Header = () => {
    const router = useRouter();
    const handleClick = () => {
        router.push('/signin')
    }
    return (
        <div className="w-full fixed top-0 h-[90px] bg-white text-[#123d63] px-12 py-[5px] shadow-[0_0_0px_2px_#eee] z-50">
            <div className="w-full h-full px-14 py-2">
                <div className="flex justify-between items-center">
                    <div className="cursor-pointer" onClick={() => router.push('/')}>
                        <Image className="hover:scale-105 transition-all ease-in-out" src='/farmdlogo.avif' priority alt='logo' width={204} height={68} />
                    </div>
                    <div className="flex-grow flex justify-center">
                        <NavItem href='/investments' width={174} title="Investments" />
                        <NavItem width={114} title="Reits">
                            <NavSubItem>Income REIT</NavSubItem>
                            <NavSubItem>Growth REIT</NavSubItem>
                            <NavSubItem>Why REITS</NavSubItem>
                        </NavItem>
                        <NavItem width={174} title="Research" >
                            <NavSubItem>Track Record</NavSubItem>
                            <NavSubItem>Past Investments</NavSubItem>
                            <NavSubItem>Get Started</NavSubItem>
                            <NavSubItem>Benefits of Investing</NavSubItem>
                            <NavSubItem>Investment Options</NavSubItem>
                            <NavSubItem>1031 Exchange</NavSubItem>
                            <NavSubItem>Why Commercial Farm Land</NavSubItem>
                            <NavSubItem>Knowledge Center</NavSubItem>
                        </NavItem>
                        <NavItem width={182} title="Our story" />
                    </div>
                    <div className="flex gap-4 ">
                        <NavButton onClick={handleClick} className="text-white hover:bg-[#1d89ff] hover:text-white">Sign in</NavButton>
                        <NavButton onClick={handleClick} className="bg-[#176db6] text-white hover:bg-[#1d89ff] hover:text-white">Join</NavButton>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Header;