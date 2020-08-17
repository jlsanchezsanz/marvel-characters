import React from 'react';
import { shallow } from 'enzyme';

import CharacterList from '../CharacterList';

const setUpShallow = (characters) => {
  const component = shallow(<CharacterList characters={characters} />);
  return component;
};

describe('CharacterList', () => {
  let component;

  it('should display characters list', () => {
    component = setUpShallow([
      { id: 1, name: 'Ironman' },
      { id: 2, name: 'Thor' },
      { id: 3, name: 'Black Widow' }
    ]);
    expect(component).toMatchSnapshot();
  });
});
