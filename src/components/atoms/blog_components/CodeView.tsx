import { dracula } from 'react-syntax-highlighter/dist/cjs/styles/prism';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faClipboard} from '@fortawesome/free-solid-svg-icons';

import { useState } from 'react';
import { MouseEventHandler } from 'react';


const CodeView = ( props: { language: string, filename?: string, children?: React.ReactNode }) => {
    const [ isAppear, setIsAppear ] = useState(false)

    const clickCopyCode: MouseEventHandler<SVGSVGElement> = () => {
        navigator.clipboard.writeText(props.children as string)
        setIsAppear(true);
        setTimeout(() => {
            setIsAppear(false);
        }, 3000);
    }

    return (
        <div className='relative my-4 flex justify-end items-start p-2'>
            <SyntaxHighlighter language={props.language}
                               style={dracula}
                               customStyle={{
                                   borderRadius: "12px",
                                   width: "100%",
                                   fontSize: "18px",
                                   position: "relative",
                                   padding: "2em",
                                   overflowX: "hidden",
                               }}
                               showLineNumbers>
                {props.children as string}
            </SyntaxHighlighter>
                <div className='absolute flex flex-row items-center space-x-3 right-6 top-6'>
                {props.filename && (
                    <div className="hidden md:block text-sm  text-white text-right">
                    {props.filename}
                    </div>
                )}
                <div className='relative flex flex-col items-center p-2'>
                    {isAppear && (<span className='absolute top-10 text-sm text-white'>Copy!</span>)}
                    <FontAwesomeIcon icon={faClipboard}
                                    className='w-5 h-5 text-white hover:text-secondaryGreen cursor-pointer'
                                    onClick={clickCopyCode}/>                
                </div>
            </div>

        </div>
    )
};
export default CodeView;