import React, { useState } from "react";

function WeatherTemperature(props) {
  const [unit, setUnit] = useState("celsius");

  function showFahrenheit(event) {
    event.preventDefault();
    setUnit("fahrenheit");
  }

  function showCelsius(event) {
    event.preventDefault();
    setUnit("celsius");
  }

  if (unit === "celsius") {
    return (
      <div className="WeatherTemperature">
        {Math.round(props.celsius)}
        <span>
          ˚C /{" "}
          <a href="/" onClick={showFahrenheit}>
            ˚F
          </a>{" "}
        </span>
      </div>
    );
  } else {
    let fahrenheit = (props.celsius * 9) / 5 + 32;
    return (
      <div className="WeatherTemperature">
        {Math.round(fahrenheit)}
        <span>
          <a href="/" onClick={showCelsius}>
            ˚C
          </a>{" "}
          / ˚F
        </span>
      </div>
    );
  }
}

export default WeatherTemperature;
