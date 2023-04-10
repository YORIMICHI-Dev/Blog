import fs from "fs"
import path from "path";
import matter from "gray-matter";

import Link from "next/link";
import Image from "next/image";
import { marked } from "marked";

import LayoutWithSidebar from "@/components/template/LayoutWithSidebar";
import CategoryLabel from "@/components/molecules/CategoryLabel";
import H1 from "@/components/atoms/H1";

interface PathProps {
    params: {
        slug: string
    }
}

interface PostProps {
    frontmatter: {[key: string] : string}
    content: string
    slug: string
}

function PostPage(props: PostProps) {
    const {frontmatter, content, slug} = props

    return (
        <LayoutWithSidebar title={frontmatter.title}>
            <Link href={`/blog`}>Go Back</Link>
            <div className="w-full lg:px-10 py-3 space-y-2 bg-white rounded-lg shadow-xl">
                <div className="flex justify-between mt-4 flex-col mx-auto items-baseline md:flex-row md:mb-0 space-y-5">
                    <H1>{frontmatter.title}</H1>
                    <CategoryLabel>{frontmatter.category}</CategoryLabel>
                </div>
                <div>
                    {frontmatter.date}
                </div>
                <div>
                    <Image src={frontmatter.cover_image} width={1800} height={600} alt='' className='rounded-3xl p-3' />                    
                </div>

                <div className="flex justify-between items-center bg-gray-100 p-2 my-8">
                    <div className="flex items-center">
                        <Image src={frontmatter.author_image} width={40} height={40} alt="" className="mx-4 w-10 object-cover rounded-full hidden sm:block" />
                        <h4>{frontmatter.author}</h4>
                    </div>
                </div>
                <div className="blog-text mt-2 p-6">
                    <div dangerouslySetInnerHTML={{__html: marked(content)}}></div>
                </div>
            </div>
        </LayoutWithSidebar>
    );
}

export const getStaticPaths = async () => {
    const files = fs.readdirSync(path.join('src/posts'))
    const paths = files.map((file) => {
        return {params: {slug: file.replace(".md", "")}}
    })

    return {
        paths,
        fallback: false
    }
}

export const getStaticProps = async(paths: PathProps) => {
    const { params: {slug} } = paths
    const markdownWithMeta = fs.readFileSync(path.join("src/posts/" + slug + ".md"), 'utf-8')
    const { data: frontmatter, content } = matter(markdownWithMeta)
    return {
        props: {
            frontmatter,
            content,
            slug
        }
    }
}

export default PostPage;