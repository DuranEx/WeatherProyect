import React, { useState, useEffect } from 'react';
import axios from 'axios';

const Weather = () => {
  const [weatherData, setWeatherData] = useState(null);
  const [city, setCity] = useState('Madrid');

  useEffect(() => {
    const fetchWeather = async () => {
      const apiKey = '4297df3d78794fef85d90357241810';
      try {
        const response = await axios.get(`http://api.weatherapi.com/v1/current.json?key=${apiKey}&q=${city}&aqi=no`);
        setWeatherData(response.data);
        console.log(response.data);
      } catch (error) {
        console.error('Error fetching weather data:', error);
      }
    };
    fetchWeather();
  }, [city]);

  return (
    <div>
      <h1>Weather in {city}</h1>
      {weatherData ? (
        <div>
          <p>Temperature: {weatherData.current.temp_c}°C</p>
          <p>Weather: {weatherData.current.condition.text}</p>
        </div>
      ) : (
        <p>Loading...</p>
      )}
      <input
        type="text"
        value={city}
        onChange={(e) => setCity(e.target.value)}
        placeholder="Enter city"
      />
    </div>
  );
};

export default Weather;