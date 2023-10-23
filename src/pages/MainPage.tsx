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
            {!isLoading && data === undefined && <p>You`ve not chosen any city</p>}
            {city.length > 0 && data !== undefined && 
                <div className='relative'>
                    <div>{data.location.country}, {data.location.region}, {data.location.name}</div>
                    <div className='text-sm text-gray-500'>{data.forecast.forecastday[0].date}</div>
                    <ul className='myscrollbar w-[70vw] relative flex overflow-x-auto'>
                        {data.forecast.forecastday.map(day => (
                            <li
                                onClick={() => {
                                    setForecastDay(day)
                                }}
                                className='text-sm shrink-0 my-2 mx-1 border-2 border-indigo-200 rounded-full px-2 py-1 hover:bg-indigo-100 hover:shadow-md shadow-sm transition-all cursor-pointer' 
                                key={day.date}
                            >{day.date}</li>
                        ))}
                    </ul>
                    <ul className='myscrollbar w-[70vw] relative flex overflow-x-auto'>
                        {forecastDay !== undefined && forecastDay.hour.map(hour => (
                                <li
                                    className='text-sm shrink-0 my-2 mx-1 border-2 border-indigo-200 rounded-full px-2 py-1 hover:bg-indigo-100 hover:shadow-md shadow-sm transition-all cursor-pointer' 
                                    key={hour.time}
                                >{hour.time.replace(forecastDay.date, '')}</li>
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
                            <div>{forecastDay.day.avgtemp_c}</div>
                        </div>
                    }
                </div>
            }
        </>
    );
};

export default MainPage;