import React from "react";
import WeatherIcon from "./WeatherIcon";

function DayWeather(props) {
  function day() {
    let date = new Date(props.data.dt * 1000);
    let day = date.getDay();
    let days = [
      "Sun",
      "Mon",
      "Tues",
      "Wed",
      "Thur",
      "Fr",
      "Sat",
    ];
    return days[day];
  }
  return (
    <div className="daysForecast">
      <div className="day">
        <h3>{day()}</h3>
        {/* Icon does not appear  */}
        <WeatherIcon code={props.data.weather[0].icon} width={90} height={90} />

        <div className="temperature-day">
          <span className="max-temp">{Math.round(props.data.temp.max)}˚/</span>
          <span className="min-temp">{Math.round(props.data.temp.min)}˚</span>
        </div>
      </div>
    </div>
  );
}

export default DayWeather;
