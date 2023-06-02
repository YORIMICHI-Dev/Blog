import LinkPanelCloudinary from "@/components/molecules/LinkPanelCloudinary";
import { faWandMagicSparkles } from "@fortawesome/free-solid-svg-icons";
import H3 from "@/components/atoms/blog_components/H3";

const Works = [
        {
        id: "chatApp",
        href: "https://github.com/YORIMICHI-Dev/chat-app",
        imgSrc: "/blog/pages/work2_lqr3fz_vpetde",
        icon: faWandMagicSparkles,
        upperText: "Chat App",
        lowerText: "Skill: Next.js, TypeScript, Tailwind, FastAPI",
        supplement1: "Chat app!",
        title1: "OpenAPIを使用したチャットアプリの作成",
        description1: [
            "OpenAPIを使ってChatGPTのクローンアプリを作成しました。",
            "本家と同様に、入力内容に対してOpenAPIを経由してAIが応答できるようにしています。また、過去のチャットをsqliteに保存して振り返ることもできます",
        ],
        supplement2: "Skill and Technology",
        title2: "FastAPI, Nest.jsを使いフロントとバックをそれぞれ独立して構築",
        description2: [
            "フロントにはNext.js・Reactを使用して画面遷移やコンポーネントを構築しました。状態遷移にuseContextなど少しややこしいフックも使えるように試行錯誤しました。",
            "また、OpenAPIとやり取りするバックには前から使ってみたかったFastAPIを使用しています。最低限のコードでAPI通信が簡単にでき便利でした。アプリのロジックも普段使っているPythonに加えてPydanticやgunicornなど業務であまり使わないパッケージを使うことができ、楽しみながら作成できました。",
        ],
    },
    {
        id: "myBlog",
        href: "/",
        imgSrc: "/blog/pages/work1_ngiwkj",
        icon: faWandMagicSparkles,
        upperText: "My Blog Site",
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
            {Works.map((work, id) => {
                return (
                    <section key={work.id} id={work.id}>
                        <H3>{work.upperText}</H3>
                        <div className={`flex flex-col xl:items-center  ${id / 2 === 0 ? "xl:flex-row" : "xl:flex-row-reverse"}`}>
                            <div className="overflow-hidden rounded-lg mx-auto xl:w-2/5 shadow-lg">
                                <LinkPanelCloudinary href={work.href} 
                                                     imgSrc={work.imgSrc}
                                                     width={600}
                                                     height={600} 
                                                     icon={work.icon} 
                                                     upperText={work.upperText} 
                                                     lowerText={work.lowerText} />
                            </div>

                            <div className="space-y-5 px-8 xl:w-3/5">
                                <div className="space-y-2 p-2">
                                    <p className="text-center font-bold text-mainBrawn md:text-left">{work.supplement1}</p>
                                    <h2 className="mb-4 text-2xl font-bold text-black sm:text-2xl md:text-left">{work.title1}</h2>
                                    <div className="mb-6" >
                                        {work.description1.map((des, index) => {
                                            return (
                                                <p key={index} className="mb-2 text-grayishBlue md:text-lg leading-relaxed">{des}</p>
                                            )
                                        })}
                                    </div>
                                </div>

                                <div className="space-y-2 p-2">
                                    <p className="text-center font-bold text-mainBrawn md:text-left">{work.supplement2}</p>
                                    <h2 className="mb-4 text-xl font-semibold text-black sm:text-2xl md:text-left">{work.title2}</h2>                        
                                    <div className="mb-6" >
                                        {work.description2.map((des, index) => {
                                            return (
                                                <p key={index} className="mb-2 text-grayishBlue md:text-lg leading-relaxed">{des}</p>
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