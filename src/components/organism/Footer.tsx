import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTwitter, faGithub } from "@fortawesome/free-brands-svg-icons";


const Footer = () => {

    return (
        <footer className="bg-mainBrawn sticky top-[100vh]">
            {/* Footer Flex Container */}
            <div className="flex flex-col">
                {/* Main Container */}
                <div className="container flex flex-col items-center justify-between mx-auto space-y-16 px-6 py-16 md:flex-row md:space-y-0">
                    <div className="container flex flex-col items-center justify-start mx-auto
                                    space-y-16 px-6 md:flex-row md:space-y-0 md:space-x-14 text-white">
                        <Link href="/blog" className="uppercase font-semibold">Blog</Link>
                        <Link href="/about" className="uppercase font-semibold">About</Link>
                        <Link href="/contact" className="uppercase font-semibold">Contact</Link>
                    </div>

                    {/* Social Container */}
                    <div className="flex space-x-10">
                        <Link href={process.env.NEXT_PUBLIC_GITHUB_URL}>
                            <FontAwesomeIcon icon={faGithub} className="transition duration-300 ease-in w-6 text-white font-semibold hover:scale-110" />
                        </Link>
                        <Link href={process.env.NEXT_PUBLIC_TWITTER_URL}>
                            <FontAwesomeIcon icon={faTwitter} className="transition duration-300 w-6 text-white font-semibold hover:scale-110" />
                        </Link>
                    </div>
                </div>

                {/* Copy right */}
                <div className="flex text-sm justify-center py-2 tracking-widest font-semibold text-white">
                    &copy; YORIMICHI.
                </div>
            </div>
        </footer>
    );
}

export default Footer;