import React, {useState, useEffect} from 'react';
import { useGetWeatherQuery } from './api/weather.api';
import ErrorBlock from './components/ErrorBlock';
import Loader from './components/Loader';


function App() {
	const [city, setCity] = useState('Moscow')
	const [darkMode, setDarkMode] = useState(false)
	const {isError, isLoading, data} = useGetWeatherQuery({search: city, aqi: 'yes', alerts: 'no'})

	useEffect(() => {
		console.log(darkMode)
	}, [darkMode])

	return (
		<div className="flex min-h-screen flex-row bg-gray-100 text-gray-800">
			<aside className="position-relative sidebar w-48 -translate-x-full transform bg-white p-4 transition-transform duration-150 ease-in md:translate-x-0 md:shadow-md">
				<div className="my-2 w-full border-b-4 border-indigo-100 text-center">
					<span className="font-mono text-xl font-bold tracking-widest">Forecast App</span>
				</div>
				<div className="my-4 font-mono text-base font-bold tracking-widest">
					<ul className='list-none max-h-[80vh] overflow-y-auto header-scrollbar box-border pr-1'>
						<li className='my-2 border-2 border-indigo-200 rounded-full px-2 py-1 hover:bg-indigo-100 hover:shadow-md shadow-sm transition-all cursor-pointer'>Moscow</li>
						<li className='my-2 border-2 border-indigo-200 rounded-full px-2 py-1 hover:bg-indigo-100 hover:shadow-md shadow-sm transition-all cursor-pointer'>London</li>
						<li className='my-2 border-2 border-indigo-200 rounded-full px-2 py-1 hover:bg-indigo-100 hover:shadow-md shadow-sm transition-all cursor-pointer'>London</li>
						<li className='my-2 border-2 border-indigo-200 rounded-full px-2 py-1 hover:bg-indigo-100 hover:shadow-md shadow-sm transition-all cursor-pointer'>London</li>
						<li className='my-2 border-2 border-indigo-200 rounded-full px-2 py-1 hover:bg-indigo-100 hover:shadow-md shadow-sm transition-all cursor-pointer'>London</li>
						<li className='my-2 border-2 border-indigo-200 rounded-full px-2 py-1 hover:bg-indigo-100 hover:shadow-md shadow-sm transition-all cursor-pointer'>London</li>
						<li className='my-2 border-2 border-indigo-200 rounded-full px-2 py-1 hover:bg-indigo-100 hover:shadow-md shadow-sm transition-all cursor-pointer'>London</li>
						<li className='my-2 border-2 border-indigo-200 rounded-full px-2 py-1 hover:bg-indigo-100 hover:shadow-md shadow-sm transition-all cursor-pointer'>London</li>
						<li className='my-2 border-2 border-indigo-200 rounded-full px-2 py-1 hover:bg-indigo-100 hover:shadow-md shadow-sm transition-all cursor-pointer'>London</li>
						<li className='my-2 border-2 border-indigo-200 rounded-full px-2 py-1 hover:bg-indigo-100 hover:shadow-md shadow-sm transition-all cursor-pointer'>London</li>
						<li className='my-2 border-2 border-indigo-200 rounded-full px-2 py-1 hover:bg-indigo-100 hover:shadow-md shadow-sm transition-all cursor-pointer'>London</li>
						<li className='my-2 border-2 border-indigo-200 rounded-full px-2 py-1 hover:bg-indigo-100 hover:shadow-md shadow-sm transition-all cursor-pointer'>London</li>
						<li className='my-2 border-2 border-indigo-200 rounded-full px-2 py-1 hover:bg-indigo-100 hover:shadow-md shadow-sm transition-all cursor-pointer'>London</li>
						<li className='my-2 border-2 border-indigo-200 rounded-full px-2 py-1 hover:bg-indigo-100 hover:shadow-md shadow-sm transition-all cursor-pointer'>London</li>
						<li className='my-2 border-2 border-indigo-200 rounded-full px-2 py-1 hover:bg-indigo-100 hover:shadow-md shadow-sm transition-all cursor-pointer'>London</li>
					</ul>
					<div className='absolute bottom-0 left-0 w-[100%] pb-4 pl-4 pt-2 flex items-center bg-white'>
						<p className="text-lg mr-3">Dark mode</p>
						<div className="relative inline-block w-10 mr-2 align-middle select-none transition duration-200 ease-in">
							<input 
								onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
									if(e.target.checked) setDarkMode(true)
									else setDarkMode(false)
								}}
								type="checkbox" 
								name="toggle" 
								id="toggle" 
								className="toggle-checkbox absolute block w-6 h-6 rounded-full bg-white border-4 appearance-none cursor-pointer"/>
							<label htmlFor="toggle" className="toggle-label block overflow-hidden h-6 rounded-full bg-gray-200 cursor-pointer"></label>
						</div>
					</div>
				</div>
			</aside>
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
