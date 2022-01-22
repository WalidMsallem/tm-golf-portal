import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

import enTranslation from './messages/en.json';
import frTranslation from './messages/fr.json';

export const resources = {
  en: {
    translation: enTranslation,
  },
  fr: {
    translation: frTranslation,
  },
} as const;

i18n.use(initReactI18next).init({
  lng: 'en',
  interpolation: {
    escapeValue: false, // not needed for react as it escapes by default
  },
  resources,
});
