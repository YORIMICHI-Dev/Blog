import { FaPython, FaReact, FaUbuntu,} from "react-icons/fa";
import { SiCodereview, SiTypescript } from "react-icons/si";
import { DiVisualstudio } from "react-icons/di";
import { TbBrandCpp } from "react-icons/tb";
import { AiTwotoneTool } from "react-icons/ai";
import { ReactNode } from "react";


export const POST_PER_PAGE: number = 6


export const PARENT_CATEGORY = {
    "Code": ["Python", "TypeScript", "MachineLearning"],
    "WebApp": ["React/Nextjs", "Django", "AWS"],
    "Tools": ["Ubuntu", "VSCode"],
    "Column": ["Review",]
}


export const CATEGORIES: string[] = [
    "Python",
    "TypeScript",
    "React/Nextjs",
    "MachineLearning",
    "Ubuntu",
    "VSCode",
    "Review",
]


interface CategoryIcon {
    [key: string]: ReactNode
}


export const CATEGORIES_ICON: CategoryIcon = {
    "Python": <FaPython />,
    "TypeScript": <SiTypescript />,
    "React/Nextjs": <FaReact />,
    "C++": <TbBrandCpp />,
    "MachineLearning": <AiTwotoneTool />,
    "Ubuntu": <FaUbuntu />,
    "VSCode": <DiVisualstudio />,
    "Review": <SiCodereview />
}

