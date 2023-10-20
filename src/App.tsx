import React, {useEffect, useState} from 'react';
import {Routes, Route} from 'react-router-dom';
import { useGetWeatherQuery } from './api/weather.api';
import Layout from './components/Layout';
import MainPage from './pages/MainPage';


function App() {
	const [city, setCity] = useState('')
	const {isError, isLoading, data} = useGetWeatherQuery({search: city, aqi: 'yes', alerts: 'no'})

	useEffect(() => {
		console.log(city)
		console.log(data)
	} , [data])

	return (
		<Routes>
			<Route path='/' element={<Layout setCity={setCity}/>}>
				<Route index element={<MainPage city={city} isLoading={isLoading} isError={isError} data={data} />}/>
			</Route>
		</Routes>
	);
}

export default App;