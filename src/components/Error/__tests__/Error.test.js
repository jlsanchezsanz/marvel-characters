import React from 'react';
import { shallow } from 'enzyme';

import Error from '../Error';

const setUpShallow = (message) => {
  const component = shallow(<Error message={message} />);
  return component;
};

describe('Error', () => {
  it('should match snapshot', () => {
    const component = setUpShallow('Some error message');
    expect(component).toMatchSnapshot();
  });
});
