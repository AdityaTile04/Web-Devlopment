import React, { useState } from "react";
import "../styles/SearchBox.css";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import dotenv from "dotenv";
dotenv.config();

function SearchBox() {
  let [city, setCity] = useState("");

  const weatherApi = "https://api.openweathermap.org/data/2.5/weather";
  const API_KEY = process.env.API_KEY;

  const getWeather = async () => {
    let response = await fetch(
      `${weatherApi}?q=${city}&appid=${API_KEY}&units=metric`
    );
    let jsonResponse = await response.json();
    console.log(jsonResponse);

    let result = {
      temp: jsonResponse.main.temp,
      tempMin: jsonResponse.main.temp_min,
      tempMax: jsonResponse.main.temp_max,
      humidity: jsonResponse.main.humidity,
      feelsLike: jsonResponse.main.feels_like,
      weather: jsonResponse.weather[0].description,
    };
    console.log(result);
  };

  const handleChange = (e) => {
    setCity(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(city);
    setCity("");
    getWeather();
  };

  return (
    <div className="SearchBox">
      <h3>Seacrh for a weather</h3>
      <form onSubmit={handleSubmit}>
        <TextField
          id="city"
          label="Search City"
          variant="outlined"
          required
          value={city}
          name="city"
          onChange={handleChange}
        />
        <br />
        <br />
        <Button variant="contained" type="submit">
          Search
        </Button>
      </form>
    </div>
  );
}

export default SearchBox;
