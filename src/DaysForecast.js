import React, { useState } from "react";
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

  if (loaded) {
    return <DayWeather data={forecast[0]} />;
  } else {
    let apiKey = "b58a2f047af526to478d86be21c3e75d";
    let longtitude = props.coordinates.lon;
    let latitude = props.coordinates.lat;
    let apiUrl = `https://api.shecodes.io/weather/v1/forecast?lon=${longtitude}&lat=${latitude}&key=${apiKey}&units=metric`;

    axios.get(apiUrl).then(handleRequest);
  }
}
