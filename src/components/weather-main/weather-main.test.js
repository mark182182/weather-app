import React from 'react';
import { shallow } from 'enzyme';
import WeatherMain from './weather-main';

it('renders without crashing', () => {
  shallow(<WeatherMain />);
});