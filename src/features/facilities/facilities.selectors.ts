import { createSelector } from 'reselect';

import { AppState } from '../rootReducer';

const getFacilitiesLoading = (state: AppState) => state.facilities.local.loading;
const getFacilitiesErrors = (state: AppState) => state.facilities.local.errors;
const getFacilitiesList = (state: AppState) => state.facilities.data.facilities;
const getModalsState = (state: AppState) => state.facilities.local.modals;
const getFacilitiy = (state: AppState) => state.facilities.data.facility;
const getSelectedItemId = (state: AppState) => state.facilities.local.selectedItemId;

export const facilitiesSelector = createSelector(getFacilitiesList, (facilities) => facilities);
export const loadingSelector = createSelector(getFacilitiesLoading, (loading) => loading);
export const errorsSelector = createSelector(getFacilitiesErrors, (errors) => errors);
export const modalsStateSelector = createSelector(getModalsState, (modals) => modals);
export const selectedItemIdSelector = createSelector(getSelectedItemId, (ItemId) => ItemId);
export const facilitiySelector = createSelector(getFacilitiy, (facility) => facility);
