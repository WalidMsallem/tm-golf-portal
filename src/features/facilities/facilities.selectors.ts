import { createSelector } from 'reselect';

import { AppState } from '../rootReducer';

// const getPending = (state: AppState) => state.facilities.local.;

const getFacilitiesLoading = (state: AppState) => state.facilities.local.loading;
const getFacilitiesErrors = (state: AppState) => state.facilities.local.errors;
const getFacilitiesList = (state: AppState) => state.facilities.data.facilities;

// const getError = (state: AppState) => state.todo.error;

export const facilitiesSelector = createSelector(getFacilitiesList, (facilities) => facilities);
export const loadingSelector = createSelector(getFacilitiesLoading, (loading) => loading);
export const errorsSelector = createSelector(getFacilitiesList, (errors) => errors);

// export const getPendingSelector = createSelector(
//   getPending,
//   (pending) => pending
// );

// export const getErrorSelector = createSelector(getError, (error) => error);

export default {};
