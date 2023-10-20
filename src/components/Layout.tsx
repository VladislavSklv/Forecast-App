import React from 'react';
import Sidebar from './Sidebar';
import { Outlet } from 'react-router-dom';

interface layoutProps {
    setCity: React.Dispatch<React.SetStateAction<string>>
}

const Layout: React.FC<layoutProps> = ({setCity}) => {
    return (
        <div className="flex min-h-screen flex-row bg-gray-100 text-gray-800 font-mono text-base font-bold tracking-widest">
			<Sidebar setCity={setCity} />
			<main className="main -ml-48 flex flex-grow flex-col p-4 transition-all duration-150 ease-in md:ml-0">
                <div className="flex h-full items-center justify-center bg-white text-center text-lg font-bold shadow-md">
				    <Outlet/>
                </div>
			</main>
		</div>
    );
};

export default Layout;