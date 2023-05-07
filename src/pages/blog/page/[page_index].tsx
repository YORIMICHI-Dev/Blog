import fs from'fs'
import path from 'path';

import FadeInOnVisible from '@/components/molecules/FadeInOnVisible';
import PageNation from '@/components/molecules/PageNation';
import LayoutWithSidebar from '@/components/template/LayoutWithSidebar';
import PostComponent from '@/components/molecules/PostComponent';
import { POST_PER_PAGE } from '@/config';
import { PostMeta, getPostsMeta, sortByDate } from '@/utils/post';


interface PathProps {
    params: {
        page_index: string,
    }
}


interface BlogPageProps {
    postsMeta: PostMeta[],
    numPages: number,
    currentPage: number,
}


export default function BlogPage( {postsMeta, numPages, currentPage}: BlogPageProps ) {

    return (
        <LayoutWithSidebar title="Blog">
            <h1 className="text-5xl border-b-4 p-5 font-bold">Blog</h1>

            <FadeInOnVisible>
                <div className="grid md:grid-cols-2 gap-5">
                {postsMeta.map((post, index) => {
                    return (
                        <PostComponent key={index} meta={post} />                            
                    )
                })}
                </div>                        
            </FadeInOnVisible>

            <PageNation currentPage={currentPage} numPages={numPages} />
        </LayoutWithSidebar>
    )
}

export const getStaticPaths = async() => {
    const files = fs.readdirSync(path.join("src/pages/blog/posts"))
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

    const postsMeta = await getPostsMeta() 

    // 新着順にPostを取得する
    const metaFiles = fs.readdirSync(path.join('src/meta'))
    const dateSortPosts = postsMeta.sort(sortByDate);

    const numPages = Math.ceil(metaFiles.length / POST_PER_PAGE)
    const pageIndex = page - 1
    const orderedPosts = dateSortPosts.slice(pageIndex * POST_PER_PAGE, (pageIndex + 1) * POST_PER_PAGE)

    return {
        props: {
            postsMeta: orderedPosts,
            numPages,
            currentPage: page,
        },
    }
}
