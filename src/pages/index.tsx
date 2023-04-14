import Layout from "@/components/template/Layout"
import IndexHero from '@/components/organism/index/IndexHero';
import IndexSkill from "@/components/organism/index/IndexSkill";
import IndexAbout from "@/components/organism/index/IndexAbout";
import IndexWork from "@/components/organism/index/IndexWork";
import { getPosts } from '@/lib/posts';
import { PARENT_CATEGORY } from "@/config";
import { Post } from '@/utils/post';


interface Props {
	posts: {
	codePost: Post,
	webPost: Post,
	toolPost: Post,
  }
}


export default function HomePage( {posts}: Props ) {

  return (
    <Layout title={"Home"}>
		<div className='space-y-24 lg:space-y-40'>
			<IndexHero />

			<IndexSkill posts={posts} />

			<IndexAbout />

			<IndexWork />
		</div>
    </Layout>

  )
}


export const getStaticProps = async () => {
	const posts = getPosts()

	return {
		props: {
			posts: {
				"codePost": posts.slice(0, 1).at(0),
				"webPost": posts.slice(1, 2).at(0),
				"toolPost": posts.slice(2, 3).at(0),
			}
		},
	}
}