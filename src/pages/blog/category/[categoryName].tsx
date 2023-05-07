import fs from'fs'
import path from 'path';
import LayoutWithSidebar from '@/components/template/LayoutWithSidebar';
import PostComponent from '@/components/molecules/PostComponent';
import { PostMeta, getPostsMeta } from '@/utils/post';


interface PathProps {
	params: {
		categoryName: string;
	}
}


interface CategoryBlogPageProps {
	postsMeta: PostMeta[]
	categoryName: string;
}


export default function CategoryBlogPage( {postsMeta, categoryName}: CategoryBlogPageProps) {

  return (
    <LayoutWithSidebar title='Blog'>
      <h1 className="text-5xl border-b-4 p-5 font-bold">Category in {categoryName}</h1>

      <div className="grid md:grid-cols-2 gap-5">
        {postsMeta.map((post, index) => {
          return (
			<PostComponent key={index} meta={post} />  
          )
        })}
      </div>
    </LayoutWithSidebar>

  )
}


export const getStaticPaths = async() => {
    // Metaファイルを取得
    const metaFiles = fs.readdirSync(path.join('src/meta'))

	// Metaで使用しているカテゴリを取得
    const categories = await Promise.all(metaFiles.map( async(filename) => {
        const filenameRename = filename.replace(".js", "")
        const meta: PostMeta = (await import(`src/meta/${filenameRename}`)).meta

        return meta.category.toLowerCase()
    }))

    const paths = categories.map((category) => {
        return {
			params: {
				categoryName: category
			}
		}
    })

    return {
        paths,
        fallback: false,
    }
}


export const getStaticProps = async (paths: PathProps) => {
    const {params: {categoryName}} = paths

	// Metaを取得
	const postsMeta = await getPostsMeta()

	// 同じカテゴリーのみ取得 カテゴリー名は元の名前を取得
	let categoryNameOrigin = "";
	const categoryMeta: PostMeta[] = postsMeta.filter((meta) => {
		if (meta.category.toLowerCase() === categoryName) {
			categoryNameOrigin = meta.category
			return true
		}
	  	return false;
	});


	return {
		props: {
			postsMeta: categoryMeta,
			categoryName: categoryNameOrigin,
		},
	};
};