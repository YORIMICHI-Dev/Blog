import Tab from "@/components/molecules/Tab";
import { Post } from "@/utils/post";

interface Props {
    posts: {
    codePost: Post,
    webPost: Post,
    toolPost: Post,
  }}

const IndexSkill = ({posts}: Props) => {

    return (
        <section id="post">
            {/* Tabs/Panels Container */}
            <div className="flex flex-col items-center justify-center m-10 px-6">
                <h2 className="mb-6 text-4xl font-semibold">Blog Content</h2>
                <p className="max-w-md text-center text-grayishBlue">
                    ブログ内容をまとめています< br/>
                    ブログは不定期ですが、月に3件くらいは書いていきたいです
                </p>
            </div>
            <Tab posts={posts}/>
        </section>
    );
}

export default IndexSkill;
