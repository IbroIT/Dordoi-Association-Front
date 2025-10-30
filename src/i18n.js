import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';


import translationEN from './locales/en/translation.json';
import translationRU from './locales/ru/translation.json';
import translationKG from './locales/kg/translation.json';

const resources = {
  en: {
    translation: translationEN
  },
  ru: {
    translation: translationRU
  },
  kg: {
    translation: translationKG
  }
};

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    resources,
    lng: 'ru', // Устанавливаем русский как язык по умолчанию
    fallbackLng: 'ru', // Используем русский как fallback
    debug: false,
    detection: {
      order: ['localStorage', 'sessionStorage', 'navigator', 'htmlTag'],
      lookupLocalStorage: 'i18nextLng',
      lookupSessionStorage: 'i18nextLng',
      caches: ['localStorage', 'sessionStorage'],
      excludeCacheFor: ['cimode'] // не кешировать язык при тестировании
    },
    interpolation: {
      escapeValue: false
    }
  });

// Проверка и установка языка по умолчанию
if (typeof window !== 'undefined') {
  const savedLang = localStorage.getItem('i18nextLng');
  const supportedLanguages = ['en', 'ru', 'kg'];
  
  // Если сохранённый язык не поддерживается, устанавливаем русский
  if (!savedLang || !supportedLanguages.includes(savedLang)) {
    localStorage.setItem('i18nextLng', 'ru');
    sessionStorage.setItem('i18nextLng', 'ru');
  }
}

export default i18n;