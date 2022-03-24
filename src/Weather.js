import React from 'react';
import './Weather.css';

export default function Weather() {
  return (
    <div className="Weather">
      <form>
        <div className="row">
          <div className="col-6">
            <input
              type="search"
              placeholder="Enter the city"
              className="formControl"
            />
          </div>
          <div className="col-3">
            <input type="submit" value="Seach" />
          </div>
        </div>
      </form>

      <h1>Sarajevo</h1>
      <h4>Bosnia and Herzegovina</h4>
      <h6>3/24/2022, 8:00pm</h6>
      <div className="row">
        <div className="col-7">
          <h3>Clear</h3>
          <h3>Max:22 Min:10</h3>
          <h1>15 C F</h1>
          <img
            src="//ssl.gstatic.com/onebox/weather/64/sunny_s_cloudy.png"
            alt="Cloudly"
          />
        </div>
        <div className="col-5">
          <h5>Details:</h5>
          <ul>
            <li>Feels Like:20</li>
            <li>Humidity:20</li>
            <li>Visibility:20</li>
            <li>Wind speed:20</li>
            <li>Wind speed:20</li>
            <li>UV index:20</li>
          </ul>
        </div>
      </div>
    </div>
  );
}
