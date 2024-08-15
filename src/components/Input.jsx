import React from "react";
import { useWeather } from "../context/Weather";

function Input() {
  const weather = useWeather();
  //   console.log("Weather", weather);
  return (
    <input
      placeholder="Search"
      className="input"
      value={weather.searchCity}
      onChange={(e) => weather.setSearchCity(e.target.value)}
    />
  );
}
export default Input;
