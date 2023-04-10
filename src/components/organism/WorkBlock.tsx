import Image from "next/image";
import Link from "next/link";
import PageH2 from "../atoms/PageH2";

import img1 from "public/images/work1.png"


const WorkBlock = () => {
    return (
        <div className="mx-auto max-w-screen-xl px-4 sm:px-2 md:px-8 space-y-12 shadow-xl">
            <PageH2>Blog Site</PageH2>
            <div className="flex flex-col xl:items-center xl:flex-row xl:space-x-8">
                <div className="overflow-hidden rounded-lg mx-auto xl:w-2/5 shadow-lg">
                    <Link href={"/"}>
                        <Image src={img1} alt="profile" className="object-full duration-300 overflow-hidden hover:scale-105"/>                    
                    </Link>

                </div>

                <div className="space-y-5 py-4 xl:w-3/5">
                    <div>
                        <p className="text-center font-bold text-mainBrawn md:text-left">My Blog!</p>
                        <h2 className="mb-2 text-2xl font-bold text-black sm:text-2xl md:mb-4 md:text-left">ブログサイト作成しました。</h2>

                        <p className="mb-6 text-grayishBlue sm:text-lg">
                        Nextjs / TypeScriptを使って1からブログサイトを作成しました。YoutubeやUdemy、海外の有料のビデオを参考に約2カ月くらいかかりました。<br />
                        もともとWordPressでブログを作成していましたが、柔軟性が乏しく自分のスタイルに合わせるのが面倒になったため0から作りました。<br />
                        結構様になったと思います。
                        </p>
                    </div>

                    <div>
                        <p className="text-center font-bold text-mainBrawn md:text-left">Skill and Technology</p>
                        <h2 className="mb-2 text-xl font-semibold text-black sm:text-2xl md:mb-4 md:text-left">Nextjs / TypeScript / Tailwindの勉強になった</h2>                        

                        <p className="mb-6 text-grayishBlue sm:text-lg ">
                        1人で作成するため、最近のトピックであるNextjs、TypeScript、Tailwindなど盛り込んで作りました。
                        NextjsはGetStaticProps / GetStaticPath以外はほぼReactで書いたのであまりテクニカルなことはできていません。
                        TypeScriptの型注釈はChat-GPTに投げたりして身につけていきました。<br />
                        デプロイはAWSで行いました。フロントエンドについて初歩的なことは学べたと思います。
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default WorkBlock;