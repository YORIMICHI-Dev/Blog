import fs from'fs'
import path from 'path';


// Postメタ情報
export interface PostMeta {
    title: string,
    slug: string,
    date: string,
    excerpt: string,
    cover_image: string,
    parent_category: string,
    category: string,
    author: string,
    author_image: string,
}


// Postを新着順に並べる
export const sortByDate = ( postA: PostMeta, postB: PostMeta): number => {
    return new Date(postB.date).valueOf() - new Date(postA.date).valueOf() 
}


export const getPostsMeta = async() => {
    // PostのMeta情報を取得する
    const metaFiles = fs.readdirSync(path.join('src/meta'))

    // Metaを取得
    const postsMeta = await Promise.all(metaFiles.map( async(filename) => {
        const filenameRename = filename.replace(".js", "")
        const meta: PostMeta = (await import(`src/meta/${filenameRename}`)).meta

        return meta
    }))
    
    return postsMeta
}