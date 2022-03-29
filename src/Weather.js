import React, {useState} from 'react';
import './Weather.css';
import axios from 'axios';

export default function Weather() {

const[weatherData, setWeatherData] = useState({ready:false});

  function handleResponse(response) {

console.log(response.data);
setWeatherData({
ready:true,
  city: response.data.name,
  feel_like: response.data.main.feels_like,
  humidity: response.data.main.humidity,
  temp: response.data.main.temp,
  min_temp:response.data.main.temp_min,
  max_temp: response.data.main.temp_max,
  country: response.data.sys.country,
  description:response.data.weather[0].description,
  wind: response.data.wind.speed,
  visibility: response.data.visibility,
  icon:response.data.weather[0].icon



})

  }


  if (weatherData.ready) {


return (
  <div className="Weather">
    <form className="form-inline form">
      <div className="col-sm-9">
        <input
          type="search"
          placeholder="Enter the city"
          className="form-control mb-2"
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
    <div className="location">
      <h1>
        {weatherData.city}{' '}
        <img
          src={weatherData.icon}
          alt={weatherData.description}
        />
      </h1>
      <div className="row">
        <div className="col-4 todayWeather">
          <h4>{weatherData.country}</h4>
          <h6>3/24/2022, 8:00pm</h6>

          <h4>{weatherData.description}</h4>
          <h4>
            <span className="minMax">Max:</span> {weatherData.max_temp}{' '}
            <sup className="unitsCurr"> ℃</sup>{' '}
            <span className="minMax">Min:</span> {weatherData.min_temp}{' '}
            <sup className="unitsCurr"> ℃</sup>
          </h4>
        </div>

        <div className="col-6">
          <h1 className="currTemp">
            {weatherData.temp}
            <sup className="units">℃ ℉ </sup>
          </h1>
        </div>
      </div>
    </div>
    <div className="row">
      <div className="col-10">
        <h5>Details:</h5>
        <ul className="detailsList d-flex justify-content-around">
          <li>Feels Like:{weatherData.feel_like}℃ </li>
          <li>Humidity:{weatherData.humidity}%</li>
          <li>Visibility:{weatherData.visibility}m</li>
          <li>Wind speed:{weatherData.wind}</li>

        </ul>
      </div>
    </div>
  </div>
);


  }
else {
  let apiKey = "860125333e4516777dadc25699e05462";
  let city ="London";
  let apiUrl =
    `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metrics`;
    axios.get(apiUrl).then(handleResponse);
return (
  "Loading..."
);
}
}
