import React, { useEffect, useState } from 'react';
import { IForecastday, IWeather } from '../models/models';
import Loader from '../components/Loader';
import ErrorBlock from '../components/ErrorBlock';

interface mainPageProps {
    data: IWeather | undefined
    isError: boolean
    isLoading: boolean
    city: string
    setIsSidebar: React.Dispatch<React.SetStateAction<boolean>>
    darkMode: boolean
}

const MainPage: React.FC<mainPageProps> = ({data, isError, isLoading, city, setIsSidebar, darkMode}) => {
    const [forecastDay, setForecastDay] = useState<IForecastday | undefined>(data?.forecast.forecastday[0])

    useEffect(() => {
        if(data !== undefined) {
            setForecastDay(data.forecast.forecastday[0])
        }
    }, [data])

    return (
        <>
            <div onClick={() => setIsSidebar(true)} className='absolute cursor-pointer top-3 left-3 h-[17px] w-[20px] flex flex-col justify-between md:opacity-0 md:pointer-events-none md:hidden'>
                <span className='dark:bg-white shrink-0 grow-0 h-[4px] w-[20px] bg-black rounded block'></span>
                <span className='dark:bg-white shrink-0 grow-0 h-[4px] w-[20px] bg-black rounded block'></span>
                <span className='dark:bg-white shrink-0 grow-0 h-[4px] w-[20px] bg-black rounded block'></span>
            </div>
            {isError && city.length > 0 && <ErrorBlock/>}
            {isLoading && <Loader/>}
            {!isLoading && city.length === 0 && <div className='dark:text-white flex justify-center items-center h-[100%] w-[100%] text-center'>You`ve not chosen any city</div>}
            {city.length > 0 && data !== undefined && 
                <>
                    <div className='flex flex-col items-center mx-auto'>
                        <div className='dark:text-white text-center text-xl mx-auto w-[calc(100%-4rem)] md:w-full'>{data.location.country.length > 0 && data.location.country + ', '}{data.location.region.length > 0 && data.location.region + ', '}{data.location.name.length > 0 && data.location.name}</div>
                        <div className='text-sm dark:text-gray-400 text-gray-500 text-center mx-auto'>Today is {data.forecast.forecastday[0].date.replaceAll('-', '.')}</div>
                        <ul className='myscrollbar max-w-[100%] relative flex flex-wrap justify-center items-center mx-auto'>
                            {forecastDay !== undefined && data.forecast.forecastday.map(day => (
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
                            ))}
                        </ul>
                    </div>
                    {forecastDay !== undefined && 
                        <div className='flex w-[100%] flex-col justify-start items-start'>
                            <div className='flex flex-col mx-auto items-center justify-center mb-3'>
                                
                            <div className='flex justify-center items-center mx-auto'><img className='w-[100px]' src={forecastDay.day.condition.icon} alt="weather-ion" /></div>
                                <div className='flex flex-col'>
                                    <div className='dark:text-violet-500 text-4xl leading-[30px] text-indigo-600 text-center mx-auto mb-3'>{forecastDay.day.condition.text}</div>
                                    <div className='dark:text-gray-400 text-2xl leading-[20px] text-gray-500 tracking-normal'>{forecastDay.day.avgtemp_c}°C</div>
                                </div>
                            </div>
                            <div className='flex justify-center items-center flex-wrap w-full'>
                                <div className='dark:bg-[#323436] dark:text-white dark:border-violet-300 shrink-0 grow-0 flex flex-col bg-gray-900/[.02] items-start border-2 border-indigo-200 rounded-[20px] p-2 shadow-md mx-1 my-2'>
                                    <div className='text-base'>Min temp: {forecastDay.day.mintemp_c}°C</div>
                                    <div className='text-base'>Max temp: {forecastDay.day.maxtemp_c}°C</div>
                                    <p className='text-base'>
                                        Max wind speed: {forecastDay.day.maxwind_kph} kph
                                    </p>
                                </div>
                                <div className='dark:bg-[#323436] dark:text-white dark:border-violet-300 shrink-0 grow-0 flex flex-col bg-gray-900/[.02] items-start border-2 border-indigo-200 rounded-[20px] p-2 shadow-md mx-1 my-2'>
                                    <div className='text-base'>Precipitation: {forecastDay.day.totalprecip_mm} mm</div>
                                    <div className='text-base'>Average humidity: {forecastDay.day.avghumidity}%</div>
                                    <div className='text-base'>UV Index: {forecastDay.day.uv}</div>
                                </div>
                            </div>
                            
                            <div className='relative mx-auto mt-5 dark:text-white'>
                                <div className='flex dark:border-violet-500 justify-center items-center w-[230px] h-[90px] sm:w-[300px] sm:h-[120px] border-[3px] border-indigo-500/[.7] rounded-[10em/4em] border-b-0 border-r-0 border-l-0 mx-auto'>
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
                        </div>
                    }
                    <ul className='myscrollbar max-w-[100%] flex overflow-x-auto'>
                        {forecastDay !== undefined && forecastDay.hour.map(hour => (
                                <li
                                    className='dark:bg-[#323436] dark:text-white dark:border-violet-300 bg-gray-900/[.02] text-sm shrink-0 my-2 mx-1 border-2 border-indigo-200 rounded-[20px] px-2 py-1 shadow-md transition-all' 
                                    key={hour.time}
                                >
                                    <p>{hour.time.replace(forecastDay.date, '')}</p>
                                    <span className='relative'><img className='mx-auto w-[40px]' src={hour.condition.icon} alt="weather-icon" /></span>
                                    <p className='tracking-normal'>{hour.temp_c}°C</p>
                                </li>
                            ))
                        }
                    </ul>
                </>
            }
        </>
    );
};

export default MainPage;