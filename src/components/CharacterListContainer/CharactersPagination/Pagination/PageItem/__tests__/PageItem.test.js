import React from 'react';
import { shallow } from 'enzyme';

import PageItem from '../PageItem';

const setUpShallow = ({ active, activeLabel, disabled, handleOnClick }) => {
  const component = shallow(
    <PageItem
      active={active}
      activeLabel={activeLabel}
      disabled={disabled}
      onClick={handleOnClick}
    >
      1
    </PageItem>
  );
  return component;
};

describe('PageItem', () => {
  let component;
  const handleOnClick = jest.fn();

  it('should display page item', () => {
    component = setUpShallow({ handleOnClick });
    expect(component).toMatchSnapshot();
  });

  it('should display page item - active', () => {
    component = setUpShallow({ active: true, activeLabel: 'active label' });
    const li = component.find('li');
    const span = component.find('span');
    expect(li.props().className.includes('active')).toBeTruthy();
    expect(span.props().children).toBe('active label');
  });

  it('should display page item - disabled', () => {
    component = setUpShallow({ disabled: true });
    const li = component.find('li');
    const button = component.find('button');
    expect(li.props().className.includes('disabled')).toBeTruthy();
    expect(button.props().disabled).toBe(true);
  });
});
