import Link from "next/link";
import Image from "next/image";
import heroImage from "public/images/about1.jpg"

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleDown } from "@fortawesome/free-solid-svg-icons";

const IndexHero = () => {
    return (
        <section id="hero">
            <div className="container flex flex-col-reverse my-auto mx-auto p-6 lg:flex-row">
                {/* Content */}
                <div className="flex flex-col items-center justify-center space-y-6 lg:space-y-10 xl:px-20 lg:w-1/2">
                    <h1 className="mt-4 text-4xl font-semibold">YORIMICHI BLOG</h1>
                    <p className="max-w-md mx-auto text-lg text-center text-grayishBlue lg:text-2xl lg:text-left lg:mt-0 lg:mx-0">
                    Python・機械学習・Web系のブログ<br/>
                    色々発信していきたいです
                    </p>
                    {/* Button */}
                    <div className="flex flex-row space-x-6">
                        <Link href={"/blog"} className="flex flex-col items-center space-y-1 p-4 font-semibold duration-300 rounded-full shadow-md border-2 border-secondBrawn
                                                    md:text-xl bg-white text-secondBrawn hover:shadow-lg hover:-translate-y-2">
                            <span>Blog</span>
                            <FontAwesomeIcon icon={faAngleDown} className="h-3" />
                        </Link>
                        <Link href={"/about"} className="flex flex-col items-center p-4 space-y-1 font-semibold duration-300 rounded-full shadow-md border-2 border-secondBrawn
                                                    md:text-xl bg-white text-secondBrawn hover:shadow-lg hover:-translate-y-2">
                            <span>About</span>
                            <FontAwesomeIcon icon={faAngleDown} className="h-3" />
                        </Link>
                        <Link href={"/work"} className="flex flex-col items-center p-4 space-y-1 font-semibold duration-300 rounded-full shadow-md border-2 border-secondBrawn
                                                    md:text-xl bg-white text-secondBrawn hover:shadow-lg hover:-translate-y-2">
                            <span>Work</span>
                            <FontAwesomeIcon icon={faAngleDown} className="h-3" />
                        </Link>
                    </div>
                </div>

                {/* Image */}
                <div className="relative mx-auto lg:mx-0 lg:mb-0 lg:w-1/2">
                    <div className="bg-hero"></div>
                    <Image src={heroImage} alt="" className="relative z-10 lg:top-0 rounded-lg"/>
                </div>
            </div>
        </section>
    );
}

export default IndexHero;