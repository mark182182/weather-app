import React from 'react';
import { shallow, mount } from 'enzyme';
import WeatherMain from './weather-main';

it('renders without crashing', () => {
  shallow(<WeatherMain />);
});

it('should match the snapshot', () => {
  const wrapper = shallow(<WeatherMain />);
  expect(wrapper.html()).toMatchSnapshot();
});
