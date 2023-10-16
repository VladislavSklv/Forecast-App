import {createApi, fetchBaseQuery} from '@reduxjs/toolkit/query/react'
import { IGetWeatherProps, IWeather } from '../models/models'

export const weatherApi = createApi({
    reducerPath: 'weatherApi',
    baseQuery: fetchBaseQuery({
        baseUrl: 'http://api.weatherapi.com/v1/1111',
        headers: {
            key: '8313190bb7fe4f09beb154535231610'
        }
    }), 
    endpoints: build => ({
        getWeather: build.query<IWeather, IGetWeatherProps>({
            query: ({search, aqi, alerts}: {search: string, aqi: string, alerts: string}) => ({
                url: 'forecast.json',
                params: {
                    q: search,
                    aqi,
                    alerts
                }
            })
        })
    })
})

export const {useGetWeatherQuery} = weatherApi