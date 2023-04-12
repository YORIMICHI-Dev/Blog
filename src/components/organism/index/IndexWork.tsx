import Image from "next/image";
import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faWandMagicSparkles } from "@fortawesome/free-solid-svg-icons";

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
            <div className="grid gap-4 px-4 md:grid-cols-2">
                {/* Image 1 */}
                <Link href={"work/#myBlog"} className="relative group rounded-lg shadow-lg object-fit overflow-hidden col-start-2 col-span-1 ">
                    <Image src={workImg1} alt="" className="duration-500  group-hover:scale-110"/>
                    <div className="absolute bottom-0 left-0 right-0 p-2 px-4 text-white  bg-mainBrawn opacity-0
                                    group-hover:opacity-100 duration-500  bg-opacity-80">
                        <div className="flex items-center justify-between w-full">
                            <div className="font-normal space-y-1">
                                <p className="text-sm">My Blog Site</p>
                                <p className="text-xs">Skill: Nextjs, TypeScript, Tailwind, AWS</p>
                            </div>
                            <FontAwesomeIcon icon={faWandMagicSparkles} className="w-5"/>
                        </div>
                    </div>                  
                </Link>
            </div>
        </section>
    );
}

export default IndexWork;