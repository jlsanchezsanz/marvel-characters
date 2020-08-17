import React from 'react';
import { shallow } from 'enzyme';

import App from '../App';
import { mockStore } from '../state/__mocks__/store';

const setUpShallow = (initialState) => {
  const store = mockStore(initialState);
  const component = shallow(<App store={store} />);
  return component;
};

describe('App', () => {
  it('should match snapshot', () => {
    const charactersReducer = {
      characters: [],
      isLoading: false,
      error: {}
    };

    const component = setUpShallow({ charactersReducer });
    expect(component).toMatchSnapshot();
  });
});
