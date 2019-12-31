import {
  getGeoNames,
  getWeatherMap,
  getLatLongByName,
} from '../services/requests';

export const stripGeoNames = async geoProps => {
  const geoNames = await getGeoNames(geoProps);
  return geoNames.geonames.map(loc => {
    return { lat: loc.lat, lng: loc.lng, name: loc.name };
  });
};

export const loadWeatherForLocation = async geoProps => {
  let weather = [];
  for (const location in geoProps) {
    weather = [...weather, await stripWeatherMap(geoProps[location])];
  }
  return weather;
};

export const stripWeatherMap = async geoProps => {
  const weatherMap = await getWeatherMap(geoProps);
  const { weather, main, name } = mergePropValue(weatherMap, geoProps.name);
  return { weather, main, name };
};

export const mergePropValue = (objectToAdd, propValue) => {
  objectToAdd.name = propValue;
  return objectToAdd;
};

export const stripLatLong = async geoProps => {
  const strippedLatLong = await getLatLongByName(geoProps);
  return strippedLatLong.results;
};
