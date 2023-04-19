import Link from "next/link";
import { ReactNode } from "react";
import { CATEGORIES_COLOR, CATEGORIES_ICON } from "@/config";


interface Props {
    children: ReactNode
}


export default function CategoryLabel({children}: Props) {
    const backColor = CATEGORIES_COLOR[children as string]

    return (
        <div className={`px-2 py-1 ${backColor} rounded-full duration-300 hover:scale-105`}>
            <Link href={`/blog/category/${(children as string).toLowerCase()}`} className="flex flex-row  items-center space-x-1 text-white font-bold ">
                {CATEGORIES_ICON[children as string]}
                <span>{children}</span>
            </Link>
        </div>
    )
}
