import React from "react";
import WeatherIcon from "./WeatherIcon";


export default function DaysForecast(props) {
    return (
      <div className="daysForecast">
        <div className="day">
          <h3>Monday</h3>
          <WeatherIcon code="01d" />
          <div className="temperature-day">
            <span className="max-temp">19˚ /</span>
            <span className="min-temp">10˚</span>
          </div>
        </div>
        <div className="day">
          <h3>Tuesday</h3>

          <h4>9˚C</h4>
        </div>
        <div className="day">
          <h3>Wednesday</h3>
          <WeatherIcon code="01d" />
        </div>
        <div className="day">
          <h3>Thursday</h3>
        </div>
        <div className="day">
          <h3>Friday</h3>
        </div>
      </div>
    );
}