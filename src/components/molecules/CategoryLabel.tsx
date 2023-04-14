import Link from "next/link";
import { ReactNode } from "react";


const getColor = (children: string): string => {
    switch(children) {
        case 'JavaScript': {return 'bg-javascript'}
        case 'TypeScript': {return 'bg-typescript'}
        case 'CSS': {return 'bg-css'}
        case 'Python': {return 'bg-python'}
        case 'MachineLearning': {return 'bg-machinelearning'}
        case 'C++': {return 'bg-cpp'}
        default: {return ''}
    }
}

interface Props {
    children: ReactNode
}

export default function CategoryLabel({children}: Props) {
    const backColor = getColor(children as string)

    return (
        <div className={`px-2 py-1 ${backColor} text-white font-bold rounded-full duration-300 hover:scale-110 hover:opacity-95`}>
            <Link href={`/blog/category/${(children as string).toLowerCase()}`}>{children}</Link>
        </div>
    )
}
