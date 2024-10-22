import React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import "../styles/InfoBox.css";
import WbSunnyIcon from "@mui/icons-material/WbSunny";
import ThunderstormIcon from "@mui/icons-material/Thunderstorm";
import AcUnitIcon from "@mui/icons-material/AcUnit";

function InfoBox({ info }) {
  const HOT =
    "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTV8fHN1bW1lcnxlbnwwfHwwfHx8MA%3D%3D";
  const COLD =
    "https://plus.unsplash.com/premium_photo-1672848844228-d7f7b7222022?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8d2ludGVyJTIwY2FuYWRhfGVufDB8fDB8fHww";
  const RAINY =
    "https://images.unsplash.com/photo-1691265688799-4457dec90cd6?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8cmFpbnklMjBzZWFzb258ZW58MHx8MHx8fDA%3D";

  return (
    <div className="InfoBox">
      <div className="cardContainer">
        <Card sx={{ maxWidth: 345 }}>
          <CardMedia
            sx={{ height: 150 }}
            image={info.humidity > 80 ? RAINY : info.temp > 15 ? HOT : COLD}
            title="green iguana"
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              {info.city} &nbsp;
              {info.temp > 15 ? (
                <WbSunnyIcon  />
              ) : info.humidity > 80 ? (
                <ThunderstormIcon />
              ) : info.temp < 15 ? (
                <AcUnitIcon />
              ) : null}
            </Typography>
            <Typography
              variant="body2"
              sx={{ color: "text.secondary" }}
              component={"span"}
            >
              <p>Temprature = {info.temp}&deg;C</p>
              <p>Humidity = {info.humidity}</p>
              <p>Feels Like = {info.feelsLike}</p>
              <p>Min Temp = {info.tempMin}&deg;C</p>
              <p>Max Temp = {info.tempMax}&deg;C</p>
              <p>Weather = {info.weather}</p>
            </Typography>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}

export default InfoBox;
