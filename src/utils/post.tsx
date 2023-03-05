export interface PostsProps {
    posts: PostProps[]
}

export interface PostProps {
    slug: string,
    frontmatter: {
        title: string
        date: string
        excerpt: string
        cover_image: string
        category: string
        author: string
        author_image: string
    }         
}

export const sortByDate = ( postA: PostProps, postB: PostProps): number => {
    return new Date(postA.frontmatter.date).valueOf() - new Date(postB.frontmatter.date).valueOf()
}
