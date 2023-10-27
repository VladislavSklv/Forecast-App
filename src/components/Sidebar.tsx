import React, { useState } from 'react';
import Searchbar from './Searchbar';
import { useAppSelector } from '../hooks';
import DarkModeBtn from './DarkModeBtn';
import SidebarItem from './SidebarItem';

interface sidebarProps {
    chosenCity: string
    darkMode: boolean
    setCity: React.Dispatch<React.SetStateAction<string>>
    isSidebar: boolean
    setIsSidebar: React.Dispatch<React.SetStateAction<boolean>>
    setDarkMode: React.Dispatch<React.SetStateAction<boolean>>
}

const Sidebar: React.FC<sidebarProps> = ({setCity, chosenCity, isSidebar, setIsSidebar, darkMode, setDarkMode}) => {
    const {cities} = useAppSelector(state => state.chosenCities)
	const [query, setQuery] = useState('')

    return (
        <aside 
            className={isSidebar 
                ? "translate-x-0 shrink-0 dark:bg-[#181818] duration-300 sidebar w-48 fixed transform bg-white p-4 transition-transform duration-150 ease-in z-50 h-[100%] md:translate-x-0 md:shadow-md md:relative md:h-auto"
                : "translate-x-[-150%] dark:bg-[#181818] duration-300 shrink-0 sidebar w-48 fixed transform bg-white p-4 transition-transform duration-150 ease-in z-50 h-[100%] md:translate-x-0 md:shadow-md md:relative md:h-auto"
        }>
            <div className="my-2 w-full border-b-4 dark:border-violet-500 border-indigo-100 text-center">
                <span className="dark:text-white font-mono text-xl font-bold tracking-widest">Forecast App</span>
            </div>
            <div className="my-4 font-mono text-base font-bold tracking-widest">
                <Searchbar query={query} setQuery={setQuery}/>
                <ul className='list-none max-h-[63vh] overflow-y-auto myscrollbar box-border pr-1 mt-2'>
                    {cities.length > 0 && 
                        <>
                            {cities.map(city => (
                                <SidebarItem setIsSidebar={setIsSidebar} chosenCity={chosenCity} setCity={setCity} city={city} key={city.id}/>
                            ))}
                        </>
                    }
                </ul>
                <DarkModeBtn darkMode={darkMode} setDarkMode={setDarkMode}/>
            </div>
        </aside>
    );
};

export default Sidebar;