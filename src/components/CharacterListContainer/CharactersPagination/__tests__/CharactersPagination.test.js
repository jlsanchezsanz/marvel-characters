import React from 'react';
import { shallow } from 'enzyme';

import CharactersPagination from '../CharactersPagination';

const setUpShallow = (page, pages, handleSelectPage) => {
  const component = shallow(
    <CharactersPagination
      page={page}
      pages={pages}
      onSelectPage={handleSelectPage}
    />
  );
  return component;
};

describe('CharactersPagination', () => {
  let component;
  let handleSelectPage;

  beforeEach(() => {
    handleSelectPage = jest.fn();
  });

  it('should display prev item disabled if first page', () => {
    component = setUpShallow(1, 2, handleSelectPage);
    const prev = component.find('Prev');
    expect(prev.props().disabled).toBe(true);
  });

  it('should display prev item not disabled if not first page', () => {
    component = setUpShallow(2, 2, handleSelectPage);
    const prev = component.find('Prev').at(0);
    expect(prev.props().disabled).toBe(false);
    expect(handleSelectPage).not.toHaveBeenCalled();
    prev.simulate('click');
    expect(handleSelectPage).toHaveBeenCalledTimes(1);
    expect(handleSelectPage).toHaveBeenCalledWith(1);
  });

  it('should display active page', () => {
    component = setUpShallow(2, 2, handleSelectPage);
    const page = component.find('PageItem').at(1);
    expect(page.props().active).toBe(true);
    page.simulate('click');
    expect(handleSelectPage).not.toHaveBeenCalled();
  });

  it('should display next item if page > 2 and page < pages - 1', () => {
    component = setUpShallow(3, 6, handleSelectPage);
    const next = component.find('PageItem').at(3);
    expect(next.props().children).toBe(4);
    expect(handleSelectPage).not.toHaveBeenCalled();
    next.simulate('click');
    expect(handleSelectPage).toHaveBeenCalledTimes(1);
    expect(handleSelectPage).toHaveBeenCalledWith(4);
  });

  it('should display first page if current page is not first page', () => {
    component = setUpShallow(2, 2, handleSelectPage);
    const first = component.find('PageItem').at(0);
    expect(first.props().children).toBe('1');
    expect(handleSelectPage).not.toHaveBeenCalled();
    first.simulate('click');
    expect(handleSelectPage).toHaveBeenCalledTimes(1);
    expect(handleSelectPage).toHaveBeenCalledWith(1);
  });

  it('should display first ellipsis if page > 3', () => {
    component = setUpShallow(4, 4, handleSelectPage);
    const ellipsis = component.find('Ellipsis').at(0);
    expect(ellipsis.props().disabled).toBe(true);
    ellipsis.simulate('click');
    expect(handleSelectPage).not.toHaveBeenCalled();
  });

  it('should display previous page if page > 2', () => {
    component = setUpShallow(3, 3, handleSelectPage);
    const prevPage = component.find('PageItem').at(1);
    expect(prevPage.props().children).toBe(2);
    expect(handleSelectPage).not.toHaveBeenCalled();
    prevPage.simulate('click');
    expect(handleSelectPage).toHaveBeenCalledTimes(1);
    expect(handleSelectPage).toHaveBeenCalledWith(2);
  });

  it('should display last page if current page is not last page', () => {
    component = setUpShallow(2, 6, handleSelectPage);
    const lastPage = component.find('PageItem').at(2);
    expect(lastPage.props().children).toBe(6);
    expect(handleSelectPage).not.toHaveBeenCalled();
    lastPage.simulate('click');
    expect(handleSelectPage).toHaveBeenCalledTimes(1);
    expect(handleSelectPage).toHaveBeenCalledWith(6);
  });

  it('should display next item disabled if last page', () => {
    component = setUpShallow(2, 2, handleSelectPage);
    const next = component.find('Next');
    expect(next.props().disabled).toBe(true);
  });

  it('should display next item not disabled if not last page', () => {
    component = setUpShallow(1, 2, handleSelectPage);
    const next = component.find('Next').at(0);
    expect(next.props().disabled).toBe(false);
    expect(handleSelectPage).not.toHaveBeenCalled();
    next.simulate('click');
    expect(handleSelectPage).toHaveBeenCalledTimes(1);
    expect(handleSelectPage).toHaveBeenCalledWith(2);
  });
});
