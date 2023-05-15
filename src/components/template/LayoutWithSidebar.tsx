import Head from "next/head";
import Header from "../organism/Header";
import MainWithSidebar from "../organism/MainWithSidebar";
import Footer from "../organism/Footer";
import { ReactNode, useEffect } from "react";


interface LayoutProps {
    title: string
    keywords?: string
    description?: string
    type?: string
    url?: string
    image_url?: string
    children: ReactNode
}


const DEFAULT_KEYWORDS = "development, coding, programming"
const DEFAULT_DESCRIPTION = "My blog is now developed"
const DEFAULT_TYPE = "website"

function LayoutWithSidebar ({ title, keywords = DEFAULT_KEYWORDS, description = DEFAULT_DESCRIPTION, type = DEFAULT_TYPE, children }: LayoutProps) {
    
    title += " | YORIMICHI"
    
    return (
        <div>
            <Head>
                <title>{title}</title>
                <meta charSet="utf-8" />
                <meta name="viewport" content="width=device-width,initial-scale=1.0 ,minimum-scale=1.0" />
                <meta name="keywords" content={keywords} />
                <meta name="description" content={description} />

                <meta property="og:title" content={title} />
                <meta property="og:type" content={type} />
                <meta property="og:url" content="ページのURL(絶対パス)" />
                <meta property="og:image" content="画像のURL(絶対パス)" />
                <link rel="icon" href="images/favicon.ico" />
            </Head>

            <div className="flex flex-col h-screen justify-between min-w-full">
                <Header />

                <MainWithSidebar >{children}</MainWithSidebar>

                <Footer />         
            </div>

        </div>
    );
}

export default LayoutWithSidebar;

