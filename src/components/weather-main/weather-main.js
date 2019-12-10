import React, { useState, useEffect } from 'react';
import { Container, Grid, TextField } from '@material-ui/core';
import { getUserGeoLocation } from '../../services/geolocation';
import { stripGeoNames, loadWeatherForLocation, stripLatLong } from '../../reducer/geolocation';
import WeatherBoard from '../weather-board/weather-board';
import './weather-main.css';

const WeatherMain = () => {
  const [userPosition, setUserPosition] = useState({});
  const [invalidPosition, setInvalidPosition] = useState(false);
  const [radius, setRadius] = useState(10);
  const [location, setLocation] = useState([]);

  useEffect(() => {
    loadLocationsDefault();
  }, []);

  useEffect(() => {
    if (userPosition.lat) {
      loadLocationsFromInput();
    }
  }, [userPosition]);

  const loadLocationsDefault = async () => {
    const userCoords = await getUserGeoLocation();
    userCoords.rad = radius;
    const weatherLocation = loadWeatherForLocation(await stripGeoNames(userCoords));
    setLocation(await weatherLocation);
  }

  const loadLocationsFromInput = async () => {
    const weatherLocation = loadWeatherForLocation(await stripGeoNames(userPosition));
    setLocation(await weatherLocation);
  }

  const getPosition = event => {
    const getStrippedPosition = async () => {
      const strippedPosition = await stripLatLong({ name: event.target.value });
      checkPosition(strippedPosition);
    }
    if (event.which === 13) {
      getStrippedPosition();
    }
  }

  const checkPosition = pos => {
    if (pos.length > 0) {
      setFoundPosition(pos);
    } else {
      setNotFoundPosition();
    }
  }

  const setFoundPosition = strippedPosition => {
    strippedPosition[0].geometry.rad = radius;
    setUserPosition(strippedPosition[0].geometry);
  }

  const setNotFoundPosition = () => {
    setInvalidPosition(true);
    resetFlag(setInvalidPosition);
  }

  const resetFlag = setter => {
    setInterval(() => {
      setter(false);
    }, 4000);
  }

  return (
    <Container className='weather-container'>
      <Grid container item direction='column' className='weather-main'>
        <TextField
          type='search'
          onKeyDown={getPosition} />
        <WeatherBoard location={location} />
      </Grid>
    </Container>
  )
}

export default WeatherMain;