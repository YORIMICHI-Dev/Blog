import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub, faTwitter } from "@fortawesome/free-brands-svg-icons";

const Footer = () => {
    return (
        <footer className="bg-secondBrawn mt-20">
            <div className="mx-auto w-full px-16 py-10">
                <div className="grid grid-cols-2 gap-12 md:grid-cols-4">
                    <div className="flex flex-col items-center justify-center text-xl gap-4">
                        <Link href={"/"} className="">YORIMICHI</Link>
                        <div className="flex flex-row space-x-4">
                            <Link href={process.env.NEXT_PUBLIC_GITHUB_URL}>
                                <FontAwesomeIcon icon={faGithub} className="transition duration-300 w-6 text-md font-semibold hover:scale-110" />
                            </Link>
                            <Link href={process.env.NEXT_PUBLIC_TWITTER_URL}>
                                <FontAwesomeIcon icon={faTwitter} className="transition duration-300 w-6 text-md font-semibold hover:scale-110" />
                            </Link>                            
                        </div>

                    </div>

                    <nav className="flex flex-col items-center space-y-4">
                        <Link href={"/blog"} className="text-lg font-bold uppercase tracking-widest duration-300 hover:scale-110">Blog</Link>
                        <Link href={"/blog/category/python"} className="text-md transition duration-300 hover:translate-x-3 ">Python</Link>
                        <Link href={"/blog/category/typescript"} className="text-md transition duration-300 hover:translate-x-3 ">TypeScript</Link>
                        <Link href={"/blog/category/review"} className="text-md transition duration-300 hover:translate-x-3 ">Review</Link>
                    </nav>

                    <nav className="flex flex-col items-center space-y-4">
                        <Link href={"/about"} className="text-lg font-bold uppercase tracking-widest duration-300 hover:scale-110">About</Link>
                        <Link href={"/about/#profile"} className="text-md transition duration-300 hover:translate-x-3 ">Profile</Link>
                        <Link href={"/about/#skill"} className="text-md transition duration-300 hover:translate-x-3 ">Skill</Link>
                        <Link href={"/about/#history"} className="text-md transition duration-300 hover:translate-x-3 ">History</Link>
                    </nav>

                    <nav className="flex flex-col items-center space-y-4">
                        <Link href={"/work"} className="text-lg font-bold uppercase tracking-widest duration-300 hover:scale-110">Work</Link>
                        <Link href={"/work/#my_blog"} className="text-md transition duration-300 hover:translate-x-3 ">My Blog</Link>
                    </nav>
                </div>
            </div>
            <div className="pb-6 mt-8 text-center text-sm text-md">© 2023 - YORIMICHI. All rights reserved.</div>
        </footer>
    );
}

export default Footer;