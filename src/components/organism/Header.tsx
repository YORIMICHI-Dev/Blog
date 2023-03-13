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
                        <Link className="tracking-widest hover:text-mainBrawn" href={"/about"}>
                            Blog
                        </Link>
                        <Link className="tracking-widest hover:text-mainBrawn" href={"/blog"}>
                            About
                        </Link>
                        <Link className="tracking-widest hover:text-mainBrawn" href={"/contact"}>
                            Contact
                        </Link>
                        <Link className="px-8 py-2 tracking-widest bg-mainBrawn text-white rounded-xl shadow-sm border-2 border-mainBrawn
                                    hover:bg-white hover:text-mainBrawn" href={"/work"}>
                            Work
                        </Link>
                    </nav>
                    {/* Hamburger */}
                        {/* Hamberger */}
                            <button id="menu-btn" onClick={hamburgerButtonClick} className={`${styles.hamburger} ${hamburgerIsOpen ? styles.open : "md:hidden"} z-30 block focus:outline-none`}>
                            <span className={`${styles.hamburgerTop}`}></span>
                            <span className={`${styles.hamburgerMiddle}`}></span>
                            <span className={`${styles.hamburgerBottom}`}></span>
                        </button>
                </div>

                {/* Mobile Menu */}
                <div id="menu" className={`${hamburgerIsOpen ? "" : "hidden"} fixed inset-0 z-20 flex flex-col items-center min-h-screen space-y-4
                                            px-6 py-1 pt-24 pb-4 tracking-widestfont-semibold uppercase divide-y divide-white
                                            opacity-95 bg-mainBrawn`}>
                    <div className="w-full py-3 text-center hover:text-softRed">
                        <Link href="/">Home</Link>
                    </div>
                    <div className="w-full py-3 text-center hover:text-softRed">
                        <Link href="/blog">Blog</Link>
                    </div>
                    <div className="w-full py-3 text-center hover:text-softRed">
                        <Link href="/about">About</Link>
                    </div>
                    <div className="w-full py-3 text-center hover:text-softRed">
                        <Link href="/work">Work</Link>
                    </div>
                </div>
            </div>            
        </header>
    );
}

export default Header;