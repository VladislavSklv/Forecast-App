import { configureStore } from "@reduxjs/toolkit";
import { weatherApi } from "../api/weather.api";
import { setupListeners } from "@reduxjs/toolkit/query";
import { chosenCitiesReducer } from "./cities.slice";

export const store = configureStore({
    reducer: {
        [weatherApi.reducerPath]: weatherApi.reducer,
        chosenCities: chosenCitiesReducer
        
    },
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware().concat(weatherApi.middleware),
})

setupListeners(store.dispatch)

export type RootState = ReturnType<typeof store.getState>