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
        <div className='relative my-4 p-2'>
            {/* code view */}
            <SyntaxHighlighter language={props.language}
                               style={dracula}
                               customStyle={{
                                   borderRadius: "12px",
                                   width: "100%",
                                   fontSize: "18px",
                                   padding: "3em 2em 2em 2em",
                               }}
                               showLineNumbers>
                {props.children as string}
            </SyntaxHighlighter>

            {/* rounded ball */}
            <div className='absolute bg-softRed h-3 w-3 rounded-full left-8 top-8'></div>
            <div className='absolute bg-softYellow h-3 w-3 rounded-full left-8 top-8 translate-x-5'></div>
            <div className='absolute bg-softGreen h-3 w-3 rounded-full left-8 top-8 translate-x-10'></div>

            {/* copy board */}
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