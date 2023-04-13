import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import styles from "@/styles/hamburger.module.css"
import images from "public/images/logo.png"

const Header = () => {

    // hamburger State
    const [hamburgerIsOpen, setHumbergerIsOpen] = useState(false)
    // hamburgerの開閉
    const hamburgerButtonClick = () => {
        setHumbergerIsOpen(!hamburgerIsOpen)
    }


    return (
        // Header
        <header className="shadow">
            {/* Header Shadow */}
            <div className="container relative mx-auto p-6">
                {/* Header Container */}
                <div className="flex items-center justify-between space-x-20 mt-3">
                    {/* Logo */}
                    <Link className="z-30" href={"/"}>
                            <Image src={images} width={250} alt="logo" />
                    </Link>
                    {/* Nav */}
                    <nav className="hidden items-center space-x-10 uppercase md:flex cursor-pointer">
                        <Link className="tracking-widest  duration-300 hover:text-mainBrawn relative group" href={"/blog"}>
                            <span className="inline-block">Blog</span>
                            <span className="absolute h-[2px] bg-mainBrawn left-0 -bottom-3 w-0 group-hover:w-full transition-all duration-300"></span>
                        </Link>
                        <Link className="tracking-widest  duration-300 hover:text-mainBrawn relative group" href={"/about"}>
                            <span className="inline-block">About</span>
                            <span className="absolute h-[2px] bg-mainBrawn left-0 -bottom-3 w-0 group-hover:w-full transition-all duration-300"></span>
                        </Link>
                        <Link className="tracking-widest  duration-300 hover:text-mainBrawn relative group" href={"/contact"}>
                            <span className="inline-block">Contact</span>
                            <span className="absolute h-[2px] bg-mainBrawn left-0 -bottom-3 w-0 group-hover:w-full transition-all duration-300"></span>
                        </Link>

                        <Link className="px-6 py-2 tracking-widest bg-mainBrawn text-white rounded-xl shadow-sm border-2 border-mainBrawn
                                         duration-300 hover:bg-white hover:text-mainBrawn" href={"/work"}>
                            Work
                        </Link>
                    </nav>
                    {/* Hamburger */}
                    <button id="menu-btn" onClick={hamburgerButtonClick} className={`${styles.hamburger} ${hamburgerIsOpen ? styles.open : "md:hidden"} z-30 block focus:outline-none`}>
                        <span className={`${styles.hamburgerTop}`}></span>
                        <span className={`${styles.hamburgerMiddle}`}></span>
                        <span className={`${styles.hamburgerBottom}`}></span>
                    </button>
                </div>

                {/* Mobile Menu */}
                <div id="menu" className={`${hamburgerIsOpen ? "" : "hidden"} fixed inset-0 z-20 flex flex-col items-center min-h-screen space-y-4
                                            px-6 py-1 pt-24 pb-4 tracking-widestfont-semibold uppercase divide-y divide-white
                                            opacity-95 bg-secondBrawn`}>
                    <div className="w-full py-3 flex justify-center">
                        <Link href="/" className="text-center text-lg text-white duration-300 hover:scale-110">Home</Link>
                    </div>
                    <div className="w-full py-3 flex justify-center">
                        <Link href="/blog" className="text-center text-lg text-white duration-300 hover:scale-110">Blog</Link>
                    </div>
                    <div className="w-full py-3 flex justify-center">
                        <Link href="/about" className="text-center text-lg text-white duration-300 hover:scale-110">About</Link>
                    </div>
                    <div className="w-full py-3 flex justify-center">
                        <Link href="/work" className="text-center text-lg text-white duration-300 hover:scale-110">Work</Link>
                    </div>
                </div>
            </div>            
        </header>
    );
}

export default Header;