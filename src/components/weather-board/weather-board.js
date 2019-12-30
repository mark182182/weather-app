import React from "react";
import { Paper } from "@material-ui/core";
import WeatherCard from "../weather-card/weather-card";
import uuid from "uuid/v1";
import "./weather-board.css";

const WeatherBoard = props => {
  const { location } = props;

  return (
    <>
      <Paper className="weather-board">
        {location.length > 0 &&
          location.map(city => {
            return <WeatherCard key={uuid()} cityWeather={city}></WeatherCard>;
          })}
      </Paper>
    </>
  );
};

export default WeatherBoard;
