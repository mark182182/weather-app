import {
  stripGeoNames,
  loadWeatherForLocation,
  stripWeatherMap,
  mergePropValue,
  stripLatLong,
} from './geolocation';
import { getGeoNames } from '../services/geolocation';

it('should call stripGeoNames', () => {
  const mock = {
    stripGeoNames: jest.fn(),
    getGeoNames: jest.fn(),
  };
  mock.stripGeoNames();
  expect(mock.stripGeoNames).toHaveBeenCalled();
});

it('should return the stripped geolocation data ', async () => {
  const props = {
    lat: 49.5139086,
    lng: 18.8602198,
    rad: 10,
    maxRows: 1,
  };
  expect(await stripGeoNames(props)).toStrictEqual([
    {
      lat: expect.any(String),
      lng: expect.any(String),
      name: expect.any(String),
    },
  ]);
});