import { dracula } from 'react-syntax-highlighter/dist/cjs/styles/prism';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFile } from '@fortawesome/free-solid-svg-icons';

import { useState } from 'react';
import { MouseEventHandler } from 'react';

interface Props {
    language: string;
    children: string;
}

const CodeView = ({ language, children }: Props) => {
    const [ isAppear, setIsAppear ] = useState(false)

    const clickCopyCode: MouseEventHandler<SVGSVGElement> = () => {
        navigator.clipboard.writeText(children)
        setIsAppear(true)
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
                                   padding: "32px",
                                   overflowX: "hidden",
                               }}
                               lineNumberContainerStyle ={{
                                
                               }}
                               showLineNumbers>
                {children}
            </SyntaxHighlighter>
            <div className='absolute flex flex-row items-center mt-10 mr-10 p-2'>
                {isAppear && (<span className='text-sm bold text-gray-100 mr-5 transition-transform'>Copy !</span>)}
                <FontAwesomeIcon icon={faFile}
                                 className='w-6 h-6 text-teal-100 hover:text-teal-400 cursor-pointer'
                                 onClick={clickCopyCode}/>                
            </div>

        </div>
    )
};
export default CodeView;