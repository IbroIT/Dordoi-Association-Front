import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import flagKG from '../../assets/flags/flag-kg.svg';
import flagRU from '../../assets/flags/flag-ru.svg';
import flagUS from '../../assets/flags/united-states-flag.svg';

const LanguageSwitcher = ({ mobile = false }) => {
  const { i18n } = useTranslation();
  const [isOpen, setIsOpen] = useState(false);

  const languages = [
    { code: 'en', name: 'English', nativeName: 'English', flag: flagUS },
    { code: 'ru', name: 'Русский', nativeName: 'Русский', flag: flagRU },
    { code: 'kg', name: 'Кыргызча', nativeName: 'Кыргызча', flag: flagKG }
  ];

  const currentLanguage = languages.find(lang => lang.code === i18n.language) || languages[0];

  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng);
    setIsOpen(false);
  };

  if (mobile) {
    return (
      <div className="flex items-center space-x-1">
        {languages.map((language) => (
          <button
            key={language.code}
            onClick={() => changeLanguage(language.code)}
            className={`flex items-center space-x-2 px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200 min-h-[44px] ${
              i18n.language === language.code
                ? 'bg-blue-500 text-white shadow-lg'
                : 'bg-white/10 text-white/80 hover:text-white hover:bg-white/20'
            }`}
          >
            <img src={language.flag} alt={`${language.name} flag`} className="w-5 h-5 flex-shrink-0" />
            <span>{language.code.toUpperCase()}</span>
          </button>
        ))}
      </div>
    );
  }

  return (
    <div className="relative">
      <button
        onClick={() => setIsOpen(!isOpen)}
        onBlur={() => setTimeout(() => setIsOpen(false), 150)}
        className="flex items-center space-x-2 bg-white/10 hover:bg-white/20 text-white/90 hover:text-white px-3 py-2 rounded-lg transition-all duration-200 backdrop-blur-sm"
      >
        <img src={currentLanguage.flag} alt={`${currentLanguage.name} flag`} className="w-4 h-4" />
        <span className="font-medium text-sm">{currentLanguage.code.toUpperCase()}</span>
        <svg 
          className={`w-4 h-4 transition-transform duration-200 ${isOpen ? 'rotate-180' : ''}`}
          fill="none" 
          stroke="currentColor" 
          viewBox="0 0 24 24"
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
        </svg>
      </button>

      {isOpen && (
        <div className="absolute right-0 mt-2 w-40 bg-white/95 backdrop-blur-lg rounded-xl shadow-2xl border border-white/20 z-50 animate-fadeIn">
          {languages.map((language) => (
            <button
              key={language.code}
              onClick={() => changeLanguage(language.code)}
              className={`w-full text-left px-4 py-2.5 flex items-center space-x-3 transition-all duration-200 first:rounded-t-xl last:rounded-b-xl ${
                i18n.language === language.code 
                  ? 'bg-blue-50 text-blue-600' 
                  : 'text-gray-700 hover:bg-gray-50'
              }`}
            >
              <img src={language.flag} alt={`${language.name} flag`} className="w-5 h-5 flex-shrink-0" />
              <span className="font-medium text-sm">{language.nativeName}</span>
            </button>
          ))}
        </div>
      )}
    </div>
  );
};

export default LanguageSwitcher;