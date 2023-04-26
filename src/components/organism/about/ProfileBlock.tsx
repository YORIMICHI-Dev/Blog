import CloudinaryImage from "@/components/molecules/CloudinaryImage";

import img1 from "public/images/about1.jpg"
import img2 from "public/images/about2.jpg"

const ProfileBlock = () => {
    return (
        <div className="mx-auto max-w-screen-xl px-4 sm:px-2 md:px-8 space-y-12">
            <div className="flex flex-col xl:items-center xl:flex-row xl:space-x-8">
                <div className="overflow-hidden rounded-lg mx-auto xl:w-2/5 shadow-lg">
                    <CloudinaryImage publicId="/blog/pages/about1_d6upjk" width={600} height={600} alt="profile" className="object-full"/>
                </div>

                <div className="space-y-5 py-4 xl:w-3/5">
                    <div className="space-y-2 p-2">
                        <p className="text-center font-bold text-mainBrawn md:text-left">Who I am</p>
                        <h2 className="mb-4  text-2xl font-bold text-black sm:text-2xl md:text-left">はじめまして。YORIMICHIです。</h2>

                        <p className="mb-6 text-grayishBlue md:text-lg leading-relaxed">
                        YORIMICHIです。東京のIT会社で働いています。現在は結婚を機に中部地方からフルリモートです。<br />
                        小さい会社出身のため、SEとして要件定義から設計、実装、保守まで特にこだわりなく担当しています。 <br />
                        好きな言語（できる言語）はPythonです。Pythonしかほとんど書けません。<br />
                        名前の由来は飽き性から来ています。最近は機械学習エンジニアとして働いていますが、ずっと機械学習ばかりやっていると飽きるため、
                        Web系の技術ばかりに寄り道したりして頑張っています。
                        </p>
                    </div>

                    <div className="space-y-2 p-2">
                        <p className="text-center font-bold text-mainBrawn md:text-left">Experience</p>
                        <h2 className="mb-4 text-xl font-semibold text-black sm:text-2xl md:text-left">経験してきたこと</h2>                        

                        <p className="mb-6 text-grayishBlue md:text-lg leading-relaxed">
                        大学院からはじめての社会人のときは機械系だったため金属ばかり相手をしていました。その頃はGコードを少し勉強したくらいで、プログラムはC言語を少し見たことあるかくらいでした。<br />
                        社会人3年目から少しやりたいことを探してみようと会社を辞め、色々と外の世界（国内）をブラブラしていました。途中なぜか簿記を勉強したり国道1号線走破したりしました。<br />
                        ブラブラしている途中にプログラムスクールに通い、そのままIT系に転職しました。<br />
                        現在は落ち着いて家で仕事して、家で勉強する毎日です。
                        </p>
                    </div>
                </div>
            </div>

            <div className="flex flex-col-reverse xl:items-center xl:flex-row xl:space-x-6">
                <div className="space-y-5 py-4 xl:w-3/5">
                    <div className="space-y-2 p-2">
                        <p className="text-center font-bold text-mainBrawn md:text-left">My Blog</p>
                        <h1 className="mb-4 text-2xl font-bold text-black sm:text-2xl md:text-left">ブログについて</h1>                        

                        <p className="mb-6 text-grayishBlue md:text-lg leading-relaxed">
                            私のブログはほとんど業務中に調べたり・教えていただいたコードだったり、知識をまとめています。だいたい別プロジェクトに移ると前の技術を忘れてしまうため、
                            備忘録として始めました。<br />
                            昔から何か創作物を作ってみたいと考えていましたが、不器用であまり長続きしませんでした。そんな中、ITに転職してからプログラミングを覚えたきっかけで、
                            様々な方が技術ブログを作成しているのを見て私もやってみようと不定期ですがブログを作成しています。<br />
                            特に技術を選定しているわけではなくごちゃごちゃしていますが、誰かの役に立てれば幸いです。
                        </p>
                    </div>
                    
                    <div className="space-y-2 p-2">
                        <p className="text-center font-bold text-mainBrawn md:text-left">Future</p>
                        <h2 className="mb-4 text-xl font-semibold text-black sm:text-2xl md:text-left">これから</h2>                        

                        <p className="text-grayishBlue md:text-lg leading-relaxed">
                            Web系の技術を身につけることができたので、何か創作物を発信していければと思っています。<br />
                            ブログ作成を皮切りにNext jsとDjangoを使ったなにかアプリを作成したいです。
                        </p>
                    </div>
                </div>

                <div className="overflow-hidden rounded-lg mx-auto  xl:w-2/5 shadow-lg">
                    <CloudinaryImage publicId="/blog/pages/about2_kjotuv" width={600} height={600} alt="profile" className="object-full"/>
                </div>
            </div>
        </div>
    );
}

export default ProfileBlock;