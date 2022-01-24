import { combineReducers } from 'redux';

import facilitiesReducer from './facilities/facilities.reducer';

const rootReducer = combineReducers({
  facilities: facilitiesReducer,
});

export type AppState = ReturnType<typeof rootReducer>;

export default rootReducer;
