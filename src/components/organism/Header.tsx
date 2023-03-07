import Link from "next/link";
import Image from "next/image";

import images from "public/images/logo.png"

function Header() {
    return (
        <header className="bg-white text-black shadow w-full">
            <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
                <Link className="flex flex-wrap md:w-2/5 items-center justify-start" href={"/"}>
                        <Image src={images} width={300} alt="logo" />
                </Link>
                <nav className="flex flex-wrap md:w-4/5 justify-end text-base md:ml-auto">
                    <Link className="mx-5 cursor-pointer uppercase hover:text-indigo-200" href={"/about"}>
                        About
                    </Link>
                    <Link className="mx-5 cursor-pointer uppercase hover:text-indigo-200" href={"/blog"}>
                        Blog
                    </Link>
                    <Link className="mx-5 cursor-pointer uppercase hover:text-indigo-200" href={"/"}>
                        Contact
                    </Link>
                </nav>
            </div>
        </header>
    );
}

export default Header;