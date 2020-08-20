import { combineReducers } from 'redux';

import { charactersReducer } from './characters.reducer';
import { characterDetailsReducer } from './character-details.reducer';
import { filtersReducer } from './filters.reducer';

export default combineReducers({
  characters: charactersReducer,
  characterDetails: characterDetailsReducer,
  filters: filtersReducer
});
