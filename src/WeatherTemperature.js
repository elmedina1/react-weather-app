import React, { useState } from 'react';


export default function WeatherTemperature(props) {
  const [units, setUnits] = useState(props.measurement);

  function convertToFahr(event) {
    event.preventDefault();
    setUnits('fahrenheit');
    props.onMeasureChange();
  }
  function convertToCel(event) {
    event.preventDefault();
  }

  if (units === 'celsius') {
    return (
      <h1 className="currTemp">
        {Math.round(props.celsius)}

        <sup className="units">
          ℃ |{' '}
          <a href="/" onClick={convertToFahr}>
            ℉{' '}
          </a>
        </sup>
      </h1>
    );
  } else {
    return (
      <h1 className="currTemp">
        {Math.round((props.celsius * 9) / 5 + 32)}

        <sup className="units">
          <a href="/" onClick={convertToCel}>
            ℃
          </a>{' '}
          | ℉{' '}
        </sup>
      </h1>
    );
  }
}
