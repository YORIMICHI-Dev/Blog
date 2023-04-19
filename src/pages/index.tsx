import Layout from "@/components/template/Layout"
import IndexHero from '@/components/organism/index/IndexHero';
import IndexSkill from "@/components/organism/index/IndexSkill";
import IndexAbout from "@/components/organism/index/IndexAbout";
import IndexWork from "@/components/organism/index/IndexWork";

import { PARENT_CATEGORY } from "@/config";
import { PostMeta, getPostsMeta } from "@/utils/post";


interface Props {
	posts: {
	codePost: PostMeta,
	webPost: PostMeta,
	toolPost: PostMeta,
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
	const posts = await getPostsMeta()
	const codePost = posts.filter((value) => value.parent_category === "Code")
	const webPost = posts.filter((value) => value.parent_category === "Web")
	const toolPost = posts.filter((value) => value.parent_category === "Tool")

	return {
		props: {
			posts: {
				"codePost": codePost.slice(0,1).at(0),
				"webPost": webPost.slice(0,1).at(0),
				"toolPost": toolPost.slice(0,1).at(0),
			}
		},
	}
}