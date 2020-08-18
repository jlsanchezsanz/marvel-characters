import React from 'react';
import { shallow } from 'enzyme';

import CharacterDetails from '../CharacterDetails';
import { charactersMock } from '../../../mocks/characters.mock';

const setUpShallow = (character) => {
  const component = shallow(<CharacterDetails character={character} />);
  return component;
};

describe('CharacterDetails', () => {
  let component;

  it('should display characters list', () => {
    component = setUpShallow(charactersMock.data.results[0]);
    expect(component).toMatchSnapshot();
  });
});
