import React from 'react';
import { shallow } from 'enzyme';

import CharacterListItem from '../CharacterListItem';
import { charactersMock } from '../../../../mocks/characters.mock';

const setUpShallow = (character) => {
  const component = shallow(<CharacterListItem character={character} />);
  return component;
};

describe('CharacterListItem', () => {
  let component;

  it('should display characters list item', () => {
    component = setUpShallow(charactersMock.data.results[0]);
    expect(component).toMatchSnapshot();
  });
});
