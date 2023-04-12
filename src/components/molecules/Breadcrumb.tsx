import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHome, faList12, faAngleRight } from "@fortawesome/free-solid-svg-icons";

import { CATEGORIES_ICON } from "@/config";

interface Props {
    category: string
}


const Breadcrumb = ({category}: Props) => {
    return (
        <nav className="flex" aria-label="Breadcrumb">
        <ol className="inline-flex items-center space-x-1 md:space-x-3  text-sm font-medium text-grayishBlue ">
            <li className="inline-flex items-center">
                <Link href="/" className="inline-flex items-center space-x-1 hover:text-secondBrawn duration-500 hover:-translate-y-1">
                    <FontAwesomeIcon icon={faHome} className="w-3" />
                    <span>Home</span>
                </Link>
            </li>
            
            <li>
                <div className="flex items-center ">
                    <FontAwesomeIcon icon={faAngleRight} className="w-2" />
                </div>
            </li>

            <li className="inline-flex items-center">
            <Link href="/blog" className="inline-flex items-center space-x-1 hover:text-secondBrawn duration-500 hover:-translate-y-1">
                    <FontAwesomeIcon icon={faList12} className="w-3" />
                    <span>Blog</span>
                </Link>
            </li>

            <li>
                <div className="flex items-center text-sm font-medium">
                    <FontAwesomeIcon icon={faAngleRight} className="w-2" />
                </div>
            </li>

            <li className="inline-flex items-center hover:text-secondBrawn duration-500 hover:-translate-y-1">
                <Link href={`/blog/category/${(category).toLowerCase()}`} className="inline-flex items-center space-x-1 hover:text-secondBrawn ">
                    {CATEGORIES_ICON[category]}
                    <span>{category}</span>
                </Link>
            </li>
        </ol>
        </nav>
    );
}

export default Breadcrumb;