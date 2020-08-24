import React from 'react';
import { mount } from 'enzyme';

import OrderBySelector from '../OrderBySelector';

const setUpMount = (value, handleOnChange) => {
  const component = mount(
    <OrderBySelector value={value} onChange={handleOnChange} />
  );
  return component;
};

describe('OrderBySelector', () => {
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
