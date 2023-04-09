import Layout from "@/components/template/Layout";
import CodeView from "@/components/molecules/CodeView";


function about() {
    const code =
`import { dracula } from 'react-syntax-highlighter/dist/cjs/styles/prism';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFile } from '@fortawesome/free-solid-svg-icons';

import { MouseEventHandler } from 'react';

interface Props {
    language: string;
    children: string;
}
const CodeView = ({ language, children }: Props) => {

    const clickCopyCode: MouseEventHandler<SVGSVGElement> = () => {
        navigator.clipboard.writeText(children)
    }

export default CodeView;`

    return (
        <Layout title="About" keywords="aaa" description="aa">
            <h1 className="text-5xl border-b-4 pb-5">About</h1>
            <div className="bg-white shadow-md rounded-lg px-10 py-6 mt-6">
                <h3 className="text-2xl mb-5">DevSpace Blog</h3>

                <p className="mb-3">
                    This is blog built
                </p>
                <span className="font-bold">Version 1.0.0</span>
                <CodeView language="javascript">
                    {code}
                </CodeView>
            </div>
        </Layout>
    );
}

export default about;