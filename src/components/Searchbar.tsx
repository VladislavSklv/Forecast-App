import React, {useState, useEffect} from 'react';
import { useDebounce } from '../hooks/debounce';
import { useGetCitiesQuery } from '../api/weather.api';
import { useActions, useAppSelector } from '../hooks';
import ErrorBlock from './ErrorBlock';
import Loader from './Loader';

interface searchbarProps{
    query: string;
    setQuery: React.Dispatch<React.SetStateAction<string>>;
}

const Searchbar: React.FC<searchbarProps> = ({query, setQuery}) => {
    const [dropdown, setDropdown] = useState(false)
    const debounced = useDebounce(query)
    const {addCity} = useActions()
    const {cities: chosenCities} = useAppSelector(state => state.chosenCities)
    const {data: cities, isLoading, isError} = useGetCitiesQuery({query: debounced}, {
        skip: debounced.length < 3,
        refetchOnFocus: true
    })

    useEffect(() => {
        setDropdown(debounced.length >= 3 && cities?.length! > 0 ? true : false)
    }, [debounced, cities]);

    return (
        <div className='max-w-md mx-auto relative'>
            <div className="relative dark:bg-[#323436] border-2 border-gray-400 flex items-center w-full h-10 rounded-full focus-within:border-indigo-300 focus-within:shadow-lg bg-white overflow-hidden">
                <div className="grid place-items-center h-full w-12 text-gray-300">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                    </svg>
                </div>

                <input
                    className="peer dark:text-white dark:bg-gray-400/[.001] h-full w-full outline-none font-mono font-bold tracking-widest text-sm text-gray-700 pr-2"
                    type="text"
                    id="search"
                    placeholder="Search" 
                    value={query}
                    onChange={(e: React.ChangeEvent<HTMLInputElement>) => setQuery(e.target.value)}/> 
            </div>
            {dropdown && 
                <ul className='myscrollbar dark:bg-zinc-700 z-10 absolute w-[100%] left-0 max-h-[200px] overflow-y-auto bg-white rounded shadow-lg border-[1px] list-none transition-all'>
                    {isError && <ErrorBlock/>}
                    {isLoading && <Loader/>}
                    {cities?.map(city => (
                        <li
                            key={city.id} 
                            className='border-t-2 dark:text-white dark:hover:bg-violet-700 dark:border-violet-400 border-indigo-300 hover:bg-indigo-200 px-2 py-2 first:border-0 cursor-pointer'
                            onClick={() => {
                                let checker = 1
                                chosenCities.map((chosenCity) => {
                                    if(chosenCity.id === city.id) checker = 0 
                                })
                                if(checker) addCity(city)
                                setDropdown(false)
                                setQuery("")
                            }}
                        >{city.name}</li>
                    ))}
                </ul>
            }
        </div>
    );
};

export default Searchbar;