import React from 'react';
import { shallow } from 'enzyme';
import WeatherBoard from './weather-board';

const cityWeather = {
  name: 'Somewhere',
  weather: [
    {
      icon: '04d',
      description: 'broken clouds'
    }
  ],
  main: { temp: '278.63' }
}

it('renders without crashing with the provided props', () => {
  shallow(<WeatherBoard location={[cityWeather]} />);
});