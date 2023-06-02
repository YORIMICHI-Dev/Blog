import { faWandMagicSparkles } from "@fortawesome/free-solid-svg-icons";
import LinkPanelCloudinary from "@/components/molecules/LinkPanelCloudinary";

const works = [
    {
        title: "My Blog Site!",
        description: "Skill: Next.js, TypeScript, Tailwind, AWS",
        icon: faWandMagicSparkles,
        href: "work/#myBlog",
        imgSrc: "/blog/pages/work1_ngiwkj"
    },
    {
        title: "Chat App!",
        description: "Skill: Next.js, TypeScript, Tailwind, FastAPI",
        icon: faWandMagicSparkles,
        href: "work/#chatApp",
        imgSrc: "/blog/pages/work2_lqr3fz_vpetde"
    }
]

const IndexWork = () => {
    return (
        <section id="work">
            {/* Title */}
            <div className="flex items-center justify-center md:m-10 px-6">
                <h2 className="mb-6 md:text-4xl text-3xl font-semibold">My Work</h2>
            </div>
            {/* Grid */}
            <div className="grid md:grid-cols-2 gap-20">
                {works.map((work, id) => {
                    return (
                        <div key={id} className="flex justify-center overflow-hidden rounded-lg ">
                            <LinkPanelCloudinary
                                href={work.href} 
                                imgSrc={work.imgSrc}
                                width={400}
                                height={400}
                                icon={work.icon} 
                                upperText={work.title} 
                                lowerText={work.description} />
                        </div> 
                    )
                })}
            </div>
        </section>
    );
}

export default IndexWork;