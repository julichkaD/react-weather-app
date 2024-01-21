import React, { useState, useEffect } from "react";
import DayWeather from "./DayWeather";
import axios from "axios";

export default function DaysForecast(props) {
  const [loaded, setLoaded] = useState(false);
  const [forecast, setForecast] = useState(null);

  function handleRequest(response) {
    console.log(response.data);
    setLoaded(true);
    setForecast(response.data.daily);
  }

  useEffect(() => {
    setLoaded(false);
  }, [props.coordinates]);

  if (loaded) {
    return (
      <div className="daysForecast">
        {forecast.map(function (data, index) {
          if (index < 5) {
            return <DayWeather data={data} key={index} />;
          }else {
            return null;
          }
        })}
      </div>
    );
  } else {
    let apiKey = "96ad27349a64ea1dcdfbe6f4d458c085";
    let lon = props.coordinates.lon;
    let lat = props.coordinates.lat;
    let apiUrl = `https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${lon}&units=metric&appid=${apiKey}`;
    console.log(apiUrl);

    axios.get(apiUrl).then(handleRequest);
  }
}
