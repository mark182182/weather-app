import { getGeoNames, getWeatherMap, getLatLongByName } from './requests';

it('should return the geo locations', async () => {
  const geoProps = {
    lat: 49.5139086,
    lng: 18.8602198,
    rad: 10,
    maxRows: 1,
  };
  const resp = await getGeoNames(geoProps);
  expect(resp.geonames[0].name).toStrictEqual(expect.any(String));
});

it('should return the weather data for the given location', async () => {
  const geoProps = {
    lat: 49.5139086,
    lng: 18.8602198,
  };
  const resp = await getWeatherMap(geoProps);
  expect(resp.weather[0].description).toStrictEqual(expect.any(String));
});

it('should return the lat and lng for the given location', async () => {
  const geoProps = {
    name: 'London',
  };
  const resp = await getLatLongByName(geoProps);
  expect(resp.results[0].geometry).toStrictEqual({
    lat: expect.any(Number),
    lng: expect.any(Number),
  });
});
