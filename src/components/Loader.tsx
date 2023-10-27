import React from 'react';

const Loader: React.FC = () => {
    return (
        <div className='mx-auto animate-spin border-[8px] dark:border-[#323436] dark:border-t-violet-300 border-gray-300 border-t-indigo-300 rounded-full w-[100px] h-[100px]'></div>
    );
};

export default Loader;