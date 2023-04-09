import Link from "next/link";

interface CategoryListProps {
    categories: string[]
}


const CategoryList = ({categories}: CategoryListProps) => {
    return (
        <div className="w-full p-5 bg-white rounded-lg shadow-md mt-6 hidden md:block">
            <h3 className="text-xl bg-gray-800 text-white p-3 rounded">
                Blog Categories
            </h3>
            <ul className="divide-y divide-gray-800">
                {categories.map((category, index) => {
                    return (
                        <Link key={index} href={`/blog/category/${category.toLowerCase()}`}>
                            <li className="p-4 cursor-pointer hover:bg-gray-50">
                                {category}
                            </li>
                        </Link>
                    )
                })}
            </ul>
        </div>
    );
}

export default CategoryList;