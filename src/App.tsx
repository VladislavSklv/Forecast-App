import React, {useState} from 'react';
import {Routes, Route} from 'react-router-dom';
import { useGetWeatherQuery } from './api/weather.api';
import Layout from './components/Layout';
import MainPage from './pages/MainPage';


function App() {
	const [city, setCity] = useState(1)
	const {isError, isLoading, data} = useGetWeatherQuery({search: city, aqi: 'yes', alerts: 'no'})

	return (
		<Routes>
			<Route path='/' element={<Layout setCity={setCity}/>}>
				<Route index element={<MainPage />}/>
			</Route>
		</Routes>
	);
}

export default App;

{/* 
					{isError && <ErrorBlock/>}
					{isLoading && <Loader/>}
					{data !== undefined && 
						<>
							
						</>
					}
				 */}