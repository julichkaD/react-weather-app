import React from "react";
import FormattedDate from "./FormattedDate";
import WeatherIcon from "./WeatherIcon";
import WeatherTemperature from "./WeatherTemperature";


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
          <WeatherTemperature celsius={props.data.temperature} />
        </h2>
        <WeatherIcon code={props.data.icon} width={130} height={130} />
        
      </div>
      <div className="right-column">
        <h3>{props.data.description}</h3>
        <h3>Humidity: {props.data.humidity} %</h3>
      </div>
    </div>
  );
}
