import Link from "next/link"
import CloudinaryImage from "@/components/molecules/CloudinaryImage"


const contents = [
    {
        imgSrc: "/blog/pages/home_profile_php4ui",
        link: "/about/#profile",
        buttonText: "Go to Profile",
    },
    {
        imgSrc: "/blog/pages/home_skill_olw59o",
        link: "/about/#skill",
        buttonText: "Go to Skill",
    },
    {
        imgSrc: "/blog/pages/home_history_nmwhiz",
        link: "/about/#history",
        buttonText: "Go to History"
    },
]


const IndexAbout = () => {
    return (
        <section id="about">
            <div className="flex flex-col items-center justify-center md:m-10 px-6">
                <h2 className="mb-6 md:text-4xl text-3xl font-semibold">Profile and Skill</h2>
            </div>
            
            {/* content */}
            <div className="mx-auto px-4 md:px-8">
                <div className="grid grid-cols-1 gap-10 rounded-lg xl:grid-cols-3">
                    {contents.map((content, index) => {
                        return (
                            <div key={index} className="flex flex-col items-center justify-center space-y-4 lg:space-y-8 mx-auto rounded-lg p-6 shadow-md">     
                                <CloudinaryImage publicId={content.imgSrc} width={600} height={600} className="rounded-xl w-3/5 xl:w-auto" />
                                <div className="flex flex-col items-center space-y-6">
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