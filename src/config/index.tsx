import { FaPython, FaReact, FaUbuntu, FaCloud, FaDocker} from "react-icons/fa";
import { SiCodereview, SiTypescript } from "react-icons/si";
import { DiVisualstudio } from "react-icons/di";
import { TbBrandCpp } from "react-icons/tb";
import { ReactNode } from "react";


export const POST_PER_PAGE: number = 6


export const PARENT_CATEGORY = {
    "Code": ["Python", "TypeScript"],
    "WebApp": ["React-Next.js", "AWS"],
    "Tools": ["Ubuntu", "VSCode", "Docker"],
    "Column": ["Review",]
}


export const CATEGORIES: string[] = [
    "Python",
    "TypeScript",
    "React-Next.js",
    "C++",
    "Ubuntu",
    "AWS",
    "VSCode",
    "Docker",
    "Review",
]


interface CategoryColor {
    [key: string]: string
}


export const CATEGORIES_COLOR: CategoryColor = {
    "Python": "bg-python",
    "TypeScript": "bg-typescript",
    "React-Next.js": "bg-react",
    "C++": "bg-cpp",
    "Ubuntu": "bg-ubuntu",
    "AWS": "bg-aws",
    "VSCode": "bg-vscode",
    "Docker": "bg-docker",    
    "Review": "bg-review",
}


interface CategoryIcon {
    [key: string]: ReactNode
}


export const CATEGORIES_ICON: CategoryIcon = {
    "Python": <FaPython />,
    "TypeScript": <SiTypescript />,
    "React-Next.js": <FaReact />,
    "C++": <TbBrandCpp />,
    "Ubuntu": <FaUbuntu />,
    "VSCode": <DiVisualstudio />,
    "AWS": <FaCloud />,
    "Docker": <FaDocker />,
    "Review": <SiCodereview />,
}

