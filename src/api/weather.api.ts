import {createApi, fetchBaseQuery} from '@reduxjs/toolkit/query/react'
import { ICity, IGetWeatherProps, IWeather } from '../models/models'

export const weatherApi = createApi({
    reducerPath: 'weatherApi',
    baseQuery: fetchBaseQuery({
        baseUrl: 'http://api.weatherapi.com/v1/',
        headers: {
            key: 'c8417e58ab8a40ebafa212717232710' 
        }
    }), 
    endpoints: build => ({
        getWeather: build.query<IWeather, IGetWeatherProps>({
            query: ({search, aqi, alerts}: {search: string, aqi: string, alerts: string}) => ({
                url: 'forecast.json',
                params: {
                    q: search,
                    aqi,
                    alerts,
                    days: 3
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

export const {useLazyGetWeatherQuery, useGetCitiesQuery} = weatherApi