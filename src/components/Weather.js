import React from 'react';

function Weather(props) {
  const {
    location,
    current
  } = props;

  return (
    <div className="weather">
      <h1>{`${location.name}, ${location.country}`}</h1>
      <img src={current.condition.icon} alt={current.condition.text}/>
      <p>{current.condition.text}</p>
      <span>{`${current.temp_c} °C`}</span>

    </div>
  );
}
export default Weather;
