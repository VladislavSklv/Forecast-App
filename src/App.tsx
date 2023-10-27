import React, {useEffect, useState} from 'react';
import {Routes, Route} from 'react-router-dom';
import { useLazyGetWeatherQuery } from './api/weather.api';
import Layout from './components/Layout';
import MainPage from './pages/MainPage';

function App() {
	const [city, setCity] = useState('')
	const [trigger, {isError, isLoading, data}] = useLazyGetWeatherQuery()
	const [isSidebar, setIsSidebar] = useState(false)
	const [darkMode, setDarkMode] = useState(JSON.parse(localStorage.getItem('theme')!) === 'dark')

	useEffect(() => {
		if (city.length > 0) trigger({search: city, aqi: 'yes', alerts: 'no'})
	}, [city])

	useEffect(() => {
		if(darkMode === true) localStorage.setItem('theme', JSON.stringify('dark'));
		else localStorage.setItem('theme', JSON.stringify('light')); 
	}, [darkMode])
	

	if(darkMode) document.body.classList.add('dark')
	else document.body.classList.remove('dark')

	return (
		<Routes>
			<Route path='/' element={<Layout darkMode={darkMode} setDarkMode={setDarkMode} isSidebar={isSidebar} setIsSidebar={setIsSidebar} chosenCity={city} setCity={setCity}/>}>
				<Route index element={<MainPage darkMode={darkMode} setIsSidebar={setIsSidebar} city={city} isLoading={isLoading} isError={isError} data={data} />}/>
			</Route>
		</Routes>
	);
}

export default App;