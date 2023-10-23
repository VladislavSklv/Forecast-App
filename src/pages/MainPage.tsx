import React, { useEffect, useState } from 'react';
import { IForecastday, IHour, IWeather } from '../models/models';
import Loader from '../components/Loader';
import ErrorBlock from '../components/ErrorBlock';

interface mainPageProps {
    data: IWeather | undefined
    isError: boolean
    isLoading: boolean
    city: string
}

const MainPage: React.FC<mainPageProps> = ({data, isError, isLoading, city}) => {
    const [forecastDay, setForecastDay] = useState<IForecastday | undefined>(data?.forecast.forecastday[0])

    useEffect(() => {
        if(data !== undefined) {
            setForecastDay(data.forecast.forecastday[0])
        }
    }, [data])

    return (
        <>
            {isError && city.length > 0 && <ErrorBlock/>}
            {isLoading && <Loader/>}
            {!isLoading && data === undefined || city.length === 0 && <div className='flex justify-center items-center h-[100%]'>You`ve not chosen any city</div>}
            {city.length > 0 && data !== undefined && 
                <div className='relative'>
                    <div>{data.location.country.length > 0 && data.location.country + ', '}{data.location.region.length > 0 && data.location.region + ', '}{data.location.name.length > 0 && data.location.name}</div>
                    <div className='text-sm text-gray-500'>Today is {data.forecast.forecastday[0].date.replaceAll('-', '.')}</div>
                    <ul className='myscrollbar w-[70vw] relative flex overflow-x-auto'>
                        {data.forecast.forecastday.map(day => (
                            <li
                                onClick={() => {
                                    setForecastDay(day)
                                }}
                                className='text-sm shrink-0 my-2 mx-1 border-2 border-indigo-200 rounded-full px-2 py-1 hover:bg-indigo-100 hover:shadow-md shadow-sm transition-all cursor-pointer' 
                                key={day.date}
                            >{day.date.replaceAll('-', '.')}</li>
                        ))}
                    </ul>
                    <ul className='myscrollbar w-[70vw] relative flex overflow-x-auto'>
                        {forecastDay !== undefined && forecastDay.hour.map(hour => (
                                <li
                                    className='text-sm shrink-0 my-2 mx-1 border-2 border-indigo-200 rounded-[20px] px-2 py-1 shadow-sm transition-all' 
                                    key={hour.time}
                                >
                                    <p>{hour.time.replace(forecastDay.date, '')}</p>
                                    <span className='relative'><img className='mx-auto w-[40px]' src={hour.condition.icon} alt="weather-icon" /></span>
                                    <p className='tracking-normal'>{hour.temp_c}°C</p>
                                </li>
                            ))
                        }
                    </ul>
                    {forecastDay !== undefined && 
                        <div>
                            <div>Average tempreture: {forecastDay.day.avgtemp_c}°C</div>
                            <div>Min temp: {forecastDay.day.mintemp_c}°C</div>
                            <div>Max temp: {forecastDay.day.maxtemp_c}°C</div>
                            {forecastDay.day.daily_will_it_rain 
                            ?
                                <div>It`ll rain with chance: {forecastDay.day.daily_chance_of_rain}%</div>
                            :
                                <div>It won`t rain with chance: {100 - forecastDay.day.daily_chance_of_rain}%</div>
                            }
                            {forecastDay.day.daily_will_it_snow
                            ?
                                <div>It`ll snow with chance: {forecastDay.day.daily_chance_of_snow}%</div>
                            :
                                <div>It won`t snow with chance: {100 - forecastDay.day.daily_chance_of_snow}%</div>
                            }
                        </div>
                    }
                </div>
            }
        </>
    );
};

export default MainPage;