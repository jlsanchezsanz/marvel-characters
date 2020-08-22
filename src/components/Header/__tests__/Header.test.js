import React from 'react';
import { shallow } from 'enzyme';

import Header from '../Header';

const setUpShallow = () => {
  const component = shallow(<Header />);
  return component;
};

describe('Header', () => {
  it('should match snapshot', () => {
    const component = setUpShallow();
    expect(component).toMatchSnapshot();
  });
});
