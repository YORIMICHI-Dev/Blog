export interface Post {
    slug: string;
    frontmatter: Frontmatter;
}

export interface Frontmatter {
    title: string
    date: string
    excerpt: string
    cover_image: string
    category: string
    author: string
    author_image: string     
}

export const sortByDate = ( postA: Post, postB: Post): number => {
    return new Date(postA.frontmatter.date).valueOf() - new Date(postB.frontmatter.date).valueOf()
}
