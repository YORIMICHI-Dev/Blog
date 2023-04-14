import fs from "fs"
import path from "path";
import matter from "gray-matter";

import Image from "next/image";
import { MDXRemote } from 'next-mdx-remote';
import { serialize } from 'next-mdx-remote/serialize';
import LayoutWithSidebar from "@/components/template/LayoutWithSidebar";
import CategoryLabel from "@/components/molecules/CategoryLabel";
import Breadcrumb from "@/components/molecules/Breadcrumb";
import H1 from "@/components/atoms/blog_components/H1";


interface PathProps {
    params: {
        slug: string
    }
}


interface PostProps {
    frontmatter: {[key: string] : string}
    mdxSource: any
}


function PostPage(props: PostProps) {
    const {frontmatter, mdxSource} = props

    return (
        <LayoutWithSidebar title={frontmatter.title}>
            <div className="w-full lg:px-10 py-3 space-y-2 bg-white rounded-lg shadow-xl">
                <Breadcrumb category={frontmatter.category}/>
                <div className="flex justify-between flex-col mx-auto items-baseline md:flex-row md:mb-0 space-y-5">
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
                <div className="">
                    <MDXRemote {...mdxSource} />
                </div>
            </div>
        </LayoutWithSidebar>
    );
}


export const getStaticPaths = async () => {
    const files = fs.readdirSync(path.join('src/posts'))
    const paths = files.map((file) => {
        return {params: {slug: file.replace(".mdx", "")}}
    })

    return {
        paths,
        fallback: false
    }
}


export const getStaticProps = async(paths: PathProps) => {
    const { params: {slug} } = paths
    const markdownWithMeta = fs.readFileSync(path.join("src/posts/" + slug + ".mdx"), 'utf-8')
    const { data, content } = matter(markdownWithMeta)

    const mdxSource = await serialize(content, { scope: data });

    const {scope} = mdxSource
    return {
        props: {
            frontmatter: scope,
            mdxSource,
            slug
        }
    }
}


export default PostPage;