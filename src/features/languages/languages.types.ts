import { CHANGE_LOCALE } from './languages.actionTypes';

// export interface MessagesState {
//   en: {};
//   fr: {};  [key: string]: string
// }
// export interface MessagesState {
//   [key: string]: string;
// }

export interface LanguagesState {
  locale: string;
}

export interface changeLocale {
  type: typeof CHANGE_LOCALE;
  locale: string;
}

export type LanguagesActions = changeLocale;
