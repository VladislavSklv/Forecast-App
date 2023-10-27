import React from 'react';

interface InfoBlockProps {
    info: string[]
}

const InfoBlock:React.FC<InfoBlockProps> = ({info}) => {
    return (
        <div className='dark:bg-[#323436] dark:text-white dark:border-violet-300 shrink-0 grow-0 flex flex-col bg-gray-900/[.02] items-start border-2 border-indigo-200 rounded-[20px] p-2 shadow-md mx-1 my-2'>
            {info.map(text => (
                <p className='text-base'>
                    {text}
                </p>
            ))}
        </div>
    );
};

export default InfoBlock;