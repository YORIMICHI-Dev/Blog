import fs from'fs'
import path from 'path';
import FadeInOnVisible from '@/components/molecules/FadeInOnVisible';
import PageNation from '@/components/molecules/PageNation';
import LayoutWithSidebar from '@/components/template/LayoutWithSidebar';
import PostComponent from '@/components/molecules/PostComponent';
import { POST_PER_PAGE } from '@/config';
import { getPosts } from '@/lib/posts';
import { Post } from '@/utils/post';


interface PathProps {
    params: {
        page_index: string,
    }
}

interface BlogPageProps {
    posts: Post[],
    numPages: number,
    currentPage: number,
    categories: string[],
}


export default function BlogPage( {posts, numPages, currentPage, categories}: BlogPageProps ) {
    return (
        <LayoutWithSidebar title="Blog Contents">
            {/* <h1 className="text-5xl border-b-4 p-5 font-bold">Blog</h1>

            <FadeInOnVisible>
                <div className="grid md:grid-cols-2 gap-5">
                {posts.map((post, index) => {
                    return (
                    <PostComponent key={index} slug={post.slug} frontmatter={post.frontmatter} />
                    )
                })}
                </div>                        
            </FadeInOnVisible>

            <PageNation currentPage={currentPage} numPages={numPages} /> */}
        </LayoutWithSidebar>
    )
}

export const getStaticPaths = async() => {
    const files = fs.readdirSync(path.join("src/posts"))
    const numPages = Math.ceil(files.length / POST_PER_PAGE)

    let paths = []

    for(let i = 1; i<=numPages; i++){
        paths.push({
            params: {page_index: i.toString()}
        })
    }

    return {
        paths,
        fallback: false,
    }
}


export const getStaticProps = async({params}: PathProps) => {
    const page = parseInt((params && params.page_index)) || 1

    const files = fs.readdirSync(path.join("src/posts"))

    const posts = getPosts()

    // const categories = posts.map((post) => {
    //     return post.frontmatter.category
    // })

    // const uniqueCategories = [...new Set(categories)]

    // const numPages = Math.ceil(files.length / POST_PER_PAGE)
    // const pageIndex = page - 1
    // const orderedPosts = posts.slice(pageIndex * POST_PER_PAGE, (pageIndex + 1) * POST_PER_PAGE)

    return {
        props: {
            // posts: orderedPosts,
            // numPages,
            // currentPage: page,
            // categories: uniqueCategories
        },
    }
}
