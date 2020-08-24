import React from 'react';
import { mount } from 'enzyme';

import SearchByNameInput from '../SearchByNameInput';

const setUpMount = (value, handleOnChange) => {
  const component = mount(
    <SearchByNameInput value={value} onChange={handleOnChange} />
  );
  return component;
};

describe('SearchByNameInput', () => {
  const handleOnChange = jest.fn();

  afterEach(() => {
    jest.clearAllMocks();
  });

  it('should render component', () => {
    const component = setUpMount('', handleOnChange);
    expect(component).toMatchSnapshot();
  });

  it('should call onChange callback on input change', () => {
    const name = 'nameStartsWith';
    const value = 'spi';
    const event = { target: { value, name } };
    const component = setUpMount('name', handleOnChange);
    const input = component.find('input');

    expect(handleOnChange).not.toHaveBeenCalled();
    input.simulate('change', event);

    expect(handleOnChange).toHaveBeenCalledTimes(1);
  });

  it('should call onChange callback on input change if length === 0', () => {
    const name = 'nameStartsWith';
    const value = '';
    const event = { target: { value, name } };
    const component = setUpMount('name', handleOnChange);
    const input = component.find('input');

    expect(handleOnChange).not.toHaveBeenCalled();
    input.simulate('change', event);

    expect(handleOnChange).toHaveBeenCalledTimes(1);
  });

  it('should not call onChange callback on input change if 3 > length > 0', () => {
    const name = 'nameStartsWith';
    const value = 'sp';
    const event = { target: { value, name } };
    const component = setUpMount('name', handleOnChange);
    const input = component.find('input');

    expect(handleOnChange).not.toHaveBeenCalled();
    input.simulate('change', event);

    expect(handleOnChange).not.toHaveBeenCalled();
  });
});
