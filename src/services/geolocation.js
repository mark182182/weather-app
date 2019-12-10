export const getUserGeoLocation = () => {
  return new Promise(resolve =>
    navigator.geolocation.getCurrentPosition(position => {
      resolve({
        lat: position.coords.latitude,
        lng: position.coords.longitude
      });
    }));
}