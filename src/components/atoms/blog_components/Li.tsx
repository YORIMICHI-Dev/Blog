import React from 'react';

const Li = (props: { num: string, title: string, children?: React.ReactNode }) => {
  return (
    <li className="my-10 text-xl text-grayishBlue p-4">
        <div className='flex flex-row space-x-2 items-center'>
            <span className='text-white bg-gradationBrawn font-semibold rounded-full px-3 py-1'>{props.num}</span>
            <span className='relative font-semibold'>{props.title}</span>                      
        </div>
        <div>
            {props.children}            
        </div>

    </li>
  );
};

export default Li;