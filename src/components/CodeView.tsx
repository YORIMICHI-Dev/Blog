import { dracula } from 'react-syntax-highlighter/dist/cjs/styles/prism';
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

    return (
        <div className='my-4 flex justify-end items-start'>
            <SyntaxHighlighter language={language}
                               style={dracula}
                               customStyle={{
                                   borderRadius: "12px",
                                   width: "100%",
                                   position: "relative",
                                   fontSize: "18px",
                                   padding: "24px 32px",
                                   overflowX: "hidden",
                               }}
                               showLineNumbers>
                {children}
            </SyntaxHighlighter>
            <FontAwesomeIcon icon={faFile} 
                             className='absolute w-6 h-6 mt-8 mr-8 text-sm text-teal-100 hover:text-teal-400 cursor-pointer'
                             onClick={clickCopyCode}/>
        </div>
    )
};
export default CodeView;