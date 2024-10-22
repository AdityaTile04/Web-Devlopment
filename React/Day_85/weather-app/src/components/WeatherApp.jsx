import React, { useState } from "react";
import InfoBox from "./InfoBox";
import SearchBox from "./SearchBox";

function WeatherApp() {
  const [weatherInfo, setWeatherInfo] = useState({
    city: "Nashik",
    feelsLike: 25.88,
    humidity: 76,
    temp: 25.31,
    tempMax: 25.31,
    tempMin: 25.31,
    weather: "clear sky",
  });

  let updateInfo = (result) => {
    setWeatherInfo(result);
  };

  return (
    <div style={{ textAlign: "center" }}>
      <h2>Weather App</h2>
      <SearchBox updateInfo={updateInfo} />
      <InfoBox info={weatherInfo} />
    </div>
  );
}

export default WeatherApp;
