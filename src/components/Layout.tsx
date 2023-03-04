import Head from "next/head";
import Header from "./Header";

interface LayoutProps {
    title: string | undefined
    keywords: string | undefined
    description: string | undefined
    children: React.ReactNode
}

function Layout({ title = 'Welcome to blog', keywords = "development, coding, programing", description = "My blog is now developped", children }: LayoutProps) {
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