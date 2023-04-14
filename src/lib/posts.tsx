import fs from 'fs';
import path from 'path';
import { Post, sortByDate } from '../utils/post';

const files = fs.readdirSync(path.join('src/posts'));

export const getPosts = (): Post[] => {
    const posts = files.map((filename) => {
        const slug = filename.replace('.mdx', '');
        const markdownWithMeta = fs.readFileSync(path.join('src/posts', filename), 'utf-8');

        // return {
        //     slug,
        //     frontmatter: {
        //         title: frontmatter.title,
        //         slug: frontmatter.slug,
        //         date: frontmatter.date,
        //         excerpt: frontmatter.excerpt,
        //         cover_image: frontmatter.cover_image,
        //         category: frontmatter.category,
        //         author: frontmatter.author,
        //         author_image: frontmatter.author_image,
        //     },
        // };
    });

    // return posts.sort(sortByDate);
};