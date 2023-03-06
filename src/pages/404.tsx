import Link from "next/link";
import Image from "next/image";
import Layout from "@/components/Layout";

import images from "public/images/logo.png"

function NotFoundPage() {
    return (
        <Layout title='Page Not Found'>
            <div className="flex flex-col items-center mt-20">
                <Image 
                    src={images}
                    width={300}
                    alt="No Image"
                    className="bg-white rounded-2xl"
                />
                <h1 className="text-6xl my-5">Whoops!</h1>
                <h2 className="text-4xl text-gray-400 mb-5">This page does not exist</h2>
            </div>
        </Layout>
    );
}

export default NotFoundPage;