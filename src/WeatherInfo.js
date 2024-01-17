import React from "react";
import FormattedDate from "./FormattedDate";
import WeatherIcon from "./WeatherIcon";

export default function WeatherInfo(props) {
  return (
    <div className="WeatherInfo">
      <div className="left-column">
        <h3>
          <FormattedDate date={props.data.date} />
        </h3>
        <h3> Wind: {props.data.wind} km/h</h3>
      </div>
      <div className="center">
        <h1>{props.data.city}</h1>
        <h2>
          {Math.round(props.data.temperature)}
          <span>˚C</span>/<span>˚F</span>
        </h2>
        <WeatherIcon code ={props.data.icon} />
      </div>
      <div className="right-column">
        <h3>{props.data.description}</h3>
        <h3>Humidity: {props.data.humidity} %</h3>
      </div>
    </div>
  );
}
