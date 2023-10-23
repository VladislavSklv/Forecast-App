import React, {useEffect, useState} from 'react';
import {Routes, Route} from 'react-router-dom';
import { useLazyGetWeatherQuery } from './api/weather.api';
import Layout from './components/Layout';
import MainPage from './pages/MainPage';


function App() {
	const [city, setCity] = useState('')
	const [trigger, {isError, isLoading, data}] = useLazyGetWeatherQuery()

	useEffect(() => {
		if (city.length > 0) trigger({search: city, aqi: 'yes', alerts: 'no'})
	}, [city])

	return (
		<Routes>
			<Route path='/' element={<Layout setCity={setCity}/>}>
				<Route index element={<MainPage city={city} isLoading={isLoading} isError={isError} data={data} />}/>
			</Route>
		</Routes>
	);
}

export default App;