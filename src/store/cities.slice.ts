import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { ICity } from "../models/models";

const LS_FAV_KEY ='rcc'

const initialState: {cities: ICity[]} = {cities: [...JSON.parse(localStorage.getItem(LS_FAV_KEY) ?? '[]')]}

export const chosenCities = createSlice({
    name: 'chosenCities',
    initialState,
    reducers: {
        addCity(state, action: PayloadAction<ICity>) {
            state.cities.push(action.payload);
            localStorage.setItem(LS_FAV_KEY, JSON.stringify(state.cities));
        },
        removeCity(state, action: PayloadAction<ICity>) {
            state.cities = state.cities.filter(f => f.id !== action.payload.id);
            localStorage.setItem(LS_FAV_KEY, JSON.stringify(state.cities));
        },
    }
})


export const chosenCitiesActions = chosenCities.actions;
export const chosenCitiesReducer = chosenCities.reducer;