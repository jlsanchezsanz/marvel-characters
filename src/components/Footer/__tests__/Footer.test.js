import React from 'react';
import { shallow } from 'enzyme';

import Footer from '../Footer';

const setUpShallow = () => {
  const component = shallow(<Footer />);
  return component;
};

describe('Footer', () => {
  it('should match snapshot', () => {
    const component = setUpShallow();
    expect(component).toMatchSnapshot();
  });
});
