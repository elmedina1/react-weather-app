import React, { useState } from 'react';
import FormattedDate from './FormattedDate';
import WeatherIcon from './WeatherIcon';
import WeatherTemperature from './WeatherTemperature';
import MinMaxTemperature from './MinMaxTemperature';
import FeelsLike from './FeelsLike';
import './Weather.css';


export default function WeatherInfo(props) {

 const countriesQuery = require('countries-code');

 console.log(countriesQuery.getCountry("Ba"));

  let dataAll = props.res;
  let [unitM, setUnit] = useState(dataAll.unit);
console.log(countriesQuery.getCountry(dataAll.country));
  

  function handleUnitsChange(event) {
    setUnit('farenheit');
  }

  function resetToCelcius(event) {
    setUnit('celsius');
  }

  return (
    <div className="WeatherInfo">
      <div className="location">
        <h1>
          {dataAll.city} <WeatherIcon code={dataAll.icon} />
        </h1>
        <div className="row">
          <div className="col-4 todayWeather">
            <h4>{countriesQuery.getCountry(dataAll.country)}</h4>
            <h6>
              <FormattedDate date={dataAll.date} />
            </h6>

            <h4 className="desc">{dataAll.description}</h4>

            <MinMaxTemperature
              max={dataAll.max_temp}
              min={dataAll.min_temp}
              measurment={unitM}
            />
          </div>

          <div className="col-6">
            <WeatherTemperature
              celsius={dataAll.temp}
              measurement={unitM}
              onMeasureChange={handleUnitsChange}
              resetBack={resetToCelcius}
            />
          </div>
        </div>
      </div>
      <div className="row">
        <div className="col-10">
          <h5>Details:</h5>
          <ul className="detailsList d-flex justify-content-around">
            <FeelsLike feels={dataAll.feel_like} unitC={unitM} />
            <li>Humidity:{' '}{dataAll.humidity}%</li>
            <li>Visibility:{' '}{Math.round(dataAll.visibility/1000)}km</li>
            <li>Wind speed:{' '}{dataAll.wind}m/s</li>
          </ul>
        </div>
      </div>
    </div>
  );
}
