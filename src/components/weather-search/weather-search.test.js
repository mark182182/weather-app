import React from 'react';
import { shallow } from 'enzyme';
import WeatherSearch from './weather-search';

it('renders without crashing', () => {
  shallow(<WeatherSearch />);
});

it('renders radius select with the range 10 - 200', () => {
  const wrapper = shallow(<WeatherSearch />);
  const item = <li class="MuiButtonBase-root MuiListItem-root MuiMenuItem-root Mui-selected MuiMenuItem-gutters MuiListItem-gutters MuiListItem-button Mui-selected" tabindex="0" role="option" aria-disabled="false" aria-selected="true" data-value="10">10<span class="MuiTouchRipple-root"></span></li>;
  expect(wrapper.contains(item)).toEqual(true);
})