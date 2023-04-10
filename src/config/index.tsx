import { FaPython, FaReact, FaUbuntu } from "react-icons/fa";
import { SiCodereview, SiTypescript } from "react-icons/si";
import { DiVisualstudio } from "react-icons/di";
import { AiTwotoneTool } from "react-icons/ai";
import { ReactNode } from "react";


export const POST_PER_PAGE: number = 6


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
    "MachineLearning": <AiTwotoneTool />,
    "Ubuntu": <FaUbuntu />,
    "VSCode": <DiVisualstudio />,
    "Review": <SiCodereview />
}
