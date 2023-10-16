import React from 'react';
import Searchbar from './Searchbar';

interface sidebarProps{
    setDarkMode: React.Dispatch<React.SetStateAction<boolean>>;
    query: string;
    setQuery: React.Dispatch<React.SetStateAction<string>>;
}

const Sidebar: React.FC<sidebarProps> = ({setDarkMode, query, setQuery}) => {
    return (
        <aside className="position-relative sidebar w-48 -translate-x-full transform bg-white p-4 transition-transform duration-150 ease-in md:translate-x-0 md:shadow-md">
            <div className="my-2 w-full border-b-4 border-indigo-100 text-center">
                <span className="font-mono text-xl font-bold tracking-widest">Forecast App</span>
            </div>
            <div className="my-4 font-mono text-base font-bold tracking-widest">
                <Searchbar query={query} setQuery={setQuery}/>
                <ul className='list-none max-h-[63vh] overflow-y-auto myscrollbar box-border pr-1 mt-2'>
                    <li className='my-2 border-2 border-indigo-200 rounded-full px-2 py-1 hover:bg-indigo-100 hover:shadow-md shadow-sm transition-all cursor-pointer'>Moscow</li>
                    <li className='my-2 border-2 border-indigo-200 rounded-full px-2 py-1 hover:bg-indigo-100 hover:shadow-md shadow-sm transition-all cursor-pointer'>London</li>
                    <li className='my-2 border-2 border-indigo-200 rounded-full px-2 py-1 hover:bg-indigo-100 hover:shadow-md shadow-sm transition-all cursor-pointer'>London</li>
                    <li className='my-2 border-2 border-indigo-200 rounded-full px-2 py-1 hover:bg-indigo-100 hover:shadow-md shadow-sm transition-all cursor-pointer'>London</li>
                    <li className='my-2 border-2 border-indigo-200 rounded-full px-2 py-1 hover:bg-indigo-100 hover:shadow-md shadow-sm transition-all cursor-pointer'>London</li>
                    <li className='my-2 border-2 border-indigo-200 rounded-full px-2 py-1 hover:bg-indigo-100 hover:shadow-md shadow-sm transition-all cursor-pointer'>London</li>
                    <li className='my-2 border-2 border-indigo-200 rounded-full px-2 py-1 hover:bg-indigo-100 hover:shadow-md shadow-sm transition-all cursor-pointer'>London</li>
                    <li className='my-2 border-2 border-indigo-200 rounded-full px-2 py-1 hover:bg-indigo-100 hover:shadow-md shadow-sm transition-all cursor-pointer'>London</li>
                    <li className='my-2 border-2 border-indigo-200 rounded-full px-2 py-1 hover:bg-indigo-100 hover:shadow-md shadow-sm transition-all cursor-pointer'>London</li>
                    <li className='my-2 border-2 border-indigo-200 rounded-full px-2 py-1 hover:bg-indigo-100 hover:shadow-md shadow-sm transition-all cursor-pointer'>London</li>
                    <li className='my-2 border-2 border-indigo-200 rounded-full px-2 py-1 hover:bg-indigo-100 hover:shadow-md shadow-sm transition-all cursor-pointer'>London</li>
                    <li className='my-2 border-2 border-indigo-200 rounded-full px-2 py-1 hover:bg-indigo-100 hover:shadow-md shadow-sm transition-all cursor-pointer'>London</li>
                    <li className='my-2 border-2 border-indigo-200 rounded-full px-2 py-1 hover:bg-indigo-100 hover:shadow-md shadow-sm transition-all cursor-pointer'>London</li>
                    <li className='my-2 border-2 border-indigo-200 rounded-full px-2 py-1 hover:bg-indigo-100 hover:shadow-md shadow-sm transition-all cursor-pointer'>London</li>
                    <li className='my-2 border-2 border-indigo-200 rounded-full px-2 py-1 hover:bg-indigo-100 hover:shadow-md shadow-sm transition-all cursor-pointer'>London</li>
                </ul>
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
            </div>
        </aside>
    );
};

export default Sidebar;