import Image from "next/image"
import Link from "next/link"
import profileImg from "public/images/home_profile.png"
import skillImg from "public/images/home_skill.png"
import historyImg from "public/images/home_history.png"


const contents = [
    {
        imgSrc: profileImg,
        context: "YORIMICHIの簡単なプロフィールをまとめています",
        link: "/about/#profile",
        buttonText: "Go to Profile",
    },
    {
        imgSrc: skillImg,
        context: "業務や趣味で身につけたスキルをまとめています",
        link: "/about/#skill",
        buttonText: "Go to Skill",
    },
    {
        imgSrc: historyImg,
        context: "学生から現在までの経歴をまとめています",
        link: "/about/#history",
        buttonText: "Go to History"
    },
]


const IndexAbout = () => {
    return (
        <section id="about">
            <div className="flex flex-col items-center justify-center m-10 px-6">
                <h2 className="mb-6 text-4xl font-semibold">Profile and Skill</h2>
                <p className="max-w-md text-center text-grayishBlue">
                    プロフィールをまとめています< br/>
                    技術スタックはPython・機械学習がメインです<br />
                    最近はWeb系の保守もやっています
                </p>
            </div>
            
            {/* content */}
            <div className="mx-auto px-4 md:px-8">
                <div className="grid grid-cols-1 gap-10 rounded-lg xl:grid-cols-3">
                    {contents.map((content, index) => {
                        return (
                            <div key={index} className="flex flex-col items-center justify-center space-y-4 lg:space-y-8 mx-auto rounded-lg p-6 shadow-md">     
                                <Image src={content.imgSrc} alt="" className="rounded-xl w-3/5 xl:w-auto"/>
                                <div className="flex flex-col items-center space-y-6">
                                    <p className=" text-grayishBlue">{content.context}</p>
                                    <Link href={content.link} className="px-3 py-1 font-semibold duration-300 rounded-md shadow-ld border-2 border-secondaryGreen
                                                                            text-lg bg-secondaryGreen hover:bg-white text-white hover:text-secondaryGreen">
                                        {content.buttonText}
                                    </Link>       
                                </div>
                            </div>                            
                        )
                    })}
                </div>
            </div>
        </section>
    );
}

export default IndexAbout;