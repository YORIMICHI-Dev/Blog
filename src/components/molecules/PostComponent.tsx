import Link from "next/link";
import Image from "next/image";
import CloudinaryImage from "./CloudinaryImage";
import CategoryLabel from "./CategoryLabel";
import { PostMeta } from "@/utils/post";

function PostComponent( { meta }: {meta: PostMeta} ) {

    return (
        <div className='flex flex-col justify-between px-10 py-6 space-y-4 bg-white rounded-lg shadow-xl mt-6'>
            <div className="space-y-2">
                <div className="group rounded-lg object-fit overflow-hidden mb-4">
                    <Link href={`/blog/${meta.slug}`} className="relative group rounded-lg shadow-lg object-fit overflow-hidden">
                        <CloudinaryImage publicId={meta.cover_image}
                            alt="No Image"
                            height={600}
                            width={800}
                            className="duration-300 group-hover:opacity-90 group-hover:scale-110" />
                    </Link>                
                </div>

                <div className="flex justify-between items-center">
                    <span className="font-light text-grayishBlue">
                        {meta.date}
                    </span>
                    <CategoryLabel>
                        {meta.category}
                    </CategoryLabel>
                </div>

                <div className="">
                    <p className="text-2xl font-bold ">{meta.title}</p>
                    <p className="mt-2 text-grayishBlue">{meta.excerpt}</p>
                </div>                
            </div>

            <div className="flex justify-between items-center mt-6">
                <Link href={`/blog/${meta.slug}`} className='py-1 px-3 rounded-md bg-secondBrawn text-sm text-white border-2 border-secondBrawn duration-300 
                                                           hover:text-secondBrawn hover:bg-white font-semibold'>Read More</Link>
                <div className="flex items-center space-x-2">
                    <Image src={meta.author_image}
                           width={40}
                           height={40}
                           alt=""
                           className="object-cover rounded-full hidden sm:block" />
                    <h3 className="text-veryDarkBlue font-bold">{meta.author}</h3>
                </div>
            </div>
        </div>
    );
}

export default PostComponent;