import React, { useState, useEffect } from 'react';
import './WeatherForecast.css';
import axios from 'axios';
import WeatherForcastDay from './WeatherForcastDay';

export default function WeatherForecast(props) {
  let [loaded, setLoaded] = useState(false);
  let [forecast, setForecast] = useState(null);

  useEffect(() => {
    setLoaded(false);
  }, [props]);

  function handleResponse(response) {
    console.log('Odgovor');
    console.log(response.data);
    setForecast(response.data.daily);
    setLoaded(true);
  }

  if (loaded) {
    return (
      <div className="WeatherForecast">
        <div className="card-group d-flex justify-content-around grupa">
          {forecast.map(function (dailyForecast, index) {
            if (index > 0 && index < 6) {
              return (
                <div key={index}>
                  <WeatherForcastDay day={dailyForecast} />
                </div>
              );
            }
            else {
              return(null);
            }
          })}
        </div>
      </div>
    );
  } else {
    let apiKey = '860125333e4516777dadc25699e05462';
    let lati = props.lat;
    let loni = props.long;

    let apiUrl = `https://api.openweathermap.org/data/2.5/onecall?lat=${lati}&lon=${loni}&appid=${apiKey}&units=metric`;

    axios.get(apiUrl).then(handleResponse);

    return null;
  }
}
