import React from 'react';
import { shallow, mount } from 'enzyme';
import WeatherCard from './weather-card';
import { CardMedia, CardContent, Typography } from '@material-ui/core';
const cityWeather = {
  name: 'Somewhere',
  weather: [
    {
      icon: '04d',
      description: 'broken clouds',
    },
  ],
  main: { temp: '278.63' },
};

it('should render without crashing with the provided props', () => {
  shallow(<WeatherCard cityWeather={cityWeather} />);
});

it('should match the snapshot', () => {
  const wrapper = shallow(<WeatherCard cityWeather={cityWeather} />);
  expect(wrapper.html()).toMatchSnapshot();
});

it('should contain the skeleton if an empty object is passed', () => {
  const wrapper = mount(<WeatherCard cityWeather={{}} />);
  expect(wrapper.childAt(0).hasClass('weather-card-skeleton')).toBeTruthy();
});

it('should contain a card with the given props', () => {
  const wrapper = mount(<WeatherCard cityWeather={cityWeather} />);
  expect(wrapper.childAt(0).hasClass('weather-card')).toBeTruthy();
});

it('should contain a CardMedia', () => {
  const wrapper = mount(<WeatherCard cityWeather={cityWeather} />);
  expect(wrapper.find(CardMedia)).toHaveLength(1);
});

it('should contain a CardContent', () => {
  const wrapper = mount(<WeatherCard cityWeather={cityWeather} />);
  expect(wrapper.find(CardContent)).toHaveLength(1);
});

it('should contain 3 Typography components', () => {
  const wrapper = mount(<WeatherCard cityWeather={cityWeather} />);
  expect(wrapper.find(Typography)).toHaveLength(3);
});

it("should contain a Typography with the location's name", () => {
  const wrapper = mount(<WeatherCard cityWeather={cityWeather} />);
  expect(
    wrapper
      .find(Typography)
      .at(0)
      .prop('children')
  ).toBe(cityWeather.name);
});

it('should contain a Typography with the weather description', () => {
  const wrapper = mount(<WeatherCard cityWeather={cityWeather} />);
  expect(
    wrapper
      .find(Typography)
      .at(1)
      .prop('children')
  ).toBe(cityWeather.weather[0].description);
});

it('should contain a Typography with the temperature in celsius', () => {
  const wrapper = mount(<WeatherCard cityWeather={cityWeather} />);
  expect(
    wrapper
      .find(Typography)
      .at(2)
      .prop('children')
  ).toBe(Math.floor(cityWeather.main.temp - 273.15) + '\u2103');
});
