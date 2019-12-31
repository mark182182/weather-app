import { getUserGeoLocation } from './geolocation';

it('should mock the current user location data', () => {
  const mock = { getUserGeoLocation: jest.fn() };
  mock.getUserGeoLocation.mockReturnValue({ lat: 100, lng: 100 });
  expect(
    mock.getUserGeoLocation()
  ).toStrictEqual({
    lat: expect.any(Number),
    lng: expect.any(Number),
  });
});
