import React, { useState } from "react";
import WeatherInfo from "./WeatherInfo";
import axios from "axios";
import DaysForecast from "./DaysForecast";

function Weather(props) {
  const [city, setCity] = useState(props.defaultCity);
  const [weatherData, setWeatherData] = useState({ loaded: false });

  function handleResponse(response) {
    console.log(response.data);
    setWeatherData({
      loaded: true,
      temperature: response.data.main.temp,
      city: response.data.name,
      date: new Date(response.data.dt * 1000),
      humidity: response.data.main.humidity,
      wind: response.data.wind.speed,
      description: response.data.weather[0].main,
      icon: response.data.weather[0].icon,
    });
  }

  function search(){
     const apiKey = "6e6ec494746b5229a9f2d526478c924c";
     let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${apiKey}`;
     axios.get(apiUrl).then(handleResponse);
  }
  function handleSubmit(event) {
    event.preventDefault();
    search();
  }
  function showCity(event) {
    setCity(event.target.value);
  }

  if (weatherData.loaded) {
    return (
      <div className="Weather">
        <form  onSubmit={handleSubmit} className="form" action="search">
          <input onChange={showCity} className="input" name="query" placeholder="Type a city.." autoFocus="on"/>
          <button className="btn" type="submit">
            SEARCH
          </button>
        </form>
        <WeatherInfo data={weatherData} />
        <DaysForecast />
      </div>
    );
  } else {
    search();
    return <h3>Loading...</h3>;
  }
}
export default Weather;
