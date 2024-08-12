import axios from 'axios';
import './App.css';
import SearchForm from './components/searchForm';
import WeatherDisplay from './components/weatherDisplay';
import { useState } from 'react';

const App = () => {
  const [location, setLocation] = useState('');
  const [weatherData, setWeatherData] = useState(null);
  const [error, setError] = useState(null);

  const fetchWeatherData = async (location) => {
    const API_KEY = 'c75a52ccc364470289a123628241307';
    const URL = `http://api.weatherapi.com/v1/current.json?key=${API_KEY}&q=${location}`;

    try {
      const response = await axios.get(URL);
      console.log(response)
      setWeatherData(response.data)
      setError(null);
    } catch (err) {
      setError('Location not found. Please try again');
      setWeatherData(null);
    }
  };

  return (
    <div className='App'>
      <SearchForm setLocation={setLocation} fetchWeatherData={fetchWeatherData} />
      {error && <p className='error'>{error}</p>}
      {weatherData && <WeatherDisplay weatherData={weatherData} />}
    </div>
  );
};

export default App;
