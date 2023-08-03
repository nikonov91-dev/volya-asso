import i18next from 'i18next';
import HttpApi from 'i18next-http-backend';
import { initReactI18next } from 'react-i18next';

// "Inline" English and Arabic translations.

// We can localize to any language and any number of languages.

i18next
  .use(initReactI18next)
  .use(HttpApi)
  .init({
    lng: 'fr',
    interpolation: {
      escapeValue: false,
    },
    // debug: process.env.NODE_ENV === 'development',
    load: 'all',
    backend: {
      loadPath: '/locales/{{lng}}/{{ns}}.json',
    }
  });

export default i18next;
