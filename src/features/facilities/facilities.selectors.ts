import { createSelector } from 'reselect';

import { AppState } from '../rootReducer';

// const getPending = (state: AppState) => state.facilities.local.;

const getFacilitiesLoading = (state: AppState) => state.facilities.local.loading;
const getFacilitiesErrors = (state: AppState) => state.facilities.local.errors;
const getFacilitiesList = (state: AppState) => state.facilities.data.facilities;
const getModalsState = (state: AppState) => state.facilities.local.modals;
const getFacilitiy = (state: AppState) => state.facilities.data.facility;

// const getError = (state: AppState) => state.todo.error;

export const facilitiesSelector = createSelector(getFacilitiesList, (facilities) => facilities);
export const loadingSelector = createSelector(getFacilitiesLoading, (loading) => loading);
export const errorsSelector = createSelector(getFacilitiesErrors, (errors) => errors);
export const modalsStateSelector = createSelector(getModalsState, (modals) => modals);
export const facilitiySelector = createSelector(getFacilitiy, (facilitiy) => facilitiy);

// export const getPendingSelector = createSelector(
//   getPending,
//   (pending) => pending
// );

// export const getErrorSelector = createSelector(getError, (error) => error);

export default {};
