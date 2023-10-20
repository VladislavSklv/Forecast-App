import React from 'react';
import { IWeather } from '../models/models';
import Loader from '../components/Loader';
import ErrorBlock from '../components/ErrorBlock';

interface mainPageProps {
    data: IWeather | undefined
    isError: boolean
    isLoading: boolean
    city: string
}

const MainPage: React.FC<mainPageProps> = ({data, isError, isLoading, city}) => {
    return (
        <>
            {isError && city.length > 0 && <ErrorBlock/>}
            {isLoading && <Loader/>}
            {!isLoading && data === undefined && <p>You`ve not chosen any city</p>}
            {city.length > 0 && data !== undefined && 
                <>
                    <div>{data.location.country}, {data.location.region}, {data.location.name}</div>
                    <div className='text-sm text-gray-500'>{data.forecast.forecastday[0].date}</div>
                </>
            }
        </>
    );
};

export default MainPage;