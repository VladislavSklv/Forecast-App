import React from 'react';
import DayItem from './DayItem';
import { IForecastday, IWeather } from '../models/models';

interface dayItemsList {
    forecastDay: IForecastday | undefined
    data: IWeather
    setForecastDay: React.Dispatch<React.SetStateAction<IForecastday | undefined>>
}

const DayItemsList:React.FC<dayItemsList> = ({forecastDay, data, setForecastDay}) => {
    return (
        <ul className='myscrollbar max-w-[100%] relative flex flex-wrap justify-center items-center mx-auto'>
            {forecastDay !== undefined && data.forecast.forecastday.map(day => (
                <DayItem key={day.date} day={day} forecastDay={forecastDay} setForecastDay={setForecastDay}/>
            ))}
        </ul>
    );
};

export default DayItemsList;