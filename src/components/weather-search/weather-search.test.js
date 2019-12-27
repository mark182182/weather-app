import React from 'react';
import { shallow } from 'enzyme';
import WeatherSearch from './weather-search';

it('renders without crashing', () => {
  shallow(<WeatherSearch />);
});
