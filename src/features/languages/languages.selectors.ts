import { createSelector } from 'reselect';

import { AppState } from '../rootReducer';

const geLocale = (state: AppState) => state.languages.locale;

export const localeSelector = createSelector(geLocale, (locale) => locale);
