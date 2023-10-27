import React from 'react';
import HourItem from './HourItem';
import { IForecastday } from '../models/models';

interface hourItemsListProps {
    forecastDay: IForecastday | undefined
}

const HourItemsList:React.FC<hourItemsListProps> = ({forecastDay}) => {
    return (
        <ul className='myscrollbar max-w-[100%] flex overflow-x-auto'>
            {forecastDay !== undefined && forecastDay.hour.map(hour => (
                    <HourItem key={hour.time} forecastDay={forecastDay} hour={hour}/>
                ))
            }
        </ul>
    );
};

export default HourItemsList;