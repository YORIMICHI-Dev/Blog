import fs from'fs'
import matter from 'gray-matter';
import path from 'path';
import LayoutWithSidebar from '@/components/template/LayoutWithSidebar';
import PostComponent from '@/components/molecules/PostComponent';
import { getPosts} from '@/lib/posts';
import { Post } from '@/utils/post';
import { GetStaticPaths } from 'next';


interface PathProps {
	params: {
		categoryName: string;
	}
}


interface CategoryBlogPageProps {
	posts: Post[]
	categoryName: string;
}


export default function CategoryBlogPage( {posts, categoryName}: CategoryBlogPageProps) {

  return (
    <LayoutWithSidebar title='Myblog'>
      <h1 className="text-5xl border-b-4 p-5 font-bold">Category in {categoryName}</h1>

      <div className="grid md:grid-cols-2 gap-5">
        {posts.map((post) => {
          return (
          <PostComponent key={post.frontmatter.title} slug={post.slug} frontmatter={post.frontmatter} />
          )
        })}
      </div>
    </LayoutWithSidebar>

  )
}

export const getStaticPaths: GetStaticPaths = async () => {
    const files = fs.readdirSync(path.join("src/posts"))

    const categories = files.map((filename) => {
        const markdownWithMeta = fs.readFileSync(path.join("src/posts", filename), 'utf-8')
        const {data: frontmatter} = matter(markdownWithMeta)

        return frontmatter.category.toLowerCase()
    })

    const paths = categories.map((category) => {
        return {params: {categoryName: category}}
    })

    return {
        paths,
        fallback: false,
    }
}


export const getStaticProps = async (paths: PathProps) => {
    const {params: {categoryName}} = paths
	const posts = getPosts();
  
	const categoryPosts = posts.filter((post) => {
	  	return post.frontmatter.category.toLowerCase() === categoryName;
	});
  
	return {
		props: {
			posts: categoryPosts,
			categoryName: categoryName,
		},
	};
};