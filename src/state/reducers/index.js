import { combineReducers } from 'redux';

import { charactersReducer } from './characters.reducer';
import { characterDetailsReducer } from './character-details.reducer';
import { filtersReducer } from './filters.reducer';
import { paginationReducer } from './pagination.reducer';

export default combineReducers({
  characters: charactersReducer,
  characterDetails: characterDetailsReducer,
  filters: filtersReducer,
  pagination: paginationReducer
});
