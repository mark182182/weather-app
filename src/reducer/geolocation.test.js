import {
  stripGeoNames,
  loadWeatherForLocation,
  stripWeatherMap,
  mergePropValue,
  stripLatLong,
} from './geolocation';

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

it('should return the weather data for the given location', async () => {
  const props = {
    lat: 49.5139086,
    lng: 18.8602198,
    name: 'Rainbow City',
  };
  const response = {
    weather: [
      {
        description: expect.any(String),
        icon: expect.any(String),
        id: expect.any(Number),
        main: expect.any(String),
      },
    ],
    main: {
      temp: expect.any(Number),
      feels_like: expect.any(Number),
      humidity: expect.any(Number),
      pressure: expect.any(Number),
      temp: expect.any(Number),
      temp_max: expect.any(Number),
      temp_min: expect.any(Number),
    },
    name: 'Rainbow City',
  };
  expect(await loadWeatherForLocation([props])).toStrictEqual([response]);
});

it('should the stripped weather data', async () => {
  const props = {
    lat: 49.5139086,
    lng: 18.8602198,
    name: 'Rainbow City',
  };
  const response = {
    weather: [
      {
        description: expect.any(String),
        icon: expect.any(String),
        id: expect.any(Number),
        main: expect.any(String),
      },
    ],
    main: {
      temp: expect.any(Number),
      feels_like: expect.any(Number),
      humidity: expect.any(Number),
      pressure: expect.any(Number),
      temp: expect.any(Number),
      temp_max: expect.any(Number),
      temp_min: expect.any(Number),
    },
    name: 'Rainbow City',
  };
  expect(await stripWeatherMap(props)).toStrictEqual(response);
});

it('should create a name property with the given value', () => {
  const obj = {
    weather: 'cold',
  };
  const response = {
    weather: 'cold',
    name: 'Rainbow City',
  };
  mergePropValue(obj, 'Rainbow City');
  expect(obj).toStrictEqual(response);
});

it('should return the given location data based on input', async () => {
  const response = {
    lat: expect.any(Number),
    lng: expect.any(Number),
  };
  const asd = await stripLatLong({ name: 'London' });
  expect(asd[0].geometry).toStrictEqual(response);
});
