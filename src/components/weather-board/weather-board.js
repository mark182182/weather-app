import React, { useEffect, useState } from 'react';
import { Paper } from '@material-ui/core';
import WeatherCard from '../weather-card/weather-card';
import './weather-board.css';

const WeatherBoard = () => {

  return (
    <>
      <Paper>
        <WeatherCard userPosition></WeatherCard>
      </Paper>
    </>
  );
}

export default WeatherBoard;