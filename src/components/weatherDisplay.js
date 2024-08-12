import React from 'react'

const WeatherDisplay = ({weatherData}) =>{
    return (
        <div className='weather-display'>
            <h2>{weatherData.location.name}</h2>
            <p>Temperature: {weatherData.current.temp_c} C or {weatherData.current.temp_f} F</p>
            <p>Feels like: {weatherData.current.feelslike_c} C or {weatherData.current.feelslike_f} F</p>
            <p>Weather: {weatherData.current.condition.text} </p>
            <p>Humidity: {weatherData.current.humidity}</p>
            <p>Wind Speed: {weatherData.current.wind_mph} m/s</p>
        </div>
    );
};

export default WeatherDisplay