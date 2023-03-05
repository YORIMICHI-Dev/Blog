import Head from "next/head";
import Header from "./Header";
import { ReactNode } from "react";

interface LayoutProps {
    title: string
    keywords: string
    description: string
    children: ReactNode
}

const DEFAULT_TITLE = 'Welcome to blog'
const DEFAULT_KEYWORDS = "development, coding, programing"
const DEFAULT_DESCRIPTION = "My blog is now developped"

function Layout({ title = DEFAULT_TITLE, keywords = DEFAULT_KEYWORDS, description = DEFAULT_DESCRIPTION, children }: LayoutProps) {
    return (
        <div>
            <Head>
                <title>{title}</title>
                <meta name="keywords" content={keywords} />
                <meta name="description" content={description} />
                <link rel="icon" href="/favicon.ico" />
            </Head>

            <Header />

            <main className="container mx-auto my-7">{children}</main>
        </div>
    );
}

export default Layout;