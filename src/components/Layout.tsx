import React from 'react';
import Sidebar from './Sidebar';
import { Outlet } from 'react-router-dom';

interface layoutProps {
    chosenCity: string
    setCity: React.Dispatch<React.SetStateAction<string>>
    isSidebar: boolean
    setIsSidebar: React.Dispatch<React.SetStateAction<boolean>>
    darkMode: boolean
    setDarkMode: React.Dispatch<React.SetStateAction<boolean>>
}

const Layout: React.FC<layoutProps> = ({setCity, chosenCity, isSidebar, setIsSidebar, darkMode, setDarkMode}) => {
    return (
        <div className={"flex min-h-screen transition-all flex-row bg-gray-100 text-gray-800 font-mono text-base font-bold tracking-widest"}>
			<Sidebar darkMode={darkMode} setDarkMode={setDarkMode} setIsSidebar={setIsSidebar} isSidebar={isSidebar} setCity={setCity} chosenCity={chosenCity} />
			<main className="dark:bg-black/[.8] relative main w-full md:w-[calc(100%-48rem)] md:ml-[-48] flex grow shrink-0 flex-col md:p-4 transition-all duration-150 ease-in md:ml-0">
                <div className="dark:bg-[#181818] relative overflow-hidden w-[100%] px-4 py-4 flex flex-col grow shrink-0 h-full items-start justify-between bg-white text-center text-lg font-bold shadow-md">
				    <Outlet/>
                </div>
			</main>
            <div 
                onClick={() => setIsSidebar(false)}
                className={isSidebar 
                    ? 'opacity-1 duration-300 pointer-events-auto fixed left-0 top-0 right-0 bottom-0 z-40 bg-black/[.5] transition-all md:opacity-0' 
                    : 'opacity-0 duration-300 pointer-events-none fixed left-0 top-0 right-0 bottom-0 z-40 bg-black/[.5] transition-all md:opacity-0'}>
            </div>
		</div>
    );
};

export default Layout;