import Link from "next/link";
import Image from "next/image";
import CategoryLabel from "./CategoryLabel";
import { Post } from "@/utils/post";

function PostComponent( { slug, frontmatter}: Post ) {

    return (
        <div className='group w-full px-10 py-6 bg-white rounded-lg shadow-md hover:shadow-xl mt-6 duration-300 hover:scale-105'>
            <Link href={`/blog/${slug}`}>
                <Image src={frontmatter.cover_image}
                    alt="No Image"
                    height={420}
                    width={600}
                    className="mb-4 rounded duration-300 group-hover:opacity-90" />            
            </Link>


            <div className="flex justify-between items-center">
                <span className="font-light text-grayishBlue">
                    {frontmatter.date}
                </span>
                <CategoryLabel>
                    {frontmatter.category}
                </CategoryLabel>
            </div>

            <div className="mt-2">
                <Link href={`/blog/${slug}`} className="text-2xl font-bold duration-300 hover:text-secondaryGreen">
                    {frontmatter.title}
                </Link>
                <p className="mt-2 text-grayishBlue">{frontmatter.excerpt}</p>
            </div>

            <div className="flex justify-between items-center mt-6">
                <Link href={`/blog/${slug}`} className='py-1 px-3 rounded-md bg-secondBrawn text-sm text-white duration-300 hover:-translate-y-1'>Read More</Link>
                <div className="flex items-center">
                    <Image src={frontmatter.author_image}
                           width={40}
                           height={40}
                           alt=""
                           className="mx-4 object-cover rounded-full hidden sm:block" />
                    <h3 className="text-gray-700 font-bold">{frontmatter.author}</h3>
                </div>
            </div>
        </div>
    );
}

export default PostComponent;