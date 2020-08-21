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
  const handleSelectPage = jest.fn();

  it('should display pagination with given properties', () => {
    component = setUpShallow(1, 2, handleSelectPage);
    expect(component).toMatchSnapshot();
  });
});
