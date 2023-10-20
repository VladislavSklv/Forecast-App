import React from 'react';
import { useActions } from '../hooks';
import { ICity } from '../models/models';

interface sidebarItemProps {
    city: ICity
    setCity: React.Dispatch<React.SetStateAction<string>>
}

const SidebarItem: React.FC<sidebarItemProps> = ({city, setCity}) => {
    const {removeCity} = useActions()

    return (
        <li 
            className='relative my-2 border-2 border-indigo-200 rounded-full pl-3 pr-2 py-1 hover:bg-indigo-100 hover:shadow-md shadow-sm transition-all cursor-pointer'
            onClick={() => setCity(city.url)}
        >{city.name}
            <span 
                className='absolute right-2 top-[50%] translate-y-[-50%] hover:text-red-700 transition-all' 
                onClick={(e: React.MouseEvent<HTMLSpanElement>) => {
                    e.preventDefault()
                    removeCity(city)
                }}
            >&#10006;</span>
        </li>
    );
};

export default SidebarItem;