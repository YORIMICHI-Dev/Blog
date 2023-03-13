import Link from "next/link";
import Image from "next/image";
import Layout from "@/components/template/Layout";

import notFoundImg from "/public/images/404.png"

function NotFoundPage() {
    return (
        <Layout title='Page Not Found'>
            <section id="404">
                <div className="container flex flex-col-reverse mx-auto items-center lg:flex-row lg:mb-0 p-12 space-x-5">
                    {/* Content */}
                    <div className="flex flex-col space-y-10 lg:mt-16 lg:w-1/2">
                        {/* Paragraph */}
                        <h1 className="text-3xl font-semibold text-center lg:text-5xl lg:text-left"> 404: Page is not found...</h1>
                        <p className="max-w-md mx-auto text-lg text-center text-grayishBlue lg:text-2xl lg:text-left lg:mt-0 lg:mx-0">ページが見つかりませんでした...</p>
                        {/* Button */}
                        <div className="flex items-center justify-center w-full space-x-4 lg:justify-start">
                            <Link href={"#"} className="p-4 font-semibold text-white bg-softGreen rounded shadow-md border-2 border-softGreen
                                                            md:text-base hover:bg-white hover:text-softGreen uppercase">Go back to Home</Link>
                            <Link href={"#"} className="p-4 font-semibold text-white bg-secondBrawn rounded shadow-md border-2 border-secondBrawn
                                                        md:text-base hover:bg-white hover:text-secondBrawn uppercase">Go to work</Link>    
                        </div>
                    </div>
                    {/* Image */}
                    <div className="mx-auto lg:mx-0 lg:mb-0 lg:w-1/2">
                        <Image src={notFoundImg} alt="404" className="lg:top-24 xl:top-0"/>                        
                    </div>

                </div>
            </section>
        </Layout>
    );
}

export default NotFoundPage;