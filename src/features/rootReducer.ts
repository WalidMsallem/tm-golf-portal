import { combineReducers } from 'redux';

import facilitiesReducer from './facilities/facilities.reducer';
import languagesReducer from './languages/languages.reducer';

const rootReducer = combineReducers({
  facilities: facilitiesReducer,
  languages: languagesReducer,
});

export type AppState = ReturnType<typeof rootReducer>;

export default rootReducer;
