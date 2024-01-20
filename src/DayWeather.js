import React from "react";
import WeatherIcon from "./WeatherIcon";

function DayWeather(props) {
  function day() {
    let date = new Date(props.data.time * 1000);
    let day = date.getDay();
      let days = [
        "Sunday",
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday",
        "Saturday",
      ];
    return days[day];
  }
  return (
    <div className="daysForecast">
      <div className="day">
        <h3>{day()}</h3>
        {/* <WeatherIcon state = {forecast[0].condition.icon} width={90} height={90} /> */}
        <WeatherIcon state="sunny" width={90} height={90} />
        <div className="temperature-day">
          <span className="max-temp">
            {Math.round(props.data.temperature.maximum)}˚ /
          </span>
          <span className="min-temp">
            {Math.round(props.data.temperature.minimum)}˚{" "}
          </span>
        </div>
      </div>
    </div>
  );
}

export default DayWeather;
