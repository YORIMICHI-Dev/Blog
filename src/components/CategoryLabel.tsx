import Link from "next/link";
import { ReactNode } from "react";

interface ColorKeyProps{
    [key: string]: string
}

const COLOR_KEY: ColorKeyProps = {
    JavaScript: 'yellow',
    CSS: 'blue',
    Python: 'green',
    PHP: 'purple',
    Ruby: 'red',
} as const

const getColor = (children: keyof typeof COLOR_KEY): string => {
    switch(children) {
        case 'JavaScript': {return 'bg-yellow-400'}
        case 'CSS': {return 'bg-blue-400'}
        case 'Python': {return 'bg-green-400'}
        case 'PHP': {return 'bg-purple-400'}
        case 'Ruby': {return 'bg-red-400'}
        default: {return ''}
    }
}

interface Props {
    children: ReactNode
}

export default function CategoryLabel({children}: Props) {
    const backColor = getColor(children as string)
    return (
        <div className={`px-2 py-1 ${backColor} text-gray-900 font-bold rounded`}>
            <Link href={`/blog/category/${(children as string).toLowerCase()}`}>{children}</Link>
        </div>
    )
}
