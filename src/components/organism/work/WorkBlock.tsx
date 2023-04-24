import PageH2 from "../../atoms/PageH2";
import LinkPanelCloudinary from "@/components/molecules/LinkPanelCloudinary";

import { faWandMagicSparkles } from "@fortawesome/free-solid-svg-icons";


const Works = [
    {
        id: "myBlog",
        href: "/",
        imgSrc: "/blog/pages/work1_vbyiru",
        icon: faWandMagicSparkles,
        upperText: "MyBlogSite",
        lowerText: "Skill: Next.js, TypeScript, Tailwind, AWS",
        supplement1: "My Blog!",
        title1: "ブログサイト作成しました",
        description1: [
            "Next.js / TypeScriptを使って1からブログサイトを作成しました。YoutubeやUdemy、海外の有料のビデオを参考に約2カ月くらいかかりました。",
            "もともとWordPressでブログを作成していましたが、柔軟性が乏しく自分のスタイルに合わせるのが面倒になったため1から作りました。",
        ],
        supplement2: "Skill and Technology",
        title2: "Next.js / TypeScript / Tailwindの勉強になった",
        description2: [
            "1人で作成するためトレンドだったNext.js、TypeScript、Tailwindなど盛り込んで作りました。",
            "Next.jsはGetStaticProps / GetStaticPath以外はほぼReactで書いたのであまりテクニカルなことはできていません。",
            "TypeScriptの型注釈はChat-GPTに投げたりして身につけました。結構様になったと思います。",
        ],
    },

]


const WorkBlock = () => {
    return (
        <div className="mx-auto max-w-screen-xl px-4 sm:px-2 md:px-8 space-y-12 shadow-xl">
            <PageH2>Blog Site</PageH2>
            {Works.map((work) => {
                return (
                    <section key={work.id} id={work.id}>
                        <div className="flex flex-col xl:items-center xl:flex-row xl:space-x-8">
                            <div className="overflow-hidden rounded-lg mx-auto xl:w-2/5 shadow-lg">
                                <LinkPanelCloudinary href={work.href} 
                                                     imgSrc={work.imgSrc}
                                                     width={600}
                                                     height={600} 
                                                     icon={work.icon} 
                                                     upperText={work.upperText} 
                                                     lowerText={work.lowerText} />
                            </div>

                            <div className="space-y-5 py-4 xl:w-3/5">
                                <div>
                                    <p className="text-center font-bold text-mainBrawn md:text-left">{work.supplement1}</p>
                                    <h2 className="mb-2 text-2xl font-bold text-black sm:text-2xl md:mb-4 md:text-left">{work.title1}</h2>
                                    <div className="mb-6" >
                                        {work.description1.map((des, index) => {
                                            return (
                                                <p key={index} className="text-grayishBlue sm:text-lg">{des}</p>
                                            )
                                        })}
                                    </div>
                                </div>

                                <div>
                                    <p className="text-center font-bold text-mainBrawn md:text-left">{work.supplement2}</p>
                                    <h2 className="mb-2 text-xl font-semibold text-black sm:text-2xl md:mb-4 md:text-left">{work.title2}</h2>                        
                                    <div className="mb-6" >
                                        {work.description2.map((des, index) => {
                                            return (
                                                <p key={index} className="text-grayishBlue sm:text-lg">{des}</p>
                                            )
                                        })}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>                    
                )
            })}
        </div>
    );
}

export default WorkBlock;