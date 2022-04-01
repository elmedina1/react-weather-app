import React from 'react';

export default function FormattedDate(props) {
  var days = [
    'Sunday',
    'Monday',
    'Tuesday',
    'Wednesday',
    'Thursday',
    'Friday',
    'Saturday',
  ];

  var months = [
    'January',
    'February',
    'March',
    'April',
    'May',
    'June',
    'July',
    'August',
    'September',
    'October',
    'November',
    'December',
  ];
  let day = props.date.getDay();
  let date = props.date.getDate();
  let month = props.date.getMonth();
  let hours = props.date.getHours();
  let minutes = props.date.getMinutes();

  if (hours < 10) {
    hours = `0${hours}`;
  }

  if (minutes < 10) {
    minutes = `0${minutes}`;
  }

  return (
    <div>
      {days[day]}, {date} {months[month]} {hours}:{minutes}
    </div>
  );
}
