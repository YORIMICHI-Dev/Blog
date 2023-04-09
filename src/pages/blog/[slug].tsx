import fs from "fs"
import path from "path";
import matter from "gray-matter";

import Link from "next/link";
import Image from "next/image";
import { marked } from "marked";

import Layout from "@/components/template/Layout";
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
    console.log(marked(content))
    return (
        <Layout title={frontmatter.title}>
            <Link href={`/blog`}>Go Back</Link>
            <div className="w-full px-10 py-6 space-y-4 bg-white rounded-lg shadow-md mt-6">
                <div className="flex justify-between items-center mt-4">
                    <H1>{frontmatter.title}</H1>
                    <CategoryLabel>{frontmatter.category}</CategoryLabel>
                </div>
                <Image src={frontmatter.cover_image} width={900} height={600} alt='' className='rounded-3xl' />
                <div className="flex justify-between items-center bg-gray-100 p-2 my-8">
                    <div className="flex items-center">
                        <Image src={frontmatter.author_image} width={40} height={40} alt="" className="mx-4 w-10 object-cover rounded-full hidden sm:block" />
                        <h4>{frontmatter.author}</h4>
                    </div>
                    <div className="mr-4">
                        {frontmatter.date}
                    </div>
                </div>
                <div className="blog-text mt-2">
                    <div dangerouslySetInnerHTML={{__html: marked(content)}}></div>
                </div>
            </div>
        </Layout>
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