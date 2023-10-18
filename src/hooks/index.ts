import { TypedUseSelectorHook, useDispatch, useSelector } from "react-redux";
import { RootState } from "../store/store";
import { bindActionCreators } from "@reduxjs/toolkit";
import { chosenCitiesActions } from "../store/cities.slice";

export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;

const actions = {
    ...chosenCitiesActions
}

export const useActions = () => {
    const dispatch = useDispatch()
    return bindActionCreators(actions, dispatch)
}