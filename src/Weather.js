import React, { useState } from 'react';
import './Weather.css';
import axios from 'axios';
import WeatherInfo from './WeatherInfo';


export default function Weather(props) {
  const [weatherData, setWeatherData] = useState({ ready: false });
  const [city, setCity] = useState(props.defaultCity);

  function handleResponse(response) {
    console.log(response.data);
    setWeatherData({
      ready: true,
      city: response.data.name,
      feel_like: response.data.main.feels_like,
      humidity: response.data.main.humidity,
      temp: response.data.main.temp,
      min_temp: response.data.main.temp_min,
      max_temp: response.data.main.temp_max,
      country: response.data.sys.country,
      description: response.data.weather[0].description,
      wind: response.data.wind.speed,
      visibility: response.data.visibility,
      icon: response.data.weather[0].icon,
      date: new Date(response.data.dt * 1000),
      unit:"celsius"
    });
  }




  function searchCity() {
    let apiKey = '860125333e4516777dadc25699e05462';
    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
    axios.get(apiUrl).then(handleResponse);
  }

  function handleSubmit(event) {
    event.preventDefault();
    searchCity();
  }

  function handleCityChange(event) {
    setCity(event.target.value);
  }
  if (weatherData.ready) {
    return (
      <div className="Weather">
        <form className="form-inline form" onSubmit={handleSubmit}>
          <div className="col-sm-9">
            <input
              type="search"
              placeholder="Enter the city"
              className="form-control mb-2"
              onChange={handleCityChange}
            />
          </div>
          <div className="col-sm-2">
            <input
              type="submit"
              value="Search"
              className="form-control mb-2 btn-primary button"
            />
          </div>
        </form>

        <WeatherInfo res={weatherData} />
      </div>
    );
  } else {
    searchCity();
    return 'Loading...';
  }
}
