import React from 'react';
import './Weather.css';




export default function MinMaxTemperature(props) {

console.log('what is unit' + props.measurment);

if (props.measurment === 'celsius') {
  return (
    <h4 className='minMax'>
      <span className="minMax">Max:</span> {Math.round(props.max)}{' '}
      <sup className="unitsCurr"> °</sup>
      <span className="minMax">Min:</span> {Math.round(props.min)}{' '}
      <sup className="unitsCurr"> °</sup>
    </h4>
  );
} else {
  return (
    <h4 className='minMax'>
      <span className="minMax">Max:</span>{' '}
      {Math.round((props.max * 9) / 5 + 32)} <sup className="unitsCurr"> °</sup>
      <span className="minMax">Min:</span>{' '}
      {Math.round((props.min * 9) / 5 + 32)} <sup className="unitsCurr"> °</sup>
    </h4>
  );
}
}
