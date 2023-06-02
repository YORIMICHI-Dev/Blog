import { IconDefinition, faCode, faGlobe, faTools } from "@fortawesome/free-solid-svg-icons";
import IndexSkillTab from "./IndexSlillTab";
import { PostMeta } from "@/utils/post";

interface Props {
    posts: {
    codePost: PostMeta,
    webPost: PostMeta,
    toolPost: PostMeta,
  }}


interface Tab {
    label: string;
    icon: IconDefinition;
    panel: string;
    parentCategory: string;
    paragraph: string[];
    post: PostMeta
}


const IndexSkill = ({posts}: Props) => {
    const {codePost, webPost, toolPost} = posts

    const tabs: Tab[] = [
        {
            label: "Code",
            icon: faCode,
            panel: "Technique of Programming",
            parentCategory: "Python, TypeScript, and so on.",
            paragraph: [
              "プログラミングで活用できそうな技術をまとめています",
              "Python, TypeScriptなど"
            ],
            post:codePost,
        },
        {
            label: "Web App",
            icon: faGlobe,
            panel: "Knowledge of Web Application",
            parentCategory: "Next.js, React, AWS, and so on.",
            paragraph: [
              "Web系の技術で忘れないようにメモしています",
              "Next.js, AWSなど"
            ],
            post:webPost,
        },
        {
            label: "Tools",
            icon: faTools,
            panel: "Reference of Technology",
            parentCategory: "Ubuntu, VSCode, and so on.",
            paragraph: [
              "シェルコマンドや参考になった技術をまとめています",
              "Ubuntu, VSCodeなど"
            ],
            post:toolPost,
        }
      ]


    return (
        <section id="skill">
            {/* Tabs/Panels Container */}
            <div className="flex flex-col items-center justify-center md:m-10 lg:px-6 px-2">
                <h2 className="mb-6 md:text-4xl text-3xl font-semibold">Blog Content</h2>
            </div>
            <IndexSkillTab tabs={tabs} />
        </section>
    );
}

export default IndexSkill;
