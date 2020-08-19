import { combineReducers } from 'redux';

import { charactersReducer } from './characters.reducer';
import { filtersReducer } from './filters.reducer';

export default combineReducers({ charactersReducer, filtersReducer });
