import React from 'react';
import { shallow } from 'enzyme';

import Spinner from '../Spinner';

const setUpShallow = () => {
  const component = shallow(<Spinner />);
  return component;
};

describe('Spinner', () => {
  it('should match snapshot', () => {
    const component = setUpShallow();
    expect(component).toMatchSnapshot();
  });
});
