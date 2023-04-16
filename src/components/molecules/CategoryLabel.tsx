import Link from "next/link";
import { ReactNode } from "react";
import { CATEGORIES_COLOR } from "@/config";


interface Props {
    children: ReactNode
}


export default function CategoryLabel({children}: Props) {
    const backColor = CATEGORIES_COLOR[children as string]

    return (
        <div className={`px-2 py-1 ${backColor} text-white font-bold rounded-full duration-300 hover:scale-110 hover:opacity-95`}>
            <Link href={`/blog/category/${(children as string).toLowerCase()}`}>{children}</Link>
        </div>
    )
}
