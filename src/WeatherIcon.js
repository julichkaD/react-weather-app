import React from "react";
import { WeatherSvg } from "weather-icons-animated";

export default function WeatherIcon(props) {
  //   console.log(props.code);
  const codeMapping = {
    "01d": "sunny",
    "01n": "clear-night",
    "02d": "cloudy",
    "02n": "cloudy",
    "03d": "partlycloudy",
    "03n": "cloudy",
    "04d": "partlycloudy",
    "04n": "cloudy",
    "09d": "pouring",
    "09n": "pouring",
    "10d": "rainy",
    "10n": "rainy",
    "11d": "lightning",
    "11n": "lightning",
    "13d": "snowy",
    "13n": "snowy",
    "50d": "fog",
    "50n": "fog",
  };
//   console.log("Icon Code:", props.code);
//   console.log("Mapped Icon:", codeMapping[props.code]);

  return (
    <WeatherSvg state={codeMapping[props.code]} width={props.width} height={props.height} />
  );

}
