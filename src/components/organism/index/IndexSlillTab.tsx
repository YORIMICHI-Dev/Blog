import Link from "next/link";
import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { IconDefinition } from "@fortawesome/fontawesome-svg-core";
import LinkPanelCloudinary from "@/components/molecules/LinkPanelCloudinary";
import { PostMeta } from "@/utils/post";


interface TabElementProps {
    label: string;
    icon: IconDefinition;
    panel: string;
    parentCategory: string;
    paragraph: string[];
    post: PostMeta
}


interface TabBarProps {
    tabs: TabElementProps[];
    activeTab: number;
    onTabChange: (index: number) => void;
}


interface TabContentProps {
    tabs: TabElementProps[];
    activeTab: number;
}


interface TabProps {
    tabs: TabElementProps[];
}


const IndexSkillTab = ({ tabs }: TabProps) => {
    const [activeTab, setActiveTab] = useState(0);

    return (
        <>
            <div className="space-y-4">
                {/* TabBar */}
                <TabBar tabs={tabs} activeTab={activeTab} onTabChange={setActiveTab} />

                {/* TabContent */}
                <TabContent tabs={tabs} activeTab={activeTab}/>
            </div>
        </>
    );
  };

export default IndexSkillTab

const TabBar = ({ tabs, activeTab, onTabChange}: TabBarProps) => {
    return (
        <>
            {/* TabBar */}
            <div className="flex items-center justify-center md:space-x-12">
                {tabs.map((tab, index) => (
                <div
                    key={index} 
                    className={`flex flex-row p-4 space-x-2 md:text-xl text-base cursor-pointer duration-300 hover:text-secondaryGreen 
                            ${activeTab === index ? "font-semibold border-b-2 border-softGreen" : "text-gray-400"} transition-colors`}
                    onClick={() => onTabChange(index)}>
                    {tab.icon !== undefined && <FontAwesomeIcon icon={tab.icon} className="w-4" />}
                    <span>{tab.label}</span>
                </div>
                ))}
            </div>
        </>
    )
}


const TabContent = ({ tabs, activeTab }: TabContentProps) => {

    return (
        <>
            <div className="duration-300">
                {/* TabContent */}
                {tabs.map((tab, index) => {
                    return (
                        <div key={index} className={`${ activeTab === index ? "block" : "hidden" } transition-all ease-in-out duration-300`}>
                        <div key={tab.label} className="flex flex-col py-5 md:flex-row md:space-x-7">
                            {/* Panel Image */}
                            <div className="flex justify-center overflow-hidden md:w-1/2 rounded-lg ">
                            <LinkPanelCloudinary href={`/blog/category/${tab.post.category.toLowerCase()}`}
                                                imgSrc={tab.post.cover_image}
                                                width={600}
                                                height={400}
                                                icon={tab.icon}
                                                upperText={tab.panel}
                                                lowerText={tab.parentCategory} />
                            </div> 

                            {/* Panel Content */}
                            <div className="flex flex-col justify-center space-y-4 lg:space-y-8 md:w-1/2">
                                <h3 className="mt-4 text-3xl font-semibold text-center md:mt-0 md:text-left">
                                    {tab.panel}
                                </h3>
                                <div className="space-y-2">
                                {tab.paragraph.map((p, index) => {
                                    return (
                                    <p key={index} className="max-w-md text-center text-grayishBlue md:text-left">{p}</p>
                                    )
                                })}
                                </div>
                                <Link href={`/blog/category/${tab.post.category.toLowerCase()}`} className="px-6 py-3 mx-auto mt-4 font-semibold text-white border-2 
                                                        border-white rounded-lg md:inline-flex bg-secondBrawn duration-300 hover:bg-white hover:text-secondBrawn
                                                        hover:border-secondBrawn hover:border-2">
                                    MoreInfo
                                </Link>
                            </div>
                        </div>
                    </div>
                )
            })}
            </div>
        </>
    )
}



