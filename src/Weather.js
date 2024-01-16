import React, { useState } from "react";
import FormattedDate from "./FormattedDate";
import axios from "axios";

function Weather(props) {
  const [weatherData, setWeatherData] = useState({loaded: false});

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
      icon: `https://openweathermap.org/img/wn/${response.data.weather[0].icon}@2x.png`,
    });
  }

  if (weatherData.loaded) {
    return (
      <div className="Weather">
        <form className="form" action="search">
          <input className="input" name="query" placeholder="Type a city.." />
          <button className="btn" type="submit">
            Search
          </button>
        </form>
        <div className="grid">
          <div className="left-column">
            <h3><FormattedDate date = {weatherData.date} /></h3>
            <h3>{weatherData.description}</h3>
          </div>
          <div className="center">
            <h1>{weatherData.city}</h1>
            <h2>{Math.round(weatherData.temperature)}˚C/˚F</h2>
            <img src={weatherData.icon} alt="icon" />
          </div>
          <div className="right-column">
            <h3>Humidity: {weatherData.humidity} %</h3>
            <h3> Wind: {weatherData.wind} km/h</h3>
          </div>
        </div>
      </div>
    );
  }else {
      const apiKey = "6e6ec494746b5229a9f2d526478c924c";
      let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${props.defaultCity}&units=metric&appid=${apiKey}`;
      axios.get(apiUrl).then(handleResponse);
      return <h3>Loading...</h3>

  }
}
export default Weather;
