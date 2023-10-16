import {createApi, fetchBaseQuery} from '@reduxjs/toolkit/query/react'
import { IGetWeatherProps } from '../models/models'

export const weatherApi = createApi({
    reducerPath: 'weatherApi',
    baseQuery: fetchBaseQuery({
        baseUrl: 'http://api.weatherapi.com/v1/'
    }), 
    endpoints: build => ({
        getWeather: build.query<any, IGetWeatherProps>({
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