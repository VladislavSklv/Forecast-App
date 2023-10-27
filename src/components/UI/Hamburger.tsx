import React from 'react';

interface hamburgerProps {
    setIsSidebar: (value: React.SetStateAction<boolean>) => void
}

const Hamburger:React.FC<hamburgerProps> = ({setIsSidebar}) => {
    return (
        <div onClick={() => setIsSidebar(true)} className='absolute cursor-pointer top-3 left-3 h-[17px] w-[20px] flex flex-col justify-between md:opacity-0 md:pointer-events-none md:hidden'>
            <span className='dark:bg-white shrink-0 grow-0 h-[4px] w-[20px] bg-black rounded block'></span>
            <span className='dark:bg-white shrink-0 grow-0 h-[4px] w-[20px] bg-black rounded block'></span>
            <span className='dark:bg-white shrink-0 grow-0 h-[4px] w-[20px] bg-black rounded block'></span>
        </div>
    );
};

export default Hamburger;