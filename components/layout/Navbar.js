import Link from 'next/link';
import Image from 'next/image'
import { useState } from 'react';
import LoginBtn from '../Loginbt';


export const Navbar = () => {
    const [isOpen, setIsOpen] = useState(true);

    return (
        <nav className="flex items-center justify-between flex-wrap bg-gray p-6">
            <div className="flex items-center flex-shrink-0 text-gray-500 mr-6">
                <img className="fill-current h-10 w-10 mr-2" width="54" height="54" viewBox="0 0 54 54" src="/kccu.svg" />
                <Link href="/">
                    <a className="font-semibold text-xl tracking-tight">한국큐브문화진흥회</a>
                </Link>
            </div>
            <div className="md:hidden flex flex-grow"></div>
            <LoginBtn></LoginBtn>
            <div className="block md:hidden">
                <button 
                    className="flex items-center px-0 py-2 rounded text-gray-500 border-gray-500 hover:text-gray-400 hover:border-gray-400"
                    onClick={() => setIsOpen((prev) => !prev)}
                >
                    <svg className="fill-current h-7 w-7" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                        <title>Menu</title>
                        <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z"/>
                    </svg>
                </button>
            </div>
            {/* nav part */}
            <div className={`w-full block flex-grow md:flex md:items-center md:w-auto ${isOpen ? "" : "sm:hidden"}`}>
                <div className="text-sm md:flex-grow">
                    <Link href="/aboutus">
                        <a  className="block mt-4 md:inline-block md:mt-0 text-gray-500 hover:text-gray-300 mr-4">
                            About Us
                        </a>                    
                    </Link>
                    <Link href="/#">
                        <a className="block mt-4 md:inline-block md:mt-0 text-gray-500 hover:text-gray-300 mr-4">
                            Competitions
                        </a>
                    </Link>
                    <a href="#responsive-header" className="block mt-4 md:inline-block md:mt-0 text-gray-500 hover:text-gray-300 self-end">
                        Contact Us
                    </a>
                </div>
            </div>
        </nav>
    );
};