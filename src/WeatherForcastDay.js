import React from 'react';
import WeatherIcon from './WeatherIcon';

export default function WeatherForecastDay(props) {
  function MaxTemp() {
    let temp = Math.round(props.day.temp.max);
    return temp;
  }

  function MinTemp() {
    let temp = Math.round(props.day.temp.min);
    return temp;
  }

  function DayTemp() {
    let temp = Math.round(props.day.temp.day);
    return temp;
  }

  function Day() {
    let days = [
      'Sunday',
      'Monday',
      'Tuesday',
      'Wednesday',
      'Thursday',
      'Friday',
      'Saturday',
    ];

    let date = new Date(props.day.dt * 1000);
    let day = date.getDay();
    return days[day];
  }

  return (
    <div className="WeatherForecastDay">
      <div className="card">
        <div className="card-body cardBody">
          <h5 className="card-title">{Day()}</h5>
          <h5 className="card-title">{DayTemp()}°</h5>
          <WeatherIcon code={props.day.weather[0].icon} />
          <p className="card-text">
            <small className="text-muted">
              Min: {MinTemp()}° Max: {MaxTemp()}°{' '}
            </small>
          </p>
        </div>
      </div>
    </div>
  );
}
