import React from 'react';
import { IForecastday, IHour } from '../models/models';

interface hourBlockProps {
    hour: IHour
    forecastDay: IForecastday
}

const HourItem:React.FC<hourBlockProps> = ({forecastDay, hour}) => {
    return (
        <li
            className='dark:bg-[#323436] dark:text-white dark:border-violet-300 bg-gray-900/[.02] text-sm shrink-0 my-2 mx-1 border-2 border-indigo-200 rounded-[20px] px-2 py-1 shadow-md transition-all' 
        >
            <p>{hour.time.replace(forecastDay.date, '')}</p>
            <span className='relative'><img className='mx-auto w-[40px]' src={hour.condition.icon} alt="weather-icon" /></span>
            <p className='tracking-normal'>{hour.temp_c}°C</p>
        </li>
    );
};

export default HourItem;