import Link from "next/link";
import { CATEGORIES, CATEGORIES_ICON } from "@/config";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faList12 } from "@fortawesome/free-solid-svg-icons";


const CategoryList = () => {
    return (
        <div className="w-full bg-white rounded-lg shadow-md mt-10">
            <div className="flex font-bold items-center justify-center space-x-3 text-xl bg-secondBrawn text-white p-3 rounded">
                <FontAwesomeIcon icon={faList12} className="text-white w-6" />
                <h3>Blog Categories</h3>
            </div>

            <div className="p-5">
                {CATEGORIES.map((category, index) => {
                    return (
                        <Link key={index} href={`/blog/category/${category.toLowerCase()}`}>
                            <div className="flex items-center text-lg py-4 pl-10 space-x-3 cursor-pointer duration-300 hover:translate-x-3 hover:text-secondaryGreen">
                                {CATEGORIES_ICON[category]}
                                <div>{category}</div>
                            </div>
                        </Link>
                    )
                })}                
            </div>
        </div>
    );
}

export default CategoryList;