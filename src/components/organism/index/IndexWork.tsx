import { faWandMagicSparkles } from "@fortawesome/free-solid-svg-icons";

import LinkPanel from "@/components/molecules/LinkPanel";
import workImg1 from "public/images/work1.png"


const works = {
    title: "My Blog Site!",
    icon: faWandMagicSparkles,
}

const IndexWork = () => {
    return (
        <section id="work">
            {/* Title */}
            <div className="flex flex-col items-center justify-center m-10 px-6">
                <h2 className="mb-6 text-4xl font-semibold">My Work</h2>
                <p className="max-w-md text-center text-grayishBlue">
                    作成したサイトをアップロードしています< br/>
                    AWSでデプロイしています<br />
                </p>
            </div>
            {/* Grid */}
            <div className="grid gap-4 px-4 md:grid-cols-3">
                {/* Image 1 */}
                <LinkPanel href={"work/#myBlog"} 
                           imgSrc={workImg1} 
                           icon={faWandMagicSparkles} 
                           upperText={"My Blog Site"} 
                           lowerText={"Skill: Nextjs, TypeScript, Tailwind, AWS"} />
            </div>
        </section>
    );
}

export default IndexWork;