import {createApi, fetchBaseQuery} from '@reduxjs/toolkit/query/react'
import { ICity, IGetWeatherProps, IWeather } from '../models/models'

export const weatherApi = createApi({
    reducerPath: 'weatherApi',
    baseQuery: fetchBaseQuery({
        baseUrl: 'http://api.weatherapi.com/v1/',
        headers: {
            key: '8313190bb7fe4f09beb154535231610'
        }
    }), 
    endpoints: build => ({
        getWeather: build.query<IWeather, IGetWeatherProps>({
            query: ({search, aqi, alerts}: {search: number, aqi: string, alerts: string}) => ({
                url: '123/forecast.json',
                params: {
                    q: search,
                    aqi,
                    alerts
                }
            })
        }),
        getCities: build.query<ICity[], {query: string}>({
            query: ({query}: {query: string}) => ({
                url: 'search.json',
                params: {
                    q: query
                }
            })
        })
    })
})

export const {useGetWeatherQuery, useGetCitiesQuery} = weatherApi