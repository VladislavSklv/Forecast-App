import React from 'react';

interface darkModeBtnProps {
    setDarkMode: (value: React.SetStateAction<boolean>) => void
}

const DarkModeBtn: React.FC<darkModeBtnProps> = ({setDarkMode}) => {
    return (
        <div className='absolute bottom-0 left-0 w-[100%] pb-4 pl-4 pt-2 flex items-center bg-white'>
            <p className="text-lg mr-3">Dark mode</p>
            <div className="relative inline-block w-10 mr-2 align-middle select-none transition duration-200 ease-in">
                <input 
                    onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
                        if(e.target.checked) setDarkMode(true)
                        else setDarkMode(false)
                    }}
                    type="checkbox" 
                    name="toggle" 
                    id="toggle" 
                    className="toggle-checkbox absolute block w-6 h-6 rounded-full bg-white border-4 appearance-none cursor-pointer"/>
                <label htmlFor="toggle" className="toggle-label block overflow-hidden h-6 rounded-full bg-gray-200 cursor-pointer"></label>
            </div>
        </div>
    );
};

export default DarkModeBtn;