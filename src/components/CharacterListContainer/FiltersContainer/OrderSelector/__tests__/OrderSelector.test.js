import React from 'react';
import { mount } from 'enzyme';

import OrderSelector from '../OrderSelector';

const setUpMount = (value, handleOnChange) => {
  const component = mount(
    <OrderSelector value={value} onChange={handleOnChange} />
  );
  return component;
};

describe('OrderSelector', () => {
  const handleOnChange = jest.fn();

  it('should render component', () => {
    const component = setUpMount('name', handleOnChange);
    expect(component).toMatchSnapshot();
  });

  it('should call onChange callback on change', () => {
    const component = setUpMount('name', handleOnChange);
    const event = { target: { value: '-name' } };
    const select = component.find('select');

    expect(handleOnChange).not.toHaveBeenCalled();
    select.simulate('change', event);

    expect(handleOnChange).toHaveBeenCalledTimes(1);
  });
});
