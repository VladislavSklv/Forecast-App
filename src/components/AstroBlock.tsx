import React from 'react';
import { IForecastday } from '../models/models';

interface astroBlockProps {
    darkMode: boolean
    forecastDay: IForecastday
}

const AstroBlock: React.FC<astroBlockProps> = ({darkMode, forecastDay}) => {
    return (
        <div className='relative mx-auto mt-5 dark:text-white'>
            <div className='flex dark:border-violet-500 justify-center items-center w-[230px] h-[90px] sm:w-[300px] sm:h-[120px] border-[3px] border-indigo-500/[.7] rounded-[10em/4em] border-b-[0px] border-r-[0px] border-l-[0px] mx-auto'>
                <span className='relative dark:bg-white/[.7] bg-gray-400/[.6] w-full h-[2px] block bottom-[5px]'></span>
            </div>
            <div className='absolute w-[50px] left-0 top-[40%] translate-x-[-75%] flex flex-col justify-center items-center'>
                <div className='w-[35px]'><img className='w-100%' src={darkMode ? "icons/sunrise-white.svg" : "icons/sunrise.svg"} alt="sunset" /></div>
                <p className='text-sm tracking-normal'>{forecastDay.astro.sunrise.replaceAll('AM', '').replaceAll('PM', '')}</p>
            </div>
            <div className='absolute w-[50px] right-0 top-[40%] translate-x-[75%] flex flex-col justify-center items-center'>
                <div className='w-[35px]'><img className='w-100%' src={darkMode ? "icons/sunset-white.svg" : "icons/sunset.svg"} alt="sunset" /></div>
                <p className='text-sm tracking-normal'>{forecastDay.astro.sunset.replaceAll('AM', '').replaceAll('PM', '')}</p>
            </div>
        </div>
    );
};

export default AstroBlock;