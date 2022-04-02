import React, {useState} from 'react';
import WeatherTemperature from './WeatherTemperature';



export default function MinMaxTemperature(props) {
const [units, setUnits] = useState(props.measurement);

function convertToFahr(event) {
  event.preventDefault();
  setUnits('fahrenheit');
}
function convertToCel(event) {
  event.preventDefault();
}

if (units === 'celsius')
 {
    return (
      <h4>
        <span className="minMax">Max:</span> {props.max}{' '}
        <sup className="unitsCurr"> °</sup>
        <span className="minMax">Min:</span> {props.min}{' '}
        <sup className="unitsCurr"> °</sup>
      </h4>
    );
  } else {
    return (
      <h4>
        <span className="minMax">Max:</span>{' '}
        {Math.round((props.max * 9) / 5 + 32)}{' '}
        <sup className="unitsCurr"> °</sup>
        <span className="minMax">Min:</span>{' '}
        {Math.round((props.min * 9) / 5 + 32)}{' '}
        <sup className="unitsCurr"> °</sup>
      </h4>
    );
  }
}
