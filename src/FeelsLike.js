import React from 'react';

export default function FeelsLike(props) {
  if (props.unitC === 'celsius')
    return <li>Feels Like: {Math.round(props.feels)}</li>;
  else return <li>Feels Like: {Math.round((props.feels * 9) / 5 + 32)} </li>;
}
