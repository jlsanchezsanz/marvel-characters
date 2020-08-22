import React from 'react';
import { mount, shallow } from 'enzyme';

import LimitSelector from '../LimitSelector';

const setUpShallow = (limit, handleSelectLimit) => {
  const component = shallow(
    <LimitSelector limit={limit} onSelectLimit={handleSelectLimit} />
  );
  return component;
};

const setUpMount = (limit, handleSelectLimit) => {
  const component = mount(
    <LimitSelector limit={limit} onSelectLimit={handleSelectLimit} />
  );
  return component;
};

describe('LimitSelector', () => {
  const handleSelectLimit = jest.fn();

  it('should render component', () => {
    const component = setUpShallow(20, handleSelectLimit);
    expect(component).toMatchSnapshot();
  });

  it('should execute onSelectLimit on limit change', () => {
    const component = setUpMount(20, handleSelectLimit);
    const select = component.find('select');

    expect(handleSelectLimit).not.toHaveBeenCalled();
    select.simulate('change', { target: { value: 50 } });

    expect(handleSelectLimit).toHaveBeenCalledTimes(1);
    expect(handleSelectLimit).toHaveBeenCalledWith(50);
  });
});
