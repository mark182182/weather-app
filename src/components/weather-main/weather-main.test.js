import React from 'react';
import { shallow } from 'enzyme';
import WeatherMain from './weather-main';

it('renders without crashing', () => {
  shallow(<WeatherMain />);
});

it('loads the given location on enter', () => {
  const wrapper = shallow(<WeatherMain />);
  // @TODO test with mock function
  // wrapper.dive().instance().getPosition = jest.fn();
  // wrapper.dive().instance().getStrippedPosition = jest.fn();
  console.log(wrapper.debug());
  console.log(wrapper.instance());
  console.log(wrapper.dive().instance());
  wrapper.dive().instance().getPosition({
    target: { value: 'London' },
    which: 13
  });
  expect(wrapper.dive().instance().getStrippedPosition().mock.calls.length).toBe(1);
});