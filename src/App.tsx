import React, {useState, useEffect} from 'react';
import { useGetWeatherQuery } from './api/weather.api';
import ErrorBlock from './components/ErrorBlock';
import Loader from './components/Loader';
import Sidebar from './components/Sidebar';


function App() {
	const [city, setCity] = useState('Moscow')
	const [darkMode, setDarkMode] = useState(false)
	const [query, setQuery] = useState('')
	const {isError, isLoading, data} = useGetWeatherQuery({search: city, aqi: 'yes', alerts: 'no'})

	useEffect(() => {
		console.log(darkMode)
	}, [darkMode])

	return (
		<div className="flex min-h-screen flex-row bg-gray-100 text-gray-800">
			<Sidebar query={query} setQuery={setQuery} setDarkMode={setDarkMode}/>
			<main className="main -ml-48 flex flex-grow flex-col p-4 transition-all duration-150 ease-in md:ml-0">
				<div className="flex h-full items-center justify-center bg-white text-center text-5xl font-bold shadow-md">
					{isError && <ErrorBlock/>}
					{isLoading && <Loader/>}
					{data !== undefined && 
						<>
							
						</>
					}
				</div>
			</main>
		</div>
	);
}

export default App;
