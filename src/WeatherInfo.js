import React from 'react';
import FormattedDate from './FormattedDate';

export default function WeatherInfo(props) {
  let dataAll = props.res;
  return (
    <div className="WeatherInfo">
      <div className="location">
        <h1>
          {dataAll.city}{' '}
          <img
            src={dataAll.icon}
            alt={dataAll.description}
          />
        </h1>
        <div className="row">
          <div className="col-4 todayWeather">
            <h4>{dataAll.country}</h4>
            <h6>
              <FormattedDate date={dataAll.date} />
            </h6>

            <h4>{dataAll.description}</h4>
            <h4>
              <span className="minMax">Max:</span> {dataAll.max_temp}{' '}
              <sup className="unitsCurr"> ℃</sup>{' '}
              <span className="minMax">Min:</span> {dataAll.min_temp}{' '}
              <sup className="unitsCurr"> ℃</sup>
            </h4>
          </div>

          <div className="col-6">
            <h1 className="currTemp">
              {dataAll.temp}
              <sup className="units">℃ ℉ </sup>
            </h1>
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
