import React, { useState, useEffect } from 'react';
import { Container, Grid, TextField, MenuItem, Select, InputLabel, Typography } from '@material-ui/core';
import { getUserGeoLocation } from '../../services/geolocation';
import { stripGeoNames, loadWeatherForLocation, stripLatLong } from '../../reducer/geolocation';
import WeatherBoard from '../weather-board/weather-board';
import './weather-main.css';

const WeatherMain = () => {
  const [userPosition, setUserPosition] = useState({});
  const [invalidPosition, setInvalidPosition] = useState(false);
  const [radius, setRadius] = useState(10);
  const [location, setLocation] = useState(new Array(radius).fill({}));

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

  const handleRadiusChange = event => {
    setRadius(event.target.value);
  }


  return (
    <Container className='weather-container'>
      <Grid container direction='column' className='weather-main'>
        <Grid container justify='space-between'>
          <Grid container item alignItems='center'xs={6}>
            <InputLabel>Location: </InputLabel>
            <TextField
              type='search'
              variant='outlined'
              onKeyDown={getPosition} />
          </Grid>
          <Grid container item justify='flex-end' alignItems='center'xs={3}>
            <InputLabel>Radius: </InputLabel>
            <Select
              value={radius}
              variant='outlined'
              title='asd'
              onChange={handleRadiusChange}>
              {[10, 20, 30, 40].map(item => {
                return <MenuItem value={item}>{item}</MenuItem>;
              })}
            </Select>
          </Grid>
        </Grid>
        <WeatherBoard location={location} />
      </Grid>
    </Container>
  )
}

export default WeatherMain;