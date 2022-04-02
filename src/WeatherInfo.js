import React from 'react';
import FormattedDate from './FormattedDate';
import WeatherIcon from './WeatherIcon';
import WeatherTemperature from './WeatherTemperature';
import MinMaxTemperature from './MinMaxTemperature';

export default function WeatherInfo(props) {
  let dataAll = props.res;
  return (
    <div className="WeatherInfo">
      <div className="location">
        <h1>
          {dataAll.city} <WeatherIcon code={dataAll.icon} />
        </h1>
        <div className="row">
          <div className="col-4 todayWeather">
            <h4>{dataAll.country}</h4>
            <h6>
              <FormattedDate date={dataAll.date} />
            </h6>

            <h4>{dataAll.description}</h4>

            <MinMaxTemperature
              max={dataAll.max_temp}
              min={dataAll.min_temp}
              statt={"celsius"}
            />
          </div>

          <div className="col-6">
            <WeatherTemperature celsius={dataAll.temp} />
          </div>
        </div>
      </div>
      <div className="row">
        <div className="col-10">
          <h5>Details:</h5>
          <ul className="detailsList d-flex justify-content-around">
            <li>Feels Like:{dataAll.feel_like}℃ </li>
            <li>Humidity:{dataAll.humidity}%</li>
            <li>Visibility:{dataAll.visibility}m</li>
            <li>Wind speed:{dataAll.wind}</li>
          </ul>
        </div>
      </div>
    </div>
  );
}
