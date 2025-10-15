import React, { useRef, useState } from 'react';
import { motion, useInView, AnimatePresence } from 'framer-motion';
import { useTranslation } from 'react-i18next';

const PartnersInternational = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, threshold: 0.1 });
  const { t } = useTranslation();
  const [selectedCountry, setSelectedCountry] = useState(null);
  const [hoveredCountry, setHoveredCountry] = useState(null);

  const countries = [
    { code: 'RU', name: t('partnersInternational.countries.RU.name'), region: 'europe', coordinates: { x: 50, y: 25 } },
    { code: 'TR', name: t('partnersInternational.countries.TR.name'), region: 'asia', coordinates: { x: 55, y: 35 } },
    { code: 'CN', name: t('partnersInternational.countries.CN.name'), region: 'asia', coordinates: { x: 75, y: 35 } },
    { code: 'KZ', name: t('partnersInternational.countries.KZ.name'), region: 'asia', coordinates: { x: 60, y: 25 } },
    { code: 'UZ', name: t('partnersInternational.countries.UZ.name'), region: 'asia', coordinates: { x: 62, y: 30 } },
    { code: 'TJ', name: t('partnersInternational.countries.TJ.name'), region: 'asia', coordinates: { x: 65, y: 32 } },
    { code: 'BY', name: t('partnersInternational.countries.BY.name'), region: 'europe', coordinates: { x: 52, y: 22 } },
    { code: 'KR', name: t('partnersInternational.countries.KR.name'), region: 'asia', coordinates: { x: 80, y: 32 } },
    { code: 'US', name: t('partnersInternational.countries.US.name'), region: 'america', coordinates: { x: 25, y: 35 } },
    { code: 'BR', name: t('partnersInternational.countries.BR.name'), region: 'america', coordinates: { x: 35, y: 60 } },
    { code: 'JP', name: t('partnersInternational.countries.JP.name'), region: 'asia', coordinates: { x: 85, y: 32 } },
    { code: 'IN', name: t('partnersInternational.countries.IN.name'), region: 'asia', coordinates: { x: 65, y: 40 } },
    { code: 'RS', name: t('partnersInternational.countries.RS.name'), region: 'europe', coordinates: { x: 53, y: 30 } },
    { code: 'IT', name: t('partnersInternational.countries.IT.name'), region: 'europe', coordinates: { x: 52, y: 32 } },
    { code: 'MY', name: t('partnersInternational.countries.MY.name'), region: 'asia', coordinates: { x: 70, y: 50 } },
    { code: 'DE', name: t('partnersInternational.countries.DE.name'), region: 'europe', coordinates: { x: 50, y: 27 } },
    { code: 'CH', name: t('partnersInternational.countries.CH.name'), region: 'europe', coordinates: { x: 51, y: 29 } },
    { code: 'HU', name: t('partnersInternational.countries.HU.name'), region: 'europe', coordinates: { x: 54, y: 28 } },
    { code: 'MN', name: t('partnersInternational.countries.MN.name'), region: 'asia', coordinates: { x: 70, y: 28 } },
    { code: 'IL', name: t('partnersInternational.countries.IL.name'), region: 'asia', coordinates: { x: 57, y: 35 } }
  ];

  const regionColors = {
    europe: { bg: 'bg-blue-100', text: 'text-blue-600', border: 'border-blue-200', dot: 'bg-blue-500' },
    asia: { bg: 'bg-green-100', text: 'text-green-600', border: 'border-green-200', dot: 'bg-green-500' },
    america: { bg: 'bg-purple-100', text: 'text-purple-600', border: 'border-purple-200', dot: 'bg-purple-500' }
  };

  const cooperationTypes = [
    { icon: '💰', label: t('partnersInternational.cooperation.trade') },
    { icon: '🎓', label: t('partnersInternational.cooperation.education') },
    { icon: '🎭', label: t('partnersInternational.cooperation.culture') },
    { icon: '🏭', label: t('partnersInternational.cooperation.industry') },
    { icon: '🚚', label: t('partnersInternational.cooperation.logistics') },
    { icon: '💡', label: t('partnersInternational.cooperation.innovation') }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.6,
        ease: "easeOut"
      }
    }
  };

  const cardVariants = {
    hidden: { scale: 0.9, opacity: 0 },
    visible: {
      scale: 1,
      opacity: 1,
      transition: {
        duration: 0.4,
        ease: "easeOut"
      }
    }
  };

  const mapDotVariants = {
    hidden: { scale: 0, opacity: 0 },
    visible: {
      scale: 1,
      opacity: 1,
      transition: {
        duration: 0.5,
        type: "spring",
        stiffness: 200
      }
    },
    hover: {
      scale: 1.2,
      transition: {
        duration: 0.2
      }
    }
  };

  const modalVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.3,
        ease: "easeOut"
      }
    }
  };

  const getFlagEmoji = (countryCode) => {
    const codePoints = countryCode
      .toUpperCase()
      .split('')
      .map(char => 127397 + char.charCodeAt());
    return String.fromCodePoint(...codePoints);
  };

  return (
    <section ref={ref} className="relative py-12 sm:py-16 lg:py-20 bg-white overflow-hidden">
      {/* Фоновые элементы */}
      <div className="absolute inset-0 opacity-3 sm:opacity-5">
        <motion.div
          className="absolute top-4 left-4 w-32 h-32 sm:w-64 sm:h-64 bg-blue-200 rounded-full blur-2xl sm:blur-3xl"
          animate={{ y: [0, -15, 0] }}
          transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div
          className="absolute bottom-4 right-4 w-40 h-40 sm:w-80 sm:h-80 bg-green-200 rounded-full blur-2xl sm:blur-3xl"
          animate={{ y: [0, 15, 0] }}
          transition={{ duration: 7, repeat: Infinity, ease: "easeInOut", delay: 1 }}
        />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Заголовок секции */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="text-center mb-8 sm:mb-12 lg:mb-16"
        >
          <motion.div 
            variants={itemVariants}
            className="inline-flex items-center px-3 py-1 sm:px-4 sm:py-2 rounded-full bg-blue-50 border border-blue-200 mb-4 sm:mb-6"
          >
            <span className="text-blue-600 text-xs sm:text-sm font-semibold">{t('partnersInternational.badge')}</span>
          </motion.div>
          
          <motion.h2 
            variants={itemVariants}
            className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-slate-900 mb-4 sm:mb-6"
          >
            {t('partnersInternational.title')}{' '}
            <span className="bg-gradient-to-r from-blue-600 to-green-600 bg-clip-text text-transparent">
              {t('partnersInternational.titleHighlight')}
            </span>
          </motion.h2>
          
          <motion.p 
            variants={itemVariants}
            className="text-base sm:text-lg text-slate-600 max-w-2xl mx-auto leading-relaxed"
          >
            {t('partnersInternational.subtitle')}
          </motion.p>
        </motion.div>

        {/* Интерактивная карта */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="mb-12 sm:mb-16 lg:mb-20"
        >
          <div className="bg-gradient-to-br from-blue-50 to-green-50 rounded-2xl p-6 sm:p-8 border border-blue-200">
            {/* Легенда карты */}
            <motion.div
              variants={itemVariants}
              className="flex flex-wrap justify-center gap-4 mb-6 sm:mb-8"
            >
              {Object.entries(regionColors).map(([region, colors]) => (
                <div key={region} className="flex items-center space-x-2">
                  <div className={`w-3 h-3 ${colors.dot} rounded-full`}></div>
                  <span className="text-sm font-medium text-slate-700 capitalize">
                    {t(`partnersInternational.regions.${region}`)}
                  </span>
                </div>
              ))}
            </motion.div>

            {/* Контейнер карты */}
            <div className="relative bg-white rounded-xl sm:rounded-2xl p-4 sm:p-6 border border-slate-200 min-h-[400px] sm:min-h-[500px]">
              {/* Упрощенная карта мира (фон) */}
              <div className="absolute inset-4 sm:ins-6 bg-gradient-to-br from-slate-50 to-slate-100 rounded-lg border border-slate-200">
                {/* Континенты - упрощенные формы */}
                <div className="absolute top-4 left-8 w-32 h-20 bg-blue-100 rounded-lg opacity-30"></div>
                <div className="absolute top-28 left-16 w-40 h-24 bg-green-100 rounded-lg opacity-30"></div>
                <div className="absolute top-12 right-20 w-36 h-28 bg-purple-100 rounded-lg opacity-30"></div>
                <div className="absolute bottom-16 left-12 w-28 h-32 bg-blue-100 rounded-lg opacity-30"></div>
                <div className="absolute bottom-8 right-16 w-44 h-20 bg-green-100 rounded-lg opacity-30"></div>
              </div>

              {/* Точки стран на карте */}
              {countries.map((country) => {
                const regionColor = regionColors[country.region];
                return (
                  <motion.div
                    key={country.code}
                    variants={mapDotVariants}
                    initial="hidden"
                    animate="visible"
                    whileHover="hover"
                    className={`absolute cursor-pointer transform -translate-x-1/2 -translate-y-1/2 z-10 ${
                      hoveredCountry === country.code ? 'z-20' : ''
                    }`}
                    style={{
                      left: `${country.coordinates.x}%`,
                      top: `${country.coordinates.y}%`
                    }}
                    onMouseEnter={() => setHoveredCountry(country.code)}
                    onMouseLeave={() => setHoveredCountry(null)}
                    onClick={() => setSelectedCountry(country)}
                  >
                    {/* Точка на карте */}
                    <motion.div
                      className={`w-4 h-4 ${regionColor.dot} rounded-full border-2 border-white shadow-lg ${
                        selectedCountry?.code === country.code ? 'ring-2 ring-blue-400' : ''
                      }`}
                    />
                    
                    {/* Всплывающая подсказка при наведении */}
                    <AnimatePresence>
                      {hoveredCountry === country.code && (
                        <motion.div
                          initial={{ opacity: 0, y: 10, scale: 0.8 }}
                          animate={{ opacity: 1, y: 0, scale: 1 }}
                          exit={{ opacity: 0, y: 10, scale: 0.8 }}
                          className="absolute bottom-full left-1/2 transform -translate-x-1/2 mb-2 bg-white rounded-lg shadow-lg border border-slate-200 p-2 min-w-[120px] text-center"
                        >
                          <div className="text-lg mb-1">{getFlagEmoji(country.code)}</div>
                          <div className="text-sm font-semibold text-slate-900 whitespace-nowrap">
                            {country.name}
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </motion.div>
                );
              })}

              {/* Подпись карты */}
              <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 text-slate-500 text-sm">
                {t('partnersInternational.mapCaption')}
              </div>
            </div>
          </div>
        </motion.div>

        {/* Список стран */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="mb-12 sm:mb-16 lg:mb-20"
        >
          <motion.div
            variants={itemVariants}
            className="text-center mb-8 sm:mb-12"
          >
            <h3 className="text-2xl sm:text-3xl font-bold text-slate-900 mb-4">
              {t('partnersInternational.countriesList.title')}
            </h3>
            <p className="text-slate-600 max-w-2xl mx-auto">
              {t('partnersInternational.countriesList.subtitle')}
            </p>
          </motion.div>

          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-3 sm:gap-4">
            {countries.map((country) => {
              const regionColor = regionColors[country.region];
              return (
                <motion.button
                  key={country.code}
                  variants={cardVariants}
                  className={`bg-white rounded-xl p-3 sm:p-4 border-2 ${
                    selectedCountry?.code === country.code 
                      ? `${regionColor.border} border-2 shadow-lg` 
                      : 'border-slate-200 hover:border-slate-300'
                  } transition-all duration-300 text-left group`}
                  whileHover={{ scale: 1.05, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => setSelectedCountry(country)}
                >
                  <div className="flex items-center space-x-2 sm:space-x-3 mb-2">
                    <span className="text-xl sm:text-2xl">{getFlagEmoji(country.code)}</span>
                    <span className={`text-xs font-medium ${regionColor.text}`}>
                      {t(`partnersInternational.regions.${country.region}`)}
                    </span>
                  </div>
                  <h4 className="text-sm sm:text-base font-semibold text-slate-900 line-clamp-2 group-hover:text-blue-600 transition-colors duration-300">
                    {country.name}
                  </h4>
                </motion.button>
              );
            })}
          </div>
        </motion.div>

        {/* Типы сотрудничества */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="text-center"
        >
          <motion.div
            variants={itemVariants}
            className="bg-gradient-to-r from-blue-50 to-green-50 rounded-2xl p-6 sm:p-8 border border-blue-200"
          >
            <h3 className="text-2xl sm:text-3xl font-bold text-slate-900 mb-6">
              {t('partnersInternational.cooperation.title')}
            </h3>
            
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4 sm:gap-6">
              {cooperationTypes.map((type, index) => (
                <motion.div
                  key={index}
                  variants={cardVariants}
                  className="bg-white rounded-xl p-4 border border-slate-200 hover:border-blue-300 transition-all duration-300 group"
                  whileHover={{ y: -5, scale: 1.05 }}
                >
                  <div className="text-2xl sm:text-3xl mb-2 group-hover:scale-110 transition-transform duration-300">
                    {type.icon}
                  </div>
                  <div className="text-sm sm:text-base font-medium text-slate-700">
                    {type.label}
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </motion.div>
      </div>

      {/* Модальное окно с информацией о стране */}
      <AnimatePresence>
        {selectedCountry && (
          <motion.div
            className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedCountry(null)}
          >
            <motion.div
              variants={modalVariants}
              initial="hidden"
              animate="visible"
              exit="hidden"
              className="bg-white rounded-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="p-6 sm:p-8">
                {/* Заголовок модального окна */}
                <div className="flex items-center justify-between mb-6">
                  <div className="flex items-center space-x-4">
                    <span className="text-4xl">{getFlagEmoji(selectedCountry.code)}</span>
                    <div>
                      <h2 className="text-2xl font-bold text-slate-900">
                        {selectedCountry.name}
                      </h2>
                      <span className={`inline-flex items-center px-3 py-1 rounded-full text-sm font-medium ${
                        regionColors[selectedCountry.region].bg
                      } ${regionColors[selectedCountry.region].text}`}>
                        {t(`partnersInternational.regions.${selectedCountry.region}`)}
                      </span>
                    </div>
                  </div>
                  <button
                    onClick={() => setSelectedCountry(null)}
                    className="text-slate-400 hover:text-slate-600 transition-colors duration-300"
                  >
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                    </svg>
                  </button>
                </div>

                {/* Направления сотрудничества */}
                <div className="mb-6">
                  <h3 className="text-lg font-semibold text-slate-900 mb-4">
                    {t('partnersInternational.modal.cooperationAreas')}
                  </h3>
                  <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
                    {cooperationTypes.slice(0, 3).map((type, index) => (
                      <div
                        key={index}
                        className="flex items-center space-x-2 p-3 bg-slate-50 rounded-lg"
                      >
                        <span className="text-xl">{type.icon}</span>
                        <span className="text-sm font-medium text-slate-700">{type.label}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Примеры проектов */}
                <div className="mb-6">
                  <h3 className="text-lg font-semibold text-slate-900 mb-4">
                    {t('partnersInternational.modal.projects')}
                  </h3>
                  <div className="space-y-3">
                    {[1, 2, 3].map((project, index) => (
                      <div
                        key={index}
                        className="p-4 bg-gradient-to-r from-blue-50 to-green-50 rounded-lg border border-blue-200"
                      >
                        <h4 className="font-semibold text-slate-900 mb-2">
                          {t(`partnersInternational.countries.${selectedCountry.code}.projects.${index}.title`)}
                        </h4>
                        <p className="text-slate-600 text-sm leading-relaxed">
                          {t(`partnersInternational.countries.${selectedCountry.code}.projects.${index}.description`)}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Дополнительная информация */}
                <div className="pt-6 border-t border-slate-200">
                  <h3 className="text-lg font-semibold text-slate-900 mb-4">
                    {t('partnersInternational.modal.additionalInfo')}
                  </h3>
                  <p className="text-slate-600 leading-relaxed">
                    {t(`partnersInternational.countries.${selectedCountry.code}.description`)}
                  </p>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default PartnersInternational;