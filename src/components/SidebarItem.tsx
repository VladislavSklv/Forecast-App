import React, { useEffect, useState } from 'react';
import { useActions } from '../hooks';
import { ICity } from '../models/models';

interface sidebarItemProps {
    chosenCity: string
    city: ICity
    setCity: React.Dispatch<React.SetStateAction<string>>
}

const SidebarItem: React.FC<sidebarItemProps> = ({city, setCity, chosenCity}) => {
    const {removeCity} = useActions()
    let activeClass = chosenCity === city.url ? 'active' : ''

    return (
        <li 
            className={`${activeClass} relative my-2 border-2 border-indigo-200 rounded-[20px] px-2 py-1 hover:bg-indigo-100 hover:shadow-md shadow-sm transition-all cursor-pointer`}
            onClick={() => {
                setCity(city.url)
            }}
        >{city.name}
            <span 
                className={`absolute right-2 top-[50%] translate-y-[-50%] hover:text-red-700 transition-all`}
                onClick={(e: React.MouseEvent<HTMLSpanElement>) => {
                    e.stopPropagation()
                    removeCity(city)
                    setCity('')
                }}
            >&#10006;</span>
        </li>
    );
};

export default SidebarItem;