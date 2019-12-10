import { GEO_NAMES, WEATHER_MAP, GEOCAGE } from '../constants/urls';

export const getGeoNames = async gepProps => {
  const response = await fetch(GEO_NAMES +
    `?lat=${gepProps.lat}` +
    `&lng=${gepProps.lng}` +
    `&username=${process.env.REACT_APP_USER_NAME}` +
    `&radius=${gepProps.rad}`);
  return await response.json();
}

export const getWeatherMap = async geoProps => {
  const response = await fetch(WEATHER_MAP +
    `?lat=${geoProps.lat}&lon=${geoProps.lng}` +
    `&appid=${process.env.REACT_APP_WEATHER_API_KEY}`);
  return await response.json();
}

export const getLatLongByName = async geoProps => {
  const response = await fetch(GEOCAGE +
    `?q=${geoProps.name}` +
    `&key=${process.env.REACT_APP_GEOCAGE_API_KEY}`);
  return await response.json();
}