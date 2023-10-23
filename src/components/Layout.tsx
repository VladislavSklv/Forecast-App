import React from 'react';
import Sidebar from './Sidebar';
import { Outlet } from 'react-router-dom';

interface layoutProps {
    chosenCity: string
    setCity: React.Dispatch<React.SetStateAction<string>>
}

const Layout: React.FC<layoutProps> = ({setCity, chosenCity}) => {
    return (
        <div className="flex min-h-screen flex-row bg-gray-100 text-gray-800 font-mono text-base font-bold tracking-widest">
			<Sidebar setCity={setCity} chosenCity={chosenCity} />
			<main className=" relative main w-[calc(100%-48rem)] -ml-48 flex flex-grow flex-col p-4 transition-all duration-150 ease-in md:ml-0">
                <div className="relative w-[100%] px-4 py-4 flex flex-col h-full w-full items-start justify-start bg-white text-center text-lg font-bold shadow-md">
				    <Outlet/>
                </div>
			</main>
		</div>
    );
};

export default Layout;