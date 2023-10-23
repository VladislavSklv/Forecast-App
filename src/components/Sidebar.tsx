import React, { useEffect, useState } from 'react';
import Searchbar from './Searchbar';
import { useAppSelector } from '../hooks';
import DarkModeBtn from './DarkModeBtn';
import SidebarItem from './SidebarItem';

interface sidebarProps {
    setCity: React.Dispatch<React.SetStateAction<string>>
}

const Sidebar: React.FC<sidebarProps> = ({setCity}) => {
    const {cities} = useAppSelector(state => state.chosenCities)
	const [darkMode, setDarkMode] = useState(false)
	const [query, setQuery] = useState('')

    return (
        <aside className="position-relative shrink-0 grow-0 sidebar w-48 -translate-x-full transform bg-white p-4 transition-transform duration-150 ease-in md:translate-x-0 md:shadow-md">
            <div className="my-2 w-full border-b-4 border-indigo-100 text-center">
                <span className="font-mono text-xl font-bold tracking-widest">Forecast App</span>
            </div>
            <div className="my-4 font-mono text-base font-bold tracking-widest">
                <Searchbar query={query} setQuery={setQuery}/>
                <ul className='list-none max-h-[63vh] overflow-y-auto myscrollbar box-border pr-1 mt-2'>
                    {cities.length > 0 && 
                        <>
                            {cities.map(city => (
                                <SidebarItem setCity={setCity} city={city} key={city.id}/>
                            ))}
                        </>
                    }
                </ul>
                <DarkModeBtn setDarkMode={setDarkMode}/>
            </div>
        </aside>
    );
};

export default Sidebar;