import React, { useEffect, useState } from 'react';
import { Paper } from '@material-ui/core';
import WeatherCard from '../weather-card/weather-card';
import './weather-board.css';

const WeatherBoard = props => {
  const { location } = props;

  return (
    <>
      <Paper className='weather-board'>
        {location.map(city => {
          return <WeatherCard cityWeather={city}></WeatherCard>
        })}
      </Paper>
    </>
  );
}

export default WeatherBoard;