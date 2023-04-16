import dynamic from "next/dynamic";
import fs from "fs"
import path from "path";

import Image from "next/image";
import LayoutWithSidebar from "@/components/template/LayoutWithSidebar";
import CategoryLabel from "@/components/molecules/CategoryLabel";
import Breadcrumb from "@/components/molecules/Breadcrumb";
import H1 from "@/components/atoms/blog_components/H1";


type PathProps = {
    params: {
      slug: string;
    };
  };
  
  type Props = {
    meta: any;
    slug: string;
  };


function PostPage({meta, slug}: Props) {
    const Content = dynamic(() => import(`./posts/${slug}`))
    return (
        <LayoutWithSidebar title={meta.title}>
            <div className="w-full lg:px-10 py-3 space-y-2 bg-white rounded-lg shadow-xl">
                <Breadcrumb category={meta.category}/>
                <div className="flex justify-between flex-col mx-auto items-baseline md:flex-row md:mb-0 space-y-5">
                    <H1>{meta.title}</H1>
                    <CategoryLabel>{meta.category}</CategoryLabel>
                </div>
                <div>
                    {meta.date}
                </div>
                <div>
                    <Image src={meta.cover_image} width={1800} height={600} alt='' className='rounded-3xl p-3' />                    
                </div>

                <div className="flex justify-between items-center bg-gray-100 p-2 my-8">
                    <div className="flex items-center">
                        <Image src={meta.author_image} width={40} height={40} alt="" className="mx-4 w-10 object-cover rounded-full hidden sm:block" />
                        <h4>{meta.author}</h4>
                    </div>
                </div>
                <div className="">
                    <Content />
                </div>
            </div>
        </LayoutWithSidebar>
    );
}


export const getStaticPaths = async () => {
    const files = fs.readdirSync(path.join('src/pages/blog/posts'))
    const paths = files.map((file) => {
        return {params: {slug: file.replace(".jsx", "")}}
    })

    return {
        paths,
        fallback: false
    }
}


export const getStaticProps = async ({ params }: PathProps) => {
    const { slug } = params!;
    // Metaタグの読み込み
    const meta = (await import(`src/meta/${slug}`)).meta

    return {
      props: {
        meta,
        slug,
      },
    };
  };
  
  export default PostPage;