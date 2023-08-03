import Link from "next/link"
import { IconDefinition, faCode, faGlobe, faTools } from "@fortawesome/free-solid-svg-icons";
import CloudinaryImage from "@/components/molecules/CloudinaryImage"
import LinkPanelCloudinary from "@/components/molecules/LinkPanelCloudinary"

const contents = [
    {
        imgSrc: "/blog/pages/home_profile_gviclm",
        link: "/about/#profile",
        icon: faTools,
        upperText: "My Profile",
        lowerText: "This page shows Yorimichi profile.",
    },
    {
        imgSrc: "/blog/pages/home_skill_cdbgj9",
        link: "/about/#skill",
        icon: faTools,
        upperText: "Go to Skill",
        lowerText: "My skill stack, for example, Programming, Web and so on",
    },
    {
        imgSrc: "/blog/pages/home_history_aiqio7",
        link: "/about/#history",
        icon: faTools,
        upperText: "Check History",
        lowerText: "Belonged to University and Organization.",
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
                <div className="grid grid-cols-1 gap-4 rounded-lg md:grid-cols-3">
                    {contents.map((content, index) => {
                        return (
                            <div key={index}>
                                <LinkPanelCloudinary 
                                    href={content.link}
                                    imgSrc={content.imgSrc}
                                    width={600}
                                    height={400}
                                    icon={content.icon}
                                    upperText={content.upperText}
                                    lowerText={content.lowerText}
                                    />
                            </div>                 
                        )
                    })}
                </div>
            </div>
        </section>
    );
}

export default IndexAbout;