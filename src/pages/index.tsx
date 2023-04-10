import Link from 'next/link';
import Layout from "@/components/template/Layout"
import PostComponent from '@/components/organism/PostComponent';
import { getPosts } from '@/lib/posts';

import PageH1 from '@/components/atoms/PageH1';
import { Post } from '@/utils/post';

interface HomePageProps {
	posts: Post[]
}


export default function HomePage( {posts}: HomePageProps ) {

  return (
    <Layout title={"Home"}>
      <PageH1>Latest Posts</PageH1>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
        {posts.map((post) => {
          return (
          <PostComponent key={post.frontmatter.title} slug={post.slug} frontmatter={post.frontmatter} />
          )
        })}
      </div>

      <Link href={'/blog'} className="block text-center border border-gray-500 text-gray-800 rounded-md py-4 my-5
                                      transition duration-500 ease select-none hover:text-white hover:bg-gray-900
                                      focus:outline-none focus:shadow-outline w-full">
        More Posts
      </Link>
    </Layout>

  )
}

export const getStaticProps = async () => {
  return {
      props: {
          posts: getPosts().slice(0, 6)
      },
  }
}
