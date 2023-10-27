import React from 'react';
import { IForecastday } from '../models/models';

interface dayItemProps {
    day: IForecastday
    forecastDay: IForecastday
    setForecastDay: (value: React.SetStateAction<IForecastday | undefined>) => void
}

const DayItem:React.FC<dayItemProps> = ({day, setForecastDay, forecastDay}) => {
    return (
        <li
            onClick={() => {
                setForecastDay(day)
            }}
            className={forecastDay.date === day.date 
                ? 'dark:bg-violet-700 dark:hover:bg-violet-700 dark:text-white dark:border-violet-300 dark:bg-[#323436] active text-sm shrink-0 my-2 mx-1 border-2 border-indigo-200 rounded-[20px] px-2 py-1 hover:bg-indigo-100 shadow-md transition-all cursor-pointer'
                : 'dark:text-white dark:hover:bg-violet-700 dark:border-violet-300 dark:bg-[#323436] text-sm bg-gray-900/[.02] shrink-0 my-2 mx-1 border-2 border-indigo-200 rounded-[20px] px-2 py-1 hover:bg-indigo-100 shadow-md transition-all cursor-pointer' 
            }
            key={day.date}
        >{day.date.replaceAll('-', '.')}</li>
    );
};

export default DayItem;