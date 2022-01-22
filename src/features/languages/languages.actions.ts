import { CHANGE_LOCALE } from './languages.actionTypes';
import { changeLocale } from './languages.types';

export const switchLanguage = (locale: string): changeLocale => ({
  type: CHANGE_LOCALE,
  locale,
});
