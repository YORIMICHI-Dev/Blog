import React, { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { IconDefinition, faCode, faGlobe, faTools } from "@fortawesome/free-solid-svg-icons";
import { Post } from "@/utils/post";


interface Tab {
    label: string;
    icon: IconDefinition;
    panel: string
    paragraph: string[];
    post: Post
}
  
interface TabBarProps {
    tabs: Tab[];
    activeTab: number;
    onTabChange: (index: number) => void;
}


const TabBar = ({ tabs, activeTab, onTabChange }: TabBarProps) => {
    return (
      <div className="flex items-center justify-center space-x-12">
        {tabs.map((tab, index) => (
          <div
            key={index} 
            className={`flex flex-row p-4 space-x-2 text-xl cursor-pointer duration-300 hover:text-secondaryGreen 
                       ${activeTab === index ? "font-semibold border-b-2 border-softGreen" : "text-gray-400"} transition-colors`}
            onClick={() => onTabChange(index)}>
            <FontAwesomeIcon icon={tab.icon} className="w-4" />
            <span>{tab.label}</span>
          </div>
        ))}
      </div>
    );
  };


interface Props {
  posts: {
  codePost: Post,
  webPost: Post,
  toolPost: Post,
}}


const Tab = ({posts}: Props) => {
    const [activeTab, setActiveTab] = useState(0);
    const { codePost, webPost, toolPost } = posts

    // タブ内容
    useEffect(() => {

      
    })
    const tabs: Tab[] = [
      {
          label: "Code",
          icon: faCode,
          panel: "Technique of Programming",
          paragraph: [
            "プログラミングで活用できそうな技術をまとめています",
            "Python, TypeScriptなど"
          ],
          post:codePost,
      },
      {
          label: "Web App",
          icon: faGlobe,
          panel: "Knowledge of Web Application",
          paragraph: [
            "Web系の技術で忘れないようにメモしています",
            "Nextjs, AWSなど"
          ],
          post:webPost,
      },
      {
          label: "Tools",
          icon: faTools,
          panel: "Reference of Technology",
          paragraph: [
            "シェルコマンドや参考になった技術をまとめています",
            "Ubuntu, VSCodeなど"
          ],
          post:toolPost,
      }
    ]
  
    return (
      <div className="space-y-4">
        <TabBar tabs={tabs} activeTab={activeTab} onTabChange={setActiveTab} />
          {tabs.map((tab, index) => {
            return (
            <div key={index} className={`${ activeTab === index ? "block" : "hidden" }`}>
                <div key={tab.label} className="flex flex-col py-5 md:flex-row md:space-x-7">
                    {/* Panel Image */}
                    <div className="flex justify-center overflow-hidden md:w-1/2 rounded-lg ">
                      <Link href={`/blog/category/${tab.post.frontmatter.category.toLowerCase()}`} className="relative group flex overflow-hidden rounded-lg">
                          <Image src={tab.post.frontmatter.cover_image} width={600} height={450} alt="" 
                                className="object-cover shadow-lg rounded-lg duration-300 group-hover:scale-110"/> 
                        <div className="absolute bottom-0 left-0 right-0 p-2 px-4 text-white  bg-mainBrawn opacity-0
                                        group-hover:opacity-100 duration-500  bg-opacity-80">
                          <div className="flex items-center justify-between w-full">
                              <div className="font-normal space-y-1">
                                  <p className="text-sm">My Blog Site</p>
                                  <p className="text-xs">Skill: Nextjs, TypeScript, Tailwind, AWS</p>
                              </div>
                              {/* <FontAwesomeIcon icon={faWandMagicSparkles} className="w-5"/> */}
                          </div>
                        </div> 
                      </Link>
                     </div> 

                    {/* Panel Content */}
                    <div className="flex flex-col justify-center space-y-8 md:w-1/2">
                        <h3 className="mt-4 text-3xl font-semibold text-center md:mt-0 md:text-left">
                            {tab.panel}
                        </h3>
                        {tab.paragraph.map((p, index) => {
                          return (
                            <p key={index} className="max-w-md text-center text-grayishBlue md:text-left">{p}</p>
                          )
                        })}
                        <div className="mx-auto md:mx-0">
                            <Link href={`/blog/category/${tab.post.frontmatter.category.toLowerCase()}`} className="px-6 py-3 mx-auto mt-4 font-semibold text-white border-2 
                                                    border-white rounded-lg md:inline-flex bg-secondBrawn duration-300 hover:bg-white hover:text-secondBrawn
                                                    hover:border-secondBrawn hover:border-2">
                                MoreInfo
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        )})}
      </div>
    );
  };
export default Tab;

