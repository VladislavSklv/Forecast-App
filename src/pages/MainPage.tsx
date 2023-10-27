import React, { useEffect, useState } from 'react';
import { IForecastday, IWeather } from '../models/models';
import Loader from '../components/Loader';
import ErrorBlock from '../components/ErrorBlock';
import Hamburger from '../components/UI/Hamburger';
import DayItemsList from '../components/DayItemsList';
import InfoBlock from '../components/InfoBlock';
import AstroBlock from '../components/AstroBlock';
import HourItemsList from '../components/HourItemsList';

interface mainPageProps {
    data: IWeather | undefined
    isError: boolean
    isLoading: boolean
    isFetching: boolean
    city: string
    setIsSidebar: React.Dispatch<React.SetStateAction<boolean>>
    darkMode: boolean
}

const MainPage: React.FC<mainPageProps> = ({data, isError, isLoading, city, setIsSidebar, darkMode, isFetching}) => {
    const [forecastDay, setForecastDay] = useState<IForecastday | undefined>(data?.forecast.forecastday[0])

    useEffect(() => {
        if(data !== undefined) {
            setForecastDay(data.forecast.forecastday[0])
        }
    }, [data])

    return (
        <>
            <Hamburger setIsSidebar={setIsSidebar}/>
            {isError && city.length > 0 && <ErrorBlock/>}
            {(isLoading || isFetching) && <div className='h-full w-full flex justify-center items-center'><Loader/></div>}
            {!isLoading && !isFetching && city.length === 0 && <div className='dark:text-white flex justify-center items-center h-[100%] w-[100%] text-center'>You`ve not chosen any city</div>}
            {!isLoading && !isFetching && city.length > 0 && data !== undefined && 
                <>
                    <div className='flex flex-col items-center mx-auto'>
                        <div className='dark:text-white text-center text-xl mx-auto w-[calc(100%-4rem)] md:w-full'>{data.location.country.length > 0 && data.location.country + ', '}{data.location.region.length > 0 && data.location.region + ', '}{data.location.name.length > 0 && data.location.name}</div>
                        <div className='text-sm dark:text-gray-400 text-gray-500 text-center mx-auto'>Today is {data.forecast.forecastday[0].date.replaceAll('-', '.')}</div>
                        <DayItemsList data={data} forecastDay={forecastDay} setForecastDay={setForecastDay}/>
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
                                <InfoBlock 
                                    info={[`Min temp: ${forecastDay.day.mintemp_c}°C`, `Max temp: ${forecastDay.day.maxtemp_c}°C`, `Max wind speed: ${forecastDay.day.maxwind_kph} kph`]}
                                />
                                <InfoBlock 
                                    info={[`Precipitation: ${forecastDay.day.totalprecip_mm} mm`, `Average humidity: ${forecastDay.day.avghumidity}%`, `UV Index: ${forecastDay.day.uv}`]}
                                />
                            </div>
                            
                            <AstroBlock darkMode={darkMode} forecastDay={forecastDay}/>
                        </div>
                    }
                    <HourItemsList forecastDay={forecastDay}/>
                </>
            }
        </>
    );
};

export default MainPage;