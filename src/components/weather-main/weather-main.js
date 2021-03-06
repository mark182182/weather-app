import React, { useState, useEffect, useCallback } from 'react';
import { Container, Grid } from '@material-ui/core';
import { getUserGeoLocation } from '../../services/geolocation';
import {
  stripGeoNames,
  loadWeatherForLocation,
  stripLatLong,
} from '../../reducer/geolocation';
import WeatherSnackbar from '../weather-snackbar/weather-snackbar';
import WeatherSearch from '../weather-search/weather-search';
import WeatherBoard from '../weather-board/weather-board';
import './weather-main.css';

const WeatherMain = () => {
  const [userPosition, setUserPosition] = useState({});
  const [invalidPosition, setInvalidPosition] = useState(false);
  const [maxRows, setMaxRows] = useState(10);
  const [radius, setRadius] = useState(10);
  const [location, setLocation] = useState(new Array(maxRows).fill({}));

  useEffect(() => {
    if (!userPosition.lat) {
      const loadDefaultUserPosition = async () => {
        const userCoords = await getUserGeoLocation();
        userCoords.rad = radius;
        userCoords.maxRows = maxRows;
        setUserPosition(userCoords);
      };
      loadDefaultUserPosition();
    }
  }, [radius, maxRows, userPosition]);

  const loadLocations = useCallback(async () => {
    const weatherLocation = loadWeatherForLocation(
      await stripGeoNames(userPosition)
    );
    setLocation(await weatherLocation);
  }, [userPosition]);

  useEffect(() => {
    if (userPosition.lat) {
      loadLocations();
    }
  }, [userPosition, loadLocations]);

  const getPosition = event => {
    const getStrippedPosition = async () => {
      const strippedPosition = await stripLatLong({ name: event.target.value });
      checkPosition(strippedPosition);
    };
    if (event.which === 13) {
      getStrippedPosition();
    }
  };

  const checkPosition = pos => {
    if (pos.length > 0) {
      setFoundPosition(pos);
    } else {
      setNotFoundPosition();
    }
  };

  const setFoundPosition = async strippedPosition => {
    setLocation(new Array(maxRows).fill({}));
    strippedPosition[0].geometry.rad = radius;
    strippedPosition[0].geometry.maxRows = maxRows;
    setUserPosition(strippedPosition[0].geometry);
  };

  const setNotFoundPosition = () => {
    setInvalidPosition(true);
  };

  const resetNotFoundPosition = () => {
    setInvalidPosition(false);
  };

  const handleRadiusChange = event => {
    setRadius(event.target.value);
  };

  const handleMaxRowsChange = event => {
    setMaxRows(event.target.value);
  };

  return (
    <Container className="weather-container">
      <WeatherSnackbar open={invalidPosition} close={resetNotFoundPosition} />
      <Grid container direction="column" className="weather-main">
        <WeatherSearch
          getPosition={getPosition}
          radius={radius}
          handleRadiusChange={handleRadiusChange}
          maxRows={maxRows}
          handleMaxRowsChange={handleMaxRowsChange}
        />
        <WeatherBoard location={location} />
      </Grid>
    </Container>
  );
};

export default WeatherMain;
